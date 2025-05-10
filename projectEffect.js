const projectEffect = () => {

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const section = document.querySelector('#projects');
        const sectionTop = section.offsetTop + 500;
        const sectionBottom = sectionTop + section.offsetHeight + 200;

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
            document.querySelector('.project-1').style = "transform: translateX(0%); opacity: 1"
            document.querySelector('.tech-stack-1').style = "transform: translateY(0%); opacity: 1"
            document.querySelector('.project-2').style = "transform: translateX(0%); opacity: 1"
            document.querySelector('.tech-stack-2').style = "transform: translateX(0%); opacity: 1"
            // document.querySelector('.project-3').style = "transform: translateX(0%); opacity: 1"
            // document.querySelector('.tech-stack-3').style = "transform: translateY(0%); opacity: 1"
        } else {
            document.querySelector('.project-1').style = "transform: translateX(-100%); opacity: 0"
            document.querySelector('.tech-stack-1').style = "transform: translateY(-100%); opacity: 0"
            document.querySelector('.project-2').style = "transform: translateX(100%); opacity: 0"
            document.querySelector('.tech-stack-2').style = "transform: translateX(-100%); opacity: 0"
            // document.querySelector('.project-3').style = "transform: translateX(-100%); opacity: 0"
            // document.querySelector('.tech-stack-3').style = "transform: translateY(100%); opacity: 0"
        }
    })
}

export default projectEffect;