from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

with open("text.txt", "r") as file:
    content = file.read()
    
content = content.splitlines()
print(len(content)) # 8

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/article")
async def get_article():
    return {
        "title": "Judul Berita yang Agak Panjang Dikit: GPP Ini Contoh Aja",
        "body": [
            {
                "type": "paragraph",
                "content": content[0],
            },
            {
                "type": "paragraph",
                "content": content[1],
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
                "type": "paragraph",
                "content": content[4],
            },
            {
                "type": "paragraph",
                "content": content[5],
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


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("server:app", host="0.0.0.0", port=6969, reload=True)
