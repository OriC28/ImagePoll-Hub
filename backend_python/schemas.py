from pydantic import BaseModel


class Image(BaseModel):
    id: int
    url: str
    title: str | None = None
    description: str | None = None
    votes: int | None = None

class Opinion(BaseModel):
    id: int
    image_id: int
    username: str
    message: str
    created_at: str

class CreateOpinion(BaseModel):
    image_id: int
    username: str
    message: str