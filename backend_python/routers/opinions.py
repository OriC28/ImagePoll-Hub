from fastapi import APIRouter, HTTPException, status
from schemas import CreateOpinion
import services

router = APIRouter(
    prefix="/opinions", tags=["opinions"], responses={404: {"message": "No encontrado."}})


@router.get("/")
async def get_all_opinons():
    return services.get_opinions()

@router.post("/")
async def create_opinion(opinion: CreateOpinion):
    result = services.save_opinion(opinion.image_id, opinion.username, opinion.message)
    if result == False:
        return HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail={"message": "Imagen no encontrada."})
    return HTTPException(status_code=status.HTTP_201_CREATED, detail={"message": "Opinion guardada con éxito."})

@router.get("/{image_id}")
async def get_all_opinions_by_id(image_id: int):
    return services.get_all_opinion_to(image_id)
