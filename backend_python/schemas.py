from pydantic import BaseModel


class Image(BaseModel):
    id: int
    url: str
    title: str | None = None
    description: str | None = None
    votes: int | None = None
