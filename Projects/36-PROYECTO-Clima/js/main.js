// Date: Sunday March 15th, 2026 04:20 PM
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#form');

window.addEventListener('load', () => {
    form.addEventListener('submit', buscarClima);
})


// 2. Set function to find the weather
function buscarClima(e) {
    e.preventDefault();

    // 3. Validar ciudad y país para poder consultar la API
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        displayErrorMessage('Ambos campos son obligatorios');
        return;
    }

    //4. Consultar la API: Obtener una API Key


    console.log('Buscando el clima ...');
}


//3. Function to display an error message
function displayErrorMessage(message) {
    console.log(message);

    // Create alert
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

//4. Function call to API
function callToAPI(pais, ciudad) {
    const API_KEY = 'fe2def66855116fa18212dbd82cd71d6';


}