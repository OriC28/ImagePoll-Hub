import { createOpinion } from "./utils/api.js";
import { validateId, validateUsername, validateMessage, validateAllEmpty } from "./utils/validation.js";
import { showErrorAlert, showSuccessAlert } from "./utils/alert.js";

const form = document.getElementById("form-id");


const getFormData = (e) => {
    const {id, username, message} = e.target;
    const data = {
        image_id: id.value,
        username: username.value,
        message: message.value
    };
    return data;
}

const handleForm = async (e) => {
    e.preventDefault();
   
    const data = getFormData(e);
    const {image_id, username, message} = data;
  
    const idResult = validateId(image_id);
    const usernameResult = validateUsername(username);
    const messageResult = validateMessage(message);
    const allResult = validateAllEmpty(data);

    if(!allResult.isValid){
        showErrorAlert(allResult.message);
        return;
    }

    if(idResult.isValid && usernameResult.isValid && messageResult.isValid){
        try {
            const result = await createOpinion(data);
            showSuccessAlert(result.detail.message);
            return;
        } catch (error) {
            showErrorAlert("Error al crear la opinión: " + error.message);
            return;
        }
    }else{
        if(!idResult.isValid){
            showErrorAlert(idResult.message);
            return;
        }
        if(!usernameResult.isValid){
            showErrorAlert(usernameResult.message);
            return;
        }
        if(!messageResult.isValid){
            showErrorAlert(messageResult.message);
            return;
        }
    }

    console.log(data);
}

form.addEventListener("submit", handleForm);
