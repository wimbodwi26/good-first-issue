from app.services.issues_store import load_issues_from_cache
from fastapi import HTTPException
from typing import List
from app.models.issue_model import Issue

async def get_issues() -> List[Issue]:
    try:
        issues = await load_issues_from_cache()
        return {"success": True, "data": issues}
    except Exception as e:
        print(f"❌ Error loading issues from Redis: {e}")
        raise HTTPException(status_code=500, detail="Internal server error fetching issues.")



