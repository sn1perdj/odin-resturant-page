const renderLocationDetailsSection = () => {
    const details = document.createElement("section");
    details.classList.add("details");

    const addressSection = document.createElement("div");
    addressSection.classList.add("address");
    const mapSection = document.createElement("div");
    mapSection.classList.add("map");

    function renderAddressSection() {
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        h2.innerText = "Our Location";
        p.innerText =
            "We're openning new location each month. Check back frequently to see if we're coming to a city near you.";

        const location = document.createElement("div");
        location.classList.add("location");
        const locationImg = document.createElement("img");
        const locationAddress = document.createElement("p");
        locationImg.src = "./assets/location.png";
        locationImg.alt = "icon";
        locationAddress.innerText =
            "SADDLE BROOK, 383 Market Street, Saddle Brook, NJ07663";
        location.append(locationImg, locationAddress);

        addressSection.append(h2, p, location);
    }

    function renderMapSection() {
        const img = document.createElement("img");
        img.src = "./assets/map.jpg";
        img.alt = "map__location";

        mapSection.append(img);
    }

    renderAddressSection();
    renderMapSection();
    details.append(addressSection, mapSection);
    return details;
};

export default renderLocationDetailsSection;
