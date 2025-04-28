import { Issue } from "@/types/issue";

export interface IssuesGridProps {
  issues: Issue[];
  selectedLanguage: string | null;
  searchRepo: string;
  searchOrg: string;
  showFAANGOnly: boolean;
  showOnlyActive: boolean;
  selectedSort: string;
}
