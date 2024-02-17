from fastapi import FastAPI
from fastapi.params import Body
from pydantic import BaseModel
from typing import Optional

app = FastAPI()


class Post(BaseModel):
    title: str
    content: str
    publichsed: bool = True
    rating: Optional[int] = None


@app.get("/")
async def root():
    return {"message": "edream back-end service"}


@app.get("/login")
async def login():
    return {"message": "login"}


@app.post("/posts")
# def create_post(body: dict = Body(...)):
def create_post(post: Post):
    return {"message": f"{post.title} created"}