import { Listbox, ListboxButton, ListboxOption,ListboxOptions } from "@headlessui/react";
import { useState } from "react";

interface SortDropdownProps {
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
}

const sortOptions = [
  { id: "stars", name: "Stars" },
  { id: "updated", name: "Last Updated" },
];

export default function SortDropdown({ selectedSort, setSelectedSort }: SortDropdownProps) {
  return (
    <div className="w-full max-w-xs">
      <Listbox value={selectedSort} onChange={setSelectedSort}>
        <div className="relative">
          <ListboxButton className="border border-gray-300 rounded p-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sort by: {sortOptions.find((opt) => opt.id === selectedSort)?.name || "Select"}
          </ListboxButton>
          <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white shadow-lg border border-gray-200 z-10">
            {sortOptions.map((option) => (
              <ListboxOption
                key={option.id}
                value={option.id}
                className={({ active }) =>
                  `cursor-pointer p-2 ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
              >
                {option.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
