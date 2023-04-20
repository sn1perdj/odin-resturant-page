const about = () => {
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("aboutSection");
    aboutSection.innerHTML = `<h1>We are Cloud Kitchen, We server all kind of 
    non-hygienic food.</h1>`;

    return aboutSection;
};

export default about;
