let rightContent = document.querySelectorAll('.content-right');
let leftContent = document.querySelectorAll('.content-left');

const slideLeft = function(entries,observer){
    let [entry] = entries;
    if(!entry.isIntersecting) return;

    entry.target.classList.remove('content-right-hidden');
    entry.target.classList.add('content-right-show');
    observer.unobserve(entry.target);
}
const slideRight = function(entries,observer){
    let [entry] = entries;
    console.log(entry)
    if(!entry.isIntersecting) return;

    entry.target.classList.remove('content-left-hidden');
    entry.target.classList.add('content-left-show');
    observer.unobserve(entry.target);
}



let observeContentRight = new IntersectionObserver(slideLeft,{root:null,threshold:0.10});
let observeContentLeft = new IntersectionObserver(slideRight,{root:null,threshold:0.10});

rightContent.forEach(el => {
    observeContentRight.observe(el);
})
leftContent.forEach(el => {
    observeContentLeft.observe(el);
})


let right = document.querySelector('.right');
let left = document.querySelectorAll('.left');

function slideTextLeft(entries,observer){
    let [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('hidden');
    entry.target.classList.add('right-text-slide');
    observer.unobserve(entry.target);
}
function slideTextRight(entries,observer){
    let [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('hidden');
    entry.target.classList.add('left-text-slide');
    observer.unobserve(entry.target);
}

let observeRight = new IntersectionObserver(slideTextLeft,{root:null,threshold:0});
let observeLeft = new IntersectionObserver(slideTextRight,{root:null,threshold:0});


left.forEach(el => {
    observeLeft.observe(el);
})

observeRight.observe(right);
