const API_KEY = 'fe2def66855116fa18212dbd82cd71d6'; // De tu archivo app.js

export async function fetchWeather(city, country) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Ciudad no encontrada');
        return await response.json();
    } catch (error) {
        return null;
    }
}



export async function fetchCities(query) {
    const API_KEY = 'fe2def66855116fa18212dbd82cd71d6';
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error buscando ciudades:", error);
        return [];
    }
}