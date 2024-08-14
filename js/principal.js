
// Controlamos el evento "submit" del formulario de contacto
document.querySelector('.formulario-contacto form').addEventListener('submit', function(event) {
    // Evitamos que se ejecute el comportamiento por defecto del formulario
    event.preventDefault();

    // Obtenemos los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const numero = document.getElementById('numero').value;
    const descripcion = document.getElementById('descripcion').value;

    // Creamos un objeto 
    const contactoData = {
        nombre: nombre,
        correo: correo,
        numero: numero,
        descripcion: descripcion
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactoData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Formulario enviado con éxito');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario');
    });
});

