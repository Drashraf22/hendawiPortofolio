let xmark=document.getElementById("xmark");
let bar=document.getElementById("bar");
let list=document.getElementById("head-ul");
let mainSearch=document.getElementById("mainSearch");
let searchPage=document.getElementById("search");
let xsearch=document.getElementById("xsearch");

bar.onclick=function(){
    list.classList.add("active");
}

xmark.onclick=function(){
    list.classList.remove("active");
}
window.onscroll=function(){
    list.classList.remove("active");
}

mainSearch.addEventListener("click", ()=>{
    searchPage.classList.add('open');
})
xsearch.addEventListener("click", ()=>{
    searchPage.classList.remove('open');
});

/*========= change header background=========*/
function scrollHeader(){
    const header=document.getElementById("header");
    if(this.scrollY >= 50){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}

window.addEventListener('scroll', scrollHeader)


/*========= animation brand=========*/

window.addEventListener('scroll', ()=>{
    function animateLeft(){
        let elements=document.querySelectorAll('.ant');
        elements.forEach((element)=>{
            let rect=element.getBoundingClientRect();
            let space = rect.y;
            if(space < 600){
                element.style.opacity = '1';
                element.classList.add('animate__bounceInLeft')
            }
        })
    }
    animateLeft();
})

    /*========= animation brand=========*/

window.addEventListener('load', ()=>{
    function animateUp(){
        let ele=document.querySelectorAll('.service-card');
        ele.forEach((element)=>{
            let rect=element.getBoundingClientRect();
            let space=rect.y;
            if(space < 0){
                element.style.opacity = '1';
                element.classList.add('animate__bounceInUp')
            }
        })
    }
    animateUp();
})

/*swiper*/

let swiper = new Swiper(".project-container", {
    loop:true,
    slidePerview:1,
    spaceBetween:30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakPoints:{
        768:{
            slidesPerview:2,
        },
        992:{
            slidesPerview:3,
        },
    }
});

