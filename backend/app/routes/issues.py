from fastapi import APIRouter, Query
from app.controllers.issues_controller import get_issues

router = APIRouter()

@router.get("/issues")
async def fetch_issues(
    language: str = Query(None),
    organization: str = Query(None),
    sort: str = Query(None),
    limit: int = Query(20)
):
    return await get_issues()
