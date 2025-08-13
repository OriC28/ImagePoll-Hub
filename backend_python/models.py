from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm  import relationship
from database import Base


class Image(Base):
    __tablename__ = "images"
    id = Column(Integer, primary_key=True, autoincrement=True)
    url = Column(String, nullable=False)
    title = Column(String, nullable=True)
    description = Column(String, nullable=True)
    votes = Column(Integer, nullable=True)
    cart_items = relationship('Opinion', backref='image')

class Opinion(Base):
    __tablename__ = "opinions"
    id = Column(Integer, primary_key=True, autoincrement=True)
    image_id = Column(Integer, ForeignKey("images.id"), nullable=False)
    username = Column(String, nullable=False)
    message = Column(String, nullable=False)
    created_at = Column(DateTime, nullable=False)