from database import session
from models import Image


def get_images():
    return session.query(Image).all()


def vote_to(image_id: int):
    image = session.query(Image).filter(Image.id == image_id).first()
    if not image:
        return False
    image.votes += 1
    session.commit()
