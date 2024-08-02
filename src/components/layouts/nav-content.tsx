import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Focus } from "lucide-react";
import { workspaceLinks, teamLinks, dummyTeams } from "./links";

const NavContent = () => {
  return (
      <div className="flex flex-col gap-5 text-xs font-normal tracking-normal text-primary">
        <Link href={"#"}>Workspace</Link>
        <Link href={"#"} className="rounded-sm p-1.5">
          <Focus className="mr-2 inline-flex h-4 w-4 text-primary/70" /> My
          Tasks
        </Link>
        <div>
          <Accordion type="multiple">
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="text-xs font-medium text-primary/50">
                Workspace
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1.5">
                  {workspaceLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.path}
                      className="flex items-center rounded-sm p-1.5"
                    >
                      <link.icon className="mr-2 inline-flex h-4 w-4 text-primary/70" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-0">
              <AccordionTrigger className="text-xs font-medium text-primary/50">
                My teams
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1.5">
                  {teamLinks.map((link, index) => (
                    <div key={index}>
                      <Link
                        href={link.path}
                        className="flex items-center rounded-sm p-1.5"
                      >
                        <link.icon className="mr-2 inline-flex h-4 w-4 text-primary/70" />
                        {link.name}
                      </Link>
                      {link.subLinks && (
                        <div className="ml-3.5 mt-1.5 flex flex-col gap-1.5 border-l border-primary/70 pl-2.5">
                          {link.subLinks.map((subLink, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subLink.path}
                              className="rounded-sm p-1.5"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
  );
};

export default NavContent;
