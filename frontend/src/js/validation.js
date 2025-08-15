
export const validateId = (id) => {
    if(validator.isEmpty(id)){
        return {isValid: false, message: "El id es requerido."};
    }
    if(!validator.isInt(id, {min: 1})){
        return {isValid: false, message: "El id debe ser un entero mayor a 0."};
    }
    return {isValid: true};
}

export const validateUsername = (username) => {
    if(validator.isEmpty(username)){
        return {isValid: false, message: "El nombre de usuario es requerido."};
    }
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
     if(validator.isEmpty(msg)){
        return {isValid: false, message: "El mensaje es requerido."};
    }
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