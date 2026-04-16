const container = document.querySelector('.container'); // Corregido typo
const resultado = document.querySelector('#resultado');

export function showError(message) {
    const alertExists = document.querySelector('.bg-red-100');
    if (!alertExists) {
        const alert = document.createElement('div');
        alert.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "max-w-md", "mx-auto", "mt-6", "text-center");
        alert.innerHTML = `<strong class="font-bold">Error!</strong> <span class="block sm:inline">${message}</span>`;
        container.appendChild(alert);
        setTimeout(() => alert.remove(), 3000);
    }
}

export function showWeather(data) {
    const { name, main: { temp, temp_max, temp_min } } = data;
    const celsius = Math.round(temp - 273.15);

    limpiarHTML();
    const content = document.createElement('div');
    content.classList.add('text-center', 'text-white');
    content.innerHTML = `
        <p class="font-bold text-2xl">Clima en ${name}</p>
        <p class="font-bold text-6xl">${celsius} &#8451;</p>
        <p class="text-xl">Max: ${Math.round(temp_max - 273.15)} &#8451; / Min: ${Math.round(temp_min - 273.15)} &#8451;</p>
    `;
    resultado.appendChild(content);
}

export function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// js/ui.js

// ... (showError, showWeather, limpiarHTML se mantienen igual)

export function showSpinner() {
    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;
    resultado.appendChild(divSpinner);
}

// js/ui.js
// ...

export function showSuggestions(cities, callback) {
    const existingList = document.querySelector('#suggestions-list');
    if (existingList) existingList.remove();

    if (cities.length === 0) return;

    const list = document.createElement('ul');
    list.id = 'suggestions-list';
    list.classList.add('bg-white', 'border', 'border-gray-300', 'rounded-b-lg', 'shadow-lg', 'absolute', 'z-10', 'w-full');

    cities.forEach(city => {
        const item = document.createElement('li');
        item.classList.add('p-2', 'hover:bg-gray-100', 'cursor-pointer', 'text-gray-700');
        item.textContent = `${city.name}, ${city.state || ''} (${city.country})`;

        item.onclick = () => {
            callback(city);
            list.remove();
        };
        list.appendChild(item);
    });

    document.querySelector('#ciudad').parentElement.appendChild(list);
}