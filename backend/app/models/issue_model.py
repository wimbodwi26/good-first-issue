from pydantic import BaseModel
from typing import List, Optional

class RepositoryInfo(BaseModel):
    name: str
    fullName: str
    description: Optional[str]
    owner: str
    stars: int
    language: Optional[str]
    topics: List[str]
    lastCommit: str
    visibility: str

class Issue(BaseModel):
    title: str
    url: str
    createdAt: str
    updatedAt: str
    labels: List[str]
    commentsCount: int
    isAssigned: bool
    repository: RepositoryInfo
    organization: str
