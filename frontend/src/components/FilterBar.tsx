import { FilterBarProps } from "@/types/filterbar";
import LanguageFilter from "@/components/LanguageFilter";
import SortDropdown from "@/components/SortDropdown";

export default function FilterBar({
  searchRepo,
  setSearchRepo,
  searchOrg,
  setSearchOrg,
  showFAANGOnly,
  setShowFAANGOnly,
  showOnlyActive,
  setShowOnlyActive,
  selectedSort,
  setSelectedSort,
  languages,
  selectedLanguage,
  setSelectedLanguage,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center justify-center">
      {/* Repo Search */}
      <input
        type="text"
        placeholder="Search Repo..."
        className="border p-2 rounded w-48 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchRepo}
        onChange={(e) => setSearchRepo(e.target.value)}
      />

      {/* Org Search */}
      <input
        type="text"
        placeholder="Search Org..."
        className="border p-2 rounded w-48 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchOrg}
        onChange={(e) => setSearchOrg(e.target.value)}
      />

      {/* FAANG Only Toggle */}
      <button
        onClick={() => setShowFAANGOnly(!showFAANGOnly)}
        className={`px-4 py-2 rounded ${
          showFAANGOnly ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {showFAANGOnly ? "Showing FAANG Only" : "All Organizations"}
      </button>

      {/* Show Only Active Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          id="active-checkbox"
          type="checkbox"
          checked={showOnlyActive}
          onChange={(e) => setShowOnlyActive(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="active-checkbox" className="text-sm text-gray-700">
          Show Only Active
        </label>
      </div>

      {/* Sort Dropdown */}
      <SortDropdown
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />

      {/* Language Filter */}
      <LanguageFilter
        languages={languages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
    </div>
  );
}
