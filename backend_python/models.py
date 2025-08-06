from sqlalchemy import Column, Integer, String
from database import Base


class Image(Base):
    __tablename__ = "images"
    id = Column(Integer, primary_key=True)
    url = Column(String, nullable=False)
    title = Column(String, nullable=True)
    description = Column(String, nullable=True)
    votes = Column(Integer, nullable=True)
