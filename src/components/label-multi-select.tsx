// src/components/multi-select.tsx

import * as React from "react";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Checkbox } from "./ui/checkbox";
import useMediaQuery from "@/hooks/use-media-query";
import TagColorDialog from "./tag-color-pick";



/**
 * Props for MultiSelect component
 */
interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An array of option objects to be displayed in the multi-select component.
   * Each option object has a label, value, and an optional icon.
   */
  options: {
    /** The text to display for the option. */
    label: string;
    /** The unique value associated with the option. */
    value: string;
    /** Optional icon component to display alongside the option. */
    icon?: React.ComponentType<{ className?: string }>;
  }[];

  /**
   * Callback function triggered when the selected values change.
   * Receives an array of the new selected values.
   */
  onValueChange: (value: string[]) => void;

  /** The default selected values when the component mounts. */
  defaultValue: string[];

  /**
   * Placeholder text to be displayed when no values are selected.
   * Optional, defaults to "Select options".
   */
  placeholder?: React.ReactNode;

  /**
   * Animation duration in seconds for the visual effects (e.g., bouncing badges).
   * Optional, defaults to 0 (no animation).
   */
  animation?: number;

  /**
   * Maximum number of items to display. Extra selected items will be summarized.
   * Optional, defaults to 3.
   */
  maxCount?: number;

  /**
   * The modality of the popover. When set to true, interaction with outside elements
   * will be disabled and only popover content will be visible to screen readers.
   * Optional, defaults to false.
   */
  modalPopover?: boolean;

  /**
   * If true, renders the multi-select component as a child of another component.
   * Optional, defaults to false.
   */
  asChild?: boolean;

  /**
   * Additional class names to apply custom styles to the multi-select component.
   * Optional, can be used to add custom styles.
   */
  className?: string;
  size?: "default" | "xs" | "sm" | "lg" | "icon" | null | undefined;
}

export const TagMultiSelect = React.forwardRef<
  HTMLButtonElement,
  MultiSelectProps
>(
  (
    {
      options,
      onValueChange,
      defaultValue = [],
      placeholder = "Select options",
      animation = 0,
      maxCount = 3,
      modalPopover = false,
      asChild = false,
      className,
      size,
      ...props
    },
    ref,
  ) => {
    const [selectedValues, setSelectedValues] =
      React.useState<string[]>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("")
    const [newLabel, setNewLabel] = React.useState(""); // State to hold the new label being added
    const [isDialogOpen, setIsDialogOpen] = React.useState(false); // State to manage dialog visibility


    React.useEffect(() => {
      if (JSON.stringify(selectedValues) !== JSON.stringify(defaultValue)) {
        setSelectedValues(selectedValues);
      }
    }, [defaultValue, selectedValues]);

    const handleInputKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
      if (event.key === "Enter" && inputValue.trim()) {
        // Check if the input value matches any existing option
        const doesMatch = options.some(option =>
          option.label.toLowerCase() === inputValue.trim().toLowerCase()
        );

        if (!doesMatch) {
          setNewLabel(inputValue.trim()); // Set the new label
          setIsDialogOpen(true); // Open the dialog
        } else {
          // Optionally, you could display a message or just do nothing
          console.log("Label already exists");
        }
        setIsPopoverOpen(true);
      } else if (event.key === "Backspace" && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];
        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onValueChange(newSelectedValues);
      }
    };

    const toggleOption = (value: string) => {
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
    };

    const handleInputChange = (value:string) => {
      setInputValue(value)
    }

    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
      <>
      
      <Popover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        modal={modalPopover}
      >
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            {...props}
            onClick={handleTogglePopover}
            variant={isDesktop ? "ghost" : "outline"}
            size={size || "sm"}
            className={cn("h-8 justify-start w-full", className)}
          >
            {placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align="start"
          side={isDesktop ? "left" : "bottom"}
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command>
            <CommandInput
              placeholder="Add new tag..."
              onKeyDown={handleInputKeyDown}
              onValueChange={handleInputChange}
            />
            <CommandList>
              <CommandEmpty>New Tag: &quot;{inputValue}&quot;	</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selectedValues.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleOption(option.value)}
                      className="group cursor-pointer"
                    >
                      <Checkbox className="mr-2 border-0 group-hover:border group-hover:border-primary data-[selected=true]:border data-[selected=true]:border-primary" />
                      <div className="mr-1 h-2 w-2 rounded-full bg-green-500" />

                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <TagColorDialog open={isDialogOpen} setOpen={setIsDialogOpen}/>
      </>


    );
  },
);

TagMultiSelect.displayName = "TagMultiSelect";
