import { createOpinion } from "./api.js";
import { validateId, validateUsername, validateMessage } from "./validation.js";

const form = document.getElementById("form-id");

const handleForm = async (e) => {
    e.preventDefault();
    const {id, username, message} = e.target;
    const data = {
        image_id: id.value,
        username: username.value,
        message: message.value
    };
    const idResult = validateId(id.value);
    const usernameResult = validateUsername(username.value);
    const messageResult = validateMessage(message.value);

    if(idResult.isValid && usernameResult.isValid && messageResult.isValid){
        const response = await createOpinion(data);
        console.log(response);
    }
   
    console.log(id.value, username.value, message.value);
}

form.addEventListener("submit", handleForm);
