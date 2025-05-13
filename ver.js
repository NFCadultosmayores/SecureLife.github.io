document.addEventListener('DOMContentLoaded', function() {
    mostrarRegistroIndividual();
});

// Mostrar el registro individual al hacer clic en "Ver"
function mostrarRegistroIndividual() {
    const registroDetalle = document.getElementById('registroDetalle');
    const verIndex = localStorage.getItem('verIndex');
    const registros = JSON.parse(localStorage.getItem('registros')) || [];

    if (id !== null && registros[id]) {
        const registro = registros[id];
        registroDetalle.innerHTML = `
            <p><strong>Nombre Completo:</strong> ${registro.nombre}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${registro.fechaNacimiento}</p>
            <p><strong>Edad:</strong> ${registro.edad}</p>
            <p><strong>Alergias:</strong> ${registro.alergias}</p>
            <p><strong>Enfermedad:</strong> ${registro.enfermedad}</p>
            <p><strong>Medicamentos:</strong> ${registro.medicamentos}</p>
            <p><strong>Seguro Médico:</strong> ${registro.seguroMedico}</p>
            <p><strong>Domicilio:</strong> ${registro.domicilio}</p>
            <p><strong>Nacionalidad:</strong> ${registro.nacionalidad}</p>
            <p><strong>Contacto 1:</strong> ${registro.contacto1.nombre} (${registro.contacto1.parentesco}, ${registro.contacto1.telefono})</p>
            <p><strong>Contacto 2:</strong> ${registro.contacto2.nombre} (${registro.contacto2.parentesco}, ${registro.contacto2.telefono})</p>
        `;
    } else {
        registroDetalle.innerHTML = `<p>No se encontró el registro.</p>`;
    }
}

// Función para editar el registro
function editarRegistro() {
    const id = obtenerParametroURL('id');
    if (id !== null) {
        window.location.href = `editar.html?id=${id}`; // Pasa el índice para editar
    }
}
