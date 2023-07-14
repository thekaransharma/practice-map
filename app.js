function initMap() {
    // Map options
    var options = {
        zoom: 5,
        center: { lat: 20.5937, lng: 78.9629 },
        mapId: 'fce7b562ba20d47d'
    };

    // Create the map
    var map = new google.maps.Map(document.getElementById('map'), options);

    let MarkerArray =
        [{
            location: { lat: 10.1632, lng: 76.6413 },
            imageIcon: "js/greenPin.svg",
            content: `<h2>Location: Kerela<br>
            Store Name: XYZ</h2>`},

        {
            location: { lat: 31.8087, lng: 76.1029 },
            imageIcon: "js/redPin.svg",
            content: `<h2>Location: Chintpurni<br>
            Store Name: ABC</h2>`},
        {
            location: { lat: 26.2006, lng: 92.9376 },
            imageIcon: "js/redPin.svg",
            content: `<h2>Location: Assam<br>
            Store Name: PQR</h2>`},

        {
            location: { lat: 21.1458, lng: 79.0882 },
            imageIcon: "js/redPin.svg",
            content: `<h2>Location: Nagpur<br>
            Store Name: DEF</h2>`},
        {
            location: { lat: 15.2993, lng: 74.1240 },
            imageIcon: "js/greenPin.svg",
            content: `<h2>Location: Goa<br>
            Store Name: GOA</h2>`},
        {
            location: { lat: 30.9084, lng: 77.0999 },
            imageIcon: "js/greenPin.svg",
            content: `<h2>Location: Solan<br>
            Store Name: LMN</h2>`},
        {
            location: { lat: 21.2787, lng: 81.8661 },
            imageIcon: "js/greenPin.svg",
            content: `<h2>Location: Chhattisgarh<br>
            Store Name: STR</h2>`},

        {
            location: { lat: 26.9124, lng: 75.7873 },
            imageIcon: "js/greenPin.svg",
            content: `<h2>Location: Jaipur<br>
            Store Name: JPR</h2>`},

        {
            location: { lat: 22.9868, lng: 87.8550 },
            imageIcon: "js/redPin.svg",
            content: `<h2>Location: Bengal<br>
            Store Name: BGL</h2>`},
        {
            location: { lat: 22.3072, lng: 73.1812 },
            imageIcon: "js/redPin.svg",
            content: `<h2>Location: Vadodra<br>
            Store Name: GJR</h2>`},
        {
            location: { lat: 18.5204, lng: 73.8567 },
            imageIcon: "js/redPin.svg",
            content: `<h2>Location: Vadodra<br>
            Store Name: GJR</h2>`},
        {
            location: { lat: 31.4685, lng: 76.2708 },
            imageIcon: "js/redPin.svg",
            content: `<h2>Location: Una<br>
            Store Name: UNA</h2>`},
        ]

    // loop through marker
    for (let i = 0; i < MarkerArray.length; i++) {
        addMarker(MarkerArray[i]);

    }

    // Add Marker

    function addMarker(property) {

        const marker = new google.maps.Marker({
            position: property.location,
            map: map,
        });

        if (property.imageIcon) {
            // set image icon
            marker.setIcon(property.imageIcon)
        }

        if (property.content) {

            const detailWindow = new google.maps.InfoWindow({
                content: property.content
            });

            marker.addListener("click", () => {
                detailWindow.open(map, marker);
            })
        }

    }

}