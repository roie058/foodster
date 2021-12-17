mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: restaurant.geometry.coordinates,
    zoom: 12
});

map.addControl(new mapboxgl.NavigationControl());
new mapboxgl.Marker()
    .setLngLat(restaurant.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
        .setHTML(
            `<h5>${restaurant.Name}</h5><p>${restaurant.location}</p>`
        )
    )
    .addTo(map)