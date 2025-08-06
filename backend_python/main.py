from fastapi import FastAPI
from routers.images import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

""" origins = ["http://localhost:5173", "http://localhost"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) """

app.include_router(router)


@app.get("/")
async def root():
    return {"api": "test"}
