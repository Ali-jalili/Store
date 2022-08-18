let slideIndex = 1 ;
let remaintime = 70000 ;

function setTime(){
    if(remaintime == 0) return;
    let h = Math.floor(remaintime/3600);
    let m = Math.floor((remaintime%3600)/60);
    let s = (remaintime%3600)%60;

    document.querySelector('#hours').innerHTML = h
    document.querySelector('#minutes').innerHTML = m
    document.querySelector('#seconds').innerHTML = s
}

setInterval(() => {
    remaintime -= 1;
    setTime()
}, 1000);

function setSlide(input,index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children] ;
    slides.forEach((element)=>{
          element.classList.remove('active');
    })
    item.classList.add('active');

}

setInterval(() => {
    slideIndex +=1;

     if(slideIndex==4){
         slideIndex=1;
    }
    setSlide(`slide${slideIndex}` , slideIndex)

},4000);

animate__fadeIn


