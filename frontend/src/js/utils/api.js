
const url = 'http://127.0.0.1:8000/opinions';

export const createOpinion = async (data) => {
    const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, config);
        const JSONResponse = await response.json();
        console.log(JSONResponse);
        if(JSONResponse.status_code === 404){
            throw new Error(JSONResponse.detail.message);
        }else{
            return JSONResponse;
        }

    } catch (error){
        console.error("Error:", error);
        throw error;
    }
}

export const getAllOpinions = async () => {
    try {
        const response = await fetch(url);
        const JSONResponse = await response.json();
        return JSONResponse;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export const getImageById = async (id) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/images/${id}`);
        const JSONResponse = await response.json();
        return JSONResponse;
        
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}