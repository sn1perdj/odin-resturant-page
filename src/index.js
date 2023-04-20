import hero from "./heroSection";
import home from "./home";
import menu from "./menu";
import about from "./about";

const content = document.querySelector(".content");
content.append(hero(), home());

const liItems = document.querySelectorAll("li");
liItems.forEach((li, index) =>
    li.addEventListener("click", () => {
        console.log(li.innerText);

        if (li.innerText === "Home") {
            content.removeChild(content.lastElementChild);
            content.append(home());
        } else if (li.innerText === "Menu") {
            content.removeChild(content.lastElementChild);
            content.append(menu());
        } else if (li.innerText === "About") {
            content.removeChild(content.lastElementChild);
            content.append(about());
        }
    })
);
