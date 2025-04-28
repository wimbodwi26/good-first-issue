start-backend:
	cd backend && \
	python3 -m venv venv && \
	source venv/bin/activate && \
	pip install -r requirements.txt && \
	uvicorn app.main:app --reload --host 0.0.0.0 --port 8000