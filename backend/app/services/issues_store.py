import json
import os
import asyncio
import redis.asyncio as redis
from app.models.issue_model import Issue
from dotenv import load_dotenv

load_dotenv()

REDIS_URL = os.getenv("REDIS_URL")

REDIS_KEY = "goodfirstissue"

r = redis.from_url(REDIS_URL, decode_responses=True)

async def save_issues_to_cache(issues: list[Issue]):
    serialized_issues = [issue.dict() for issue in issues]
    await r.set(REDIS_KEY, json.dumps(serialized_issues))
    await r.expire(REDIS_KEY, 300)  # Expire in 5 minutes

async def load_issues_from_cache() -> list[Issue]:
    data = await r.get(REDIS_KEY)
    if data:
        issues_raw = json.loads(data)
        return [Issue(**issue) for issue in issues_raw]
    else:
        return []

async def clear_issues_cache():
    await r.delete(REDIS_KEY)
