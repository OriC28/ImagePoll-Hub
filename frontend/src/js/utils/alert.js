
export const showErrorAlert = (message) => {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'Aceptar'
    });
}

export const showSuccessAlert = (message) => {
    Swal.fire({
        title: 'Éxito!',
        text: message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}