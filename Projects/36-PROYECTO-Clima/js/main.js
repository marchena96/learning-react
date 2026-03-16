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
    //! Aquí es donde llamas a la función para consultar la API: ESTABA FALLANDO POR ESTO
    callToAPI(ciudad, pais);

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

    // Partes del endpoint:
    // 1. Base URL: La dirección del servidor
    // 2. El parámetro de búsqueda (ciudad y país)
    // 3. appid: Tu credencial de acceso
    // 4. units: Para que te de grados Celsius (metric) y no Kelvin

    const appId = 'fe2def66855116fa18212dbd82cd71d6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric`;

    // Mostramos un spinner o mensaje de carga si quieres (opcional)
    console.log("Conectando...");

    console.log(url); // Imprimir para ver si se armó bien

    // Luego haces el fetch(url)...
    // Realizar la petición
    fetch(url)
        .then(response => response.json()) // Paso 1: Convertir a JSOn
        .then(data => {
            console.log(data);

            if (data.cod === "404") {
                displayErrorMessage('Ciudad no encontrada');
                return;
            }

            //Paso 2: Mostrar resultado en el HTML
            mostrarClima(data);
        })
        .catch(error => console.log('Error de red:', error));
}

function mostrarClima(datos) {
    const { name, main: { temp, temp_max, temp_min } } = datos;

    // Limpiar el HTML previo
    resultado.innerHTML = '';

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl', 'text-center', 'text-white');

    // 4. Crear el elemento para la temperatura actual
    const actual = document.createElement('p');
    actual.innerHTML = `Actual: ${Math.round(temp)} &#8451;`; // Muestra grados Celsius
    actual.classList.add('font-bold', 'text-6xl', 'text-center', 'text-white');

    // 5. Crear el elemento para la temperatura MÁXIMA
    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${Math.round(temp_max)} &#8451;`;
    tempMaxima.classList.add('text-xl', 'text-center', 'text-white')

    // 6. Crear el elemento para la temperatura MÍNIMA
    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${Math.round(temp_min)} &#8451;`;
    tempMinima.classList.add('text-xl', 'text-center', 'text-white');

    // 7. Crear un contenedor para organizar los elementos
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');

    // IMPORTANTE: Agregar todos los elementos al contenedor
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima); // <-- Si no haces esto, no se verá
    resultadoDiv.appendChild(tempMinima); // <-- Si no haces esto, no se verá

    // 8. Inyectar el contenedor final en el DOM
    resultado.appendChild(resultadoDiv);
}

function KelvinACentigrados(grados) {
    return parseInt(grados - 273.15);
}