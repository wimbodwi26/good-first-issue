export interface FilterBarProps {
    searchRepo: string;
    setSearchRepo: (val: string) => void;
    searchOrg: string;
    setSearchOrg: (val: string) => void;
    showFAANGOnly: boolean;
    setShowFAANGOnly: (val: boolean) => void;
    showOnlyActive: boolean;
    setShowOnlyActive: (val: boolean) => void;
    selectedSort: string;
    setSelectedSort: (val: string) => void;
    languages: string[];
    selectedLanguage: string | null;
    setSelectedLanguage: (val: string | null) => void;
  }