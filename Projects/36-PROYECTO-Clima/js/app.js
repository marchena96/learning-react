import { countries } from './countries.js';
import { showSuggestions, showError, showWeather, limpiarHTML, showSpinner } from './ui.js';
import { fetchWeather, fetchCities } from './api.js';

const form = document.querySelector('#form'); // Corregido para coincidir con index.html
const selectPais = document.querySelector('#pais');
let timeoutId; // Para el debounce

document.addEventListener('DOMContentLoaded', () => {
    fillCountries();
    form.addEventListener('submit', buscarClima);

    // ... (lógica del form y países)

    inputCiudad.addEventListener('input', (e) => {
        const query = e.target.value;

        // Limpiamos el timeout anterior si el usuario sigue escribiendo
        clearTimeout(timeoutId);

        if (query.length < 3) return;

        // Esperamos 500ms después de la última tecla
        timeoutId = setTimeout(async () => {
            const cities = await fetchCities(query);
            showSuggestions(cities, (selectedCity) => {
                inputCiudad.value = selectedCity.name;
                // Podrías incluso guardar el país automáticamente:
                document.querySelector('#pais').value = selectedCity.country;
            });
        }, 500);
    });
});

function fillCountries() {
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        selectPais.appendChild(option);
    });
}

async function buscarClima(e) {
    e.preventDefault();
    const ciudad = document.querySelector('#ciudad').value;
    const pais = selectPais.value;

    if (ciudad === '' || pais === '') {
        showError('Ambos campos son obligatorios'); // Lógica de app.js
        return;
    }
    // 1. Mostrar Spinner mientras esperamos la respuesta
    showSpinner();

    const data = await fetchWeather(ciudad, pais);
    limpiarHTML();

    if (data) {
        showWeather(data);
    } else {
        showError('No se pudo encontrar el clima de esa ciudad');
    }
}