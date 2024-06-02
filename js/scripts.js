const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyle = document.documentElement.style;

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    //console.log(text);
    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        //console.log (section, value);
        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener("click", (e) => {
    //console.log(e.target.parentElement.dataset.language)
    changeLanguage(e.target.parentElement.dataset.language)
})

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon.svg')){
        toggleIcon.src='assets/icons/sun.svg';
        toggleText.textContent = 'Light Mode';
    } else {
        toggleIcon.src='assets/icons/moon.svg';
        toggleText.textContent = 'Dark Mode';
    }
})

toggleColors.addEventListener("click", (e) => {
    //console.log(e.target.dataset);
    //console.log(e.target.dataset.color);
    rootStyle.setProperty("--primary-color",e.target.dataset.color);
})