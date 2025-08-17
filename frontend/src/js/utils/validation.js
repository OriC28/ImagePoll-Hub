
export const validateId = (id) => {
    if(!validator.isInt(id, {min: 1})){
        return {isValid: false, message: "El id debe ser un número entero mayor a 0."};
    }
    return {isValid: true};
}

export const validateAllEmpty = (data) => {
    const {image_id, username, message} = data;
    if(validator.isEmpty(image_id) || validator.isEmpty(username) || validator.isEmpty(message)){
        return {isValid: false, message: "Todos los campos son requeridos."};
    }
    return {isValid: true};
}


export const validateUsername = (username) => {
    if(validator.matches(username, /^[0-9.+-]+$/g)){
        return {isValid: false, message: "El nombre de usuario no puede ser numérico."};
    }
    if(!validator.isLength(username, {min: 3, max: 20})){
        return {isValid: false, message: "El nombre de usuario debe tener entre 3 y 20 caracteres."};
    }

    if(!validator.matches(username, /^[a-zA-Z0-9._-]/)){
        return {isValid: false, message: "El nombre de usuario contiene caracteres invalidos."};
    }
    return {isValid: true};
}

export const validateMessage = (msg) => {
    if(validator.matches(msg, /^[0-9.+-]+$/g)){
        return {isValid: false, message: "El mensaje no puede ser numérico."};
    }
    if(!validator.isLength(msg, {min: 2, max: 255})){
        return {isValid: false, message: "El mensaje debe tener entre 3 y 20 caracteres."};
    }

    if(!validator.matches(msg, /^(?!\s*$).{2,255}$/)){
        return {isValid: false, message: "El mensaje contiene caracteres invalidos."};
    }
    return {isValid: true};
}