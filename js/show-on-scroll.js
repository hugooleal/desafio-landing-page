const targets = document.querySelectorAll('.show-on-scroll');
const offset = (window.innerHeight * 0.8) + 100;
console.log('offset' + offset);
function showOnScroll(){
    let documentTop = document.documentElement.scrollTop;
    console.log('documentTop' + documentTop);
    targets.forEach( (target) => {
        let targetTop = target.offsetTop;
        console.log('targetTop' + targetTop);
        console.log('offset' + offset);
        documentTop > targetTop - offset ? target.classList.add('is-visible') : target.classList.remove('is-visible');
    });
}

showOnScroll();
document.addEventListener('scroll', showOnScroll);