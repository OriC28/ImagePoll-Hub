from fastapi import APIRouter, HTTPException, status
import services

router = APIRouter(
    prefix="/images", tags=["images"], responses={404: {"message": "No encontrado."}})

@router.get("/")
async def get_all_images():
    return services.get_images()

@router.get("/{image_id}")
async def get_image_by_id(image_id: int):
    return services.get_image_by_id(image_id)

@router.post("/votes/{image_id}")
async def create_vote_to(image_id: int):
    result = services.vote_to(image_id)
    if result == False:
        return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail={"message": "Imagen no encontrada."})
    return HTTPException(status_code=status.HTTP_201_CREATED, detail={"message": "Imagen votada con éxito."})
