export interface RepositoryInfo {
    name: string;
    fullName: string;
    description: string;
    owner: string;
    stars: number;
    language: string;
    topics: string[];
    lastCommit: string;
    visibility: string;
  }
  
  export interface Issue {
    title: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    labels: string[];
    commentsCount: number;
    isAssigned: boolean;
    repository: RepositoryInfo;
    organization: string;
  }
  