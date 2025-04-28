import asyncio
from app.services.github_service import fetch_all_issues_from_github
from app.services.issues_store import save_issues_to_cache

REFRESH_INTERVAL = 6 * 60 * 60  # 6 hours in seconds

async def refresh_issues():
    print("🔄 Starting refresh cycle...")

    try:
        issues = await fetch_all_issues_from_github()

        if not issues:
            print("⚠️ No issues fetched from GitHub. Skipping cache update.")
            return

        await save_issues_to_cache(issues)
        print(f"✅ Saved {len(issues)} issues to Redis cache successfully.")

    except Exception as e:
        print(f"❌ Error during refresh: {e}")

async def refresh_loop():
    print("🚀 Worker started successfully. Beginning refresh loop.")

    while True:
        await refresh_issues()

        print(f"⏳ Sleeping for {REFRESH_INTERVAL / 3600:.1f} hours until next refresh...")
        await asyncio.sleep(REFRESH_INTERVAL)

if __name__ == "__main__":
    try:
        asyncio.run(refresh_loop())
    except KeyboardInterrupt:
        print("👋 Worker shutdown requested. Exiting gracefully.")
    except Exception as e:
        print(f"❌ Critical Worker Error: {e}")
