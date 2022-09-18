const navSlide=()=>{
    const burger=document.querySelector(".burger");
    const nav=document.querySelector(".nav-links");
    function iconChange(){
        
    }
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        // document.getElementsByClassName('menu-icon').src="../images/close.png";
        
        if(nav.classList.contains('nav-active')){
            document.querySelector('.menu-icon').src="../images/close.png";
        }
        else{
            document.querySelector('.menu-icon').src="../images/hamburger.png";
        }
    });
}

navSlide()