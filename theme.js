const changeTheme = () => {
    const theme = document.getElementById('theme');
    const buttons = document.querySelectorAll('.theme-button');
    const icons = document.querySelectorAll('.theme-icon')

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.textContent === "Light") {
                    button.textContent = "Dark";
                    icons.forEach((icon) => {
                        icon.classList.remove('fa-sun');
                        icon.classList.add('fa-moon');
                    })
                    theme.attributes.href.value = "./styles/light.css"
            }   else {
                    button.textContent = "Light";
                    icons.forEach((icon) => {
                        icon.classList.remove('fa-moon');
                        icon.classList.add('fa-sun');   
                    })
                    theme.attributes.href.value = "./styles/dark.css"
                    console.log(theme.attributes.href.textContent)
            } 
    
        })
    })

}

export default changeTheme;