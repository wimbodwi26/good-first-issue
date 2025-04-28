import { Combobox, ComboboxInput, ComboboxOptions,ComboboxOption } from "@headlessui/react";
import { useState } from "react";

interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string | null;
  setSelectedLanguage: (lang: string | null) => void;
}

export default function LanguageFilter({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}: LanguageFilterProps) {
  const [query, setQuery] = useState("");

  const filteredLanguages =
    query === ""
      ? languages
      : languages.filter((lang) =>
          lang.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="w-full max-w-xs">
      <Combobox value={selectedLanguage} onChange={setSelectedLanguage}>
        <div className="relative">
          <ComboboxInput
            className="border border-gray-300 rounded p-2 w-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Filter by Language..."
            displayValue={(lang: string) => lang}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white shadow-lg border border-gray-200 z-10">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <ComboboxOption
                  key={lang}
                  value={lang}
                  className={({ active }) =>
                    `cursor-pointer p-2 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                >
                  {lang}
                </ComboboxOption>
              ))
            ) : (
              <div className="p-2 text-gray-500">No languages found.</div>
            )}
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>
  );
}
