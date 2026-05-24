from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

with open("text.txt", "r") as file:
    content = file.read()
    
content = content.splitlines()

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

app.mount("/assets", StaticFiles(directory="./static"), name="assets")


@app.get("/article")
async def get_article():
    return {
        "title": "Judul Berita yang Agak Panjang Dikit: GPP Ini Contoh Aja",
        "hero": "http://localhost:6969/assets/article/hero.jpeg",
        "body": [
            {
                "type": "paragraph",
                "content": content[0],
            },
            {
                "type": "image",
                "content": "http://localhost:6969/assets/article/img1.jpg",
            },
            {
                "type": "paragraph",
                "content": content[1],
            },
            {
                "type": "image",
                "content": "http://localhost:6969/assets/article/img2.jpg",
            },
            {
                "type": "paragraph",
                "content": content[2],
            },
            {
                "type": "paragraph",
                "content": content[3],
            },
            {
                "type": "image",
                "content": "http://localhost:6969/assets/article/img3.jpg",
            },
            {
                "type": "paragraph",
                "content": content[4],
            },
            {
                "type": "paragraph",
                "content": content[5],
            },
            {
                "type": "image",
                "content": "http://localhost:6969/assets/article/img4.jpg",
            },
            {
                "type": "paragraph",
                "content": content[6],
            },
            {
                "type": "paragraph",
                "content": content[7],
            },
            ],
    }

@app.get("/recommendation")
async def get_recommendation():
    return {"message": "This is a simple recommendation endpoint."}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("server:app", host="0.0.0.0", port=6969, reload=True)
