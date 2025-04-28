from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.issues import router as issues_router
from app.services.github_service import fetch_all_issues_from_github
from app.services.issues_store import save_issues_to_cache
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Later tighten this to your frontend domain only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health", tags=["Monitoring"])
async def health_check():
    return {"status": "ok"}

# Mount main API routers
app.include_router(issues_router, prefix="/api", tags=["Issues"])
