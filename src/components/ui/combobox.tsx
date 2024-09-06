"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const categories = [
  {
    value: "cake decorator",
    label: "Cake Decorator",
  },
  {
    value: "pastry chef",
    label: "Pastry Chef",
  },
  {
    value: "chocolatier",
    label: "Chocolatier",
  },
  {
    value: "bread baker",
    label: "Bread Baker",
  },
];

const sortTypes = [
  {
    value: "default",
    label: "Sort By (Default)",
  },
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "oldest",
    label: "Oldest",
  },
  {
    value: "rating asc",
    label: "Rating (asc)",
  },
  {
    value: "rating desc",
    label: "Rating (dec)",
  }
];

export function SearchFormCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="category"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Categories"}
          <svg
            className={`${open && "rotate-180"} transition-transform`}
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path fill="black" d="m7 10l5 5l5-5z"></path>
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full xxxxs:w-72 xxs:w-80 md:max-w-52 p-0 font-montserrat">
        <Command>
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function SortByCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="category"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? sortTypes.find((sortType) => sortType.value === value)?.label
            : "Sort By (Default)"}
          <svg
            className={`${open && "rotate-180"} transition-transform`}
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path fill="black" d="m7 10l5 5l5-5z"></path>
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 md:max-w-52 p-0 font-montserrat">
        <Command>
          <CommandList>
            <CommandEmpty>No sorting selected.</CommandEmpty>
            <CommandGroup>
              {sortTypes.map((sortType) => (
                <CommandItem
                  key={sortType.value}
                  value={sortType.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === sortType.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {sortType.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}