import { Issue } from "@/types/issue";
import IssueCard from "@/components/IssueCard";
import { IssuesGridProps } from "@/types/issuesgrid";



export default function IssuesGrid({
  issues,
  selectedLanguage,
  searchRepo,
  searchOrg,
  showFAANGOnly,
  showOnlyActive,
  selectedSort,
}: IssuesGridProps) {
  return (
    <div className="flex justify-center">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {issues
          .filter((issue) => {
            if (selectedLanguage && issue.repository.language?.toLowerCase() !== selectedLanguage.toLowerCase()) {
              return false;
            }
            if (searchRepo && !issue.repository.name.toLowerCase().includes(searchRepo.toLowerCase())) {
              return false;
            }
            if (searchOrg && !issue.repository.owner.toLowerCase().includes(searchOrg.toLowerCase())) {
              return false;
            }
            if (showFAANGOnly) {
              const faangOrgs = ["facebook", "amazon", "apple", "netflix", "google"];
              if (!faangOrgs.includes(issue.organization.toLowerCase())) {
                return false;
              }
            }
            if (showOnlyActive && issue.isAssigned) {
              return false;
            }
            return true;
          })
          .sort((a, b) => {
            if (selectedSort === "stars") {
              return (b.repository.stars ?? 0) - (a.repository.stars ?? 0);
            } else if (selectedSort === "updated") {
              return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
            }
            return 0;
          })
          .map((issue, index) => (
            <IssueCard key={index} issue={issue} />
          ))}
      </div>
    </div>
  );
}
