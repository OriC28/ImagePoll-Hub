import {getAllOpinions, getImageById} from "./utils/api.js";

const feedbackContainer = document.getElementById("feedbacks");

const showOpinions = async () => {
    try {
        const response = await getAllOpinions();
        console.log(response);
        displayOpinions(response);
    } catch (error) {
        console.error("Error:", error);
        throw error;     
    }
}

const displayOpinions = async (opinions) => {
    for (const opinion of opinions) {
        const image = await getImageById(opinion.image_id);
        feedbackContainer.innerHTML += `
            <div class="bg-purple-500 flex flex-row justify-between p-2 content-center rounded-lg">
                <div class="flex flex-col justify-between min-w-2/3 md:w-4/5 lg:w-4/5">
                    <p class="text-lg">
                        Opinión: ${opinion.message}
                    </p>
                    <div>
                        <p class="text-sm">Usuario: ${opinion.username ? opinion.username : ""}</p>
                        <p class="text-sm">${opinion.created_at.slice(0, 10)}</p>
                    </div>  
                </div>
                <div class="flex justify-center min-w-1/3 md:w-1/5 lg:w-1/5">
                    <img class="object-cover rounded-lg md:h-[180px] lg:h-[180px]"
                    src="${image.url}"
                    alt="foto"/>
                </div>
            </div>
        `
        
    }
}

window.addEventListener("load", showOpinions);
