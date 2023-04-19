function renderHeroSection() {
    const hero = document.createElement("section");
    hero.classList.add("hero");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    const header = document.createElement("div");
    header.classList.add("header");

    function renderNavbar() {
        const logoImg = document.createElement("img");
        logoImg.src = "./assets/logo.png";
        logoImg.alt = "logo";

        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        li1.innerText = "Home";
        li2.innerText = "Menu";
        li3.innerText = "About";

        ul.append(li1, li2, li3);
        navbar.append(logoImg, ul);
    }

    function renderHeader() {
        const textSection = document.createElement("div");
        textSection.classList.add("text");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const btn = document.createElement("button");
        h1.innerText = "Peri Set Go!";
        p.innerText =
            "We invite you to experience the fire that brings us all together.";
        btn.innerText = "Order Now";
        textSection.append(h1, p, btn);

        const imgSection = document.createElement("div");
        imgSection.classList.add("image");
        const heroImg = document.createElement("img");
        heroImg.src = "./assets/chicken-removebg-preview.png";
        heroImg.alt = "Chicken";
        imgSection.append(heroImg);

        header.append(textSection, imgSection);
    }

    renderHeader();
    renderNavbar();
    hero.append(navbar, header);
    return hero;
}

function renderLocationDetailsSection() {
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
}

const content = document.querySelector(".content");
content.append(renderHeroSection(), renderLocationDetailsSection());
