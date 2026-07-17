const map = L.map("map").setView(
[
    listing.geometry.coordinates[1],
    listing.geometry.coordinates[0]
],
    13
);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
attribution:"© OpenStreetMap contributors"
}
).addTo(map);

L.marker(
[
listing.geometry.coordinates[1],
listing.geometry.coordinates[0]
]
)
.addTo(map)
.bindPopup(listing.title)
.openPopup();