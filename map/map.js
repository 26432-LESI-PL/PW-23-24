// Define map center and zoom level
const map = L.map("map").setView([41.537001, -8.627749], 13);

// Add base layer (e.g., OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(map);

// Function to display location information card
function showLocationInfo(data) {
    const locationInfo = document.getElementById("location-info");
    locationInfo.innerHTML = ""; // Clear previous info

    const card = document.createElement("div");
    card.classList.add("location-card");

    const title = document.createElement("h3");
    title.innerText = `${data.lon},${data.lat}` || "Nome da localização";
    card.appendChild(title);

    const district = document.createElement("p");
    district.innerText = data.distrito || "Nenhuma informação disponível";
    card.appendChild(district);

    const city = document.createElement("p");
    city.innerText = data.concelho || "Nenhuma informação disponível";
    card.appendChild(city);

    const locality = document.createElement("p");
    locality.innerText = data.freguesia || "Nenhuma informação disponível";
    card.appendChild(locality);

    locationInfo.appendChild(card);
}

// Ao clicar no mapa, obter informação da localização
map.on("click", (e) => {
    fetch(`https://json.geoapi.pt/gps/${e.latlng.lat},${e.latlng.lng}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            L.marker(e.latlng).addTo(map).bindPopup(`A localização clicada encontra-se no distrito de ${data.distrito}, no concelho de ${data.concelho} e na freguesia de ${data.freguesia}`).openPopup();
            showLocationInfo(data);
        });
});
