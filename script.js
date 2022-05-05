const open_menu_button = document.getElementById('open_menu_button')
const close_menu_button = document.querySelector('.close_menu_button')
const menu = document.querySelector(".menu")

const features = document.getElementById('features')
const expanded_features = document.querySelector('.expanded_features')
const company = document.getElementById('company')
const expanded_company = document.querySelector('.expanded_company')

const arrow_features = document.getElementById('arrow_features')
const arrow_company = document.getElementById('arrow_company')

const image_hero = document.getElementById('image_hero')


if (screen.width < 950) {
    image_hero.src = 'images/image-hero-mobile.png'

} else if (screen.width >= 950) {  
    open_menu_button.classList.add('hide')
    close_menu_button.classList.add('hide')   
    image_hero.src = 'images/image-hero-desktop.png'
}

    open_menu_button.addEventListener("click", function(){
        menu.classList.remove('hide')
    }) 

    close_menu_button.addEventListener("click", function(){
        menu.classList.add('hide')
    })

    features.addEventListener('click', function(){
        if(expanded_features.classList.contains('hide')) {
            expanded_features.classList.remove('hide')
            arrow_features.src = 'images/icon-arrow-up.svg'
        } else {
            expanded_features.classList.add('hide')
            arrow_features.src = 'images/icon-arrow-down.svg'
        }

        if(!expanded_company.classList.contains('hide')){
            expanded_company.classList.add('hide')
        }
    })

    company.addEventListener('click', function(){
        if(expanded_company.classList.contains('hide')) {
            expanded_company.classList.remove('hide')
            arrow_company.src = 'images/icon-arrow-up.svg'
        } else {
            expanded_company.classList.add('hide')
            arrow_company.src = 'images/icon-arrow-down.svg'
        }

        if(!expanded_features.classList.contains('hide')){
            expanded_features.classList.add('hide')
        }
    })


