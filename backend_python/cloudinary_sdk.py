import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url

from config import settings

# Configuration
cloudinary.config(
    cloud_name=settings.CLOUD_NAME,
    api_key=settings.API_KEY,
    api_secret=settings.API_SECRET,
    secure=True
)

# Upload an image
upload_result = cloudinary.uploader.upload(
    "store/lelouch_2.jpg", public_id="lelouch_2")

optimize_url, _ = cloudinary_url(
    "lelouch_2", fetch_format="auto", quality="auto")
print(optimize_url)
