"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Badge } from "./ui/badge";

const TagColorDialog = ({
  open,
  setOpen,
}: {
  open?: boolean;
  setOpen?: ((open: boolean) => void) | undefined;
}) => {
  const options = [
    { color: "bg-green-400", tag: "Green" },
    { color: "bg-red-400", tag: "Red" },
    { color: "bg-amber-400", tag: "Amber" },
    { color: "bg-blue-400", tag: "Blue" },
    { color: "bg-neutral-400", tag: "Neutral" },
    { color: "bg-neutral-400", tag: "Neutral" },
    { color: "bg-neutral-400", tag: "Neutral" },
    { color: "bg-neutral-400", tag: "Neutral" },
    { color: "bg-neutral-400", tag: "Neutral" },
  ];

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleSelect = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="hidden">Trigger</Button>
      </DialogTrigger>
      <DialogContent>
        <Command className="p-2.5">
          <Badge variant={"secondary"} className="w-fit rounded-md font-normal">
            TID-01 - Title
          </Badge>
          <CommandInput
            className="py-5 text-lg"
            placeholder="Select a color for tag ..."
          />
          <CommandList>
            <CommandEmpty>No tags found</CommandEmpty>
            <CommandGroup className="space-y-2.5">
              {options.map((option) => {
                const isSelected = selectedTag === option.tag;
                return (
                  <CommandItem
                    key={option.tag}
                    className="p-2.5 px-3"
                    onClick={() => handleSelect(option.tag)}
                  >
                    <div
                      className={`mr-2.5 h-2.5 w-2.5 rounded-full ${option.color}`}
                    />
                    <span>{option.tag}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default TagColorDialog;
