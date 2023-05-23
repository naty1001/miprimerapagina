const form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
    event.defaultPrevented();
    validateForm();
});
function validEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validEmail(email)) {
        alert( 'Por favor ingrese un correo electronico valido.');
    } else {
        alert('Correp electronico enviado correctamente.');
    }

}