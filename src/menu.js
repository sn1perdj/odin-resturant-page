const menuSection = () => {
    const menu = document.createElement("section");
    menu.classList.add("menuSection");
    menu.innerHTML = `<div class="item">
    <div class="food__pic">
        <img
            src="./assets/chicken tandoori.jpg"
            alt="chiken_tandoori"
        />
    </div>
    <div class="food__details">
        <h3>Chicken Tandoori</h3>
        <button>Show Info</button>
    </div>
</div>

<div class="item">
    <div class="food__pic">
        <img src="./assets/mtnBiryani.jpg" alt="mutton_biryani" />
    </div>
    <div class="food__details">
        <h3>Mutton Biryani</h3>
        <button>Show Info</button>
    </div>
</div>

<div class="item">
    <div class="food__pic">
        <img src="./assets/tomatoSalad.jpg" alt="tomato_salad" />
    </div>
    <div class="food__details">
        <h3>Tomato Salad</h3>
        <button>Show Info</button>
    </div>
</div>`;

    return menu;
};

export default menuSection;
