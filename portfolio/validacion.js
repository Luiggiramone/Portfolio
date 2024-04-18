// Función para validar el formulario antes de enviar
function validarFormulario() {
    let nombre = document.forms["form"]["nombre"].value;
    let email = document.forms["form"]["email"].value;
    let asunto = document.forms["form"]["asunto"].value;
    let mensaje = document.forms["form"]["mensaje"].value;

    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    // Otras validaciones como el formato del correo electrónico, etc., pueden agregarse aquí

    // Si todos los campos están completos y validados, el formulario se enviará
    alert("¡Formulario enviado con éxito!");
    return true;
}

// Asociar la función de validación al evento submit del formulario
document.forms["form"].addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario
    validarFormulario();
});