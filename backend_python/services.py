from database import session
from models import Image, Opinion
from datetime import datetime

def get_images():
    return session.query(Image).all()


def vote_to(image_id: int):
    image = session.query(Image).filter(Image.id == image_id).first()
    if not image:
        return False
    image.votes += 1
    session.commit()

def get_image_by_id(image_id: int):
    return session.query(Image).filter(Image.id == image_id).first()

def get_all_opinion_to(image_id: int):
    return session.query(Opinion).filter(Opinion.image_id == image_id).all()

def get_opinions():
    return session.query(Opinion).order_by(Opinion.created_at.desc()).all()

def save_opinion(image_id: int, username: str, message: str):
    if not get_image_by_id(image_id):
        return False
    created_at = datetime.now().isoformat()
    session.add(Opinion(image_id=image_id, username=username, message=message, created_at=created_at))
    session.commit()
