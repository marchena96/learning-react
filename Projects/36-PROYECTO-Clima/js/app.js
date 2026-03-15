const container = document.querySelector('.conatiner');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

window.addEventListener('load', () => {
    form.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        showError('Ambos campos son obligatorios');
        return;
    }

    // Consulta a la API
}

function showError(message) {
    console.log(message);
    const alert = document.querySelector('.bg-red-100');

    if (!alert) {
        const alert = document.createElement('div');
        alert.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "max-w-md", "mx-auto", "mt-6", "text-center");

        alert.innerHTML = `
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline">${message}</span>
      `;

        container.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 3000);

    }


}


function requestAPI(ciudad, pais) {
    const API_KEY = 'fe2def66855116fa18212dbd82cd71d6';
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
}