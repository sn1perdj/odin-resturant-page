(()=>{"use strict";const e=()=>{const e=document.createElement("section");e.classList.add("details");const n=document.createElement("div");n.classList.add("address");const t=document.createElement("div");return t.classList.add("map"),function(){const e=document.createElement("h2"),t=document.createElement("p");e.innerText="Our Location",t.innerText="We're openning new location each month. Check back frequently to see if we're coming to a city near you.";const o=document.createElement("div");o.classList.add("location");const c=document.createElement("img"),a=document.createElement("p");c.src="./assets/location.png",c.alt="icon",a.innerText="SADDLE BROOK, 383 Market Street, Saddle Brook, NJ07663",o.append(c,a),n.append(e,t,o)}(),function(){const e=document.createElement("img");e.src="./assets/map.jpg",e.alt="map__location",t.append(e)}(),e.append(n,t),e},n=document.querySelector(".content");n.append((()=>{const e=document.createElement("section");e.classList.add("hero");const n=document.createElement("div");n.classList.add("navbar");const t=document.createElement("div");return t.classList.add("header"),function(){const e=document.createElement("div");e.classList.add("text");const n=document.createElement("h1"),o=document.createElement("p"),c=document.createElement("button");n.innerText="Peri Set Go!",o.innerText="We invite you to experience the fire that brings us all together.",c.innerText="Order Now",e.append(n,o,c);const a=document.createElement("div");a.classList.add("image");const i=document.createElement("img");i.src="./assets/chicken-removebg-preview.png",i.alt="Chicken",a.append(i),t.append(e,a)}(),function(){const e=document.createElement("img");e.src="./assets/logo.png",e.alt="logo";const t=document.createElement("ul"),o=document.createElement("li"),c=document.createElement("li"),a=document.createElement("li");o.innerText="Home",c.innerText="Menu",a.innerText="About",t.append(o,c,a),n.append(e,t)}(),e.append(n,t),e})(),e()),document.querySelectorAll("li").forEach(((t,o)=>t.addEventListener("click",(()=>{console.log(t.innerText),"Home"===t.innerText?(n.removeChild(n.lastElementChild),n.append(e())):"Menu"===t.innerText?(n.removeChild(n.lastElementChild),n.append((()=>{const e=document.createElement("section");return e.classList.add("menuSection"),e.innerHTML='<div class="item">\n    <div class="food__pic">\n        <img\n            src="./assets/chicken tandoori.jpg"\n            alt="chiken_tandoori"\n        />\n    </div>\n    <div class="food__details">\n        <h3>Chicken Tandoori</h3>\n        <button>Show Info</button>\n    </div>\n</div>\n\n<div class="item">\n    <div class="food__pic">\n        <img src="./assets/mtnBiryani.jpg" alt="mutton_biryani" />\n    </div>\n    <div class="food__details">\n        <h3>Mutton Biryani</h3>\n        <button>Show Info</button>\n    </div>\n</div>\n\n<div class="item">\n    <div class="food__pic">\n        <img src="./assets/tomatoSalad.jpg" alt="tomato_salad" />\n    </div>\n    <div class="food__details">\n        <h3>Tomato Salad</h3>\n        <button>Show Info</button>\n    </div>\n</div>',e})())):"About"===t.innerText&&(n.removeChild(n.lastElementChild),n.append((()=>{const e=document.createElement("section");return e.classList.add("aboutSection"),e.innerHTML="<h1>We are Cloud Kitchen, We server all kind of \n    non-hygienic food.</h1>",e})()))}))))})();