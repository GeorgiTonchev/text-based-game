//Parts of this code were used from Dev Ed
//available at: https://www.youtube.com/watch?v=gXkqy0b4M5g
//Accessed on 25 of April 2020
const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');

    menu.addEventListener('click', () =>{
        //Toggle Menu
        nav.classList.toggle('navactive');

        //Animation NavLinks
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation=''
    
            } else{
                link.style.animation = `navLinkFade 0.5s  forwards ${index / 7 + 0.6}s`
            }
            // console.log(index / 5);
        });
        //Menu X Form
        menu.classList.toggle('toggle')
    });

    
}

navSlide();