from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "start of edream back-end service"}