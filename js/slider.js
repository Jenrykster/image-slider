let imgSlider = document.querySelector('.img-slider');
let imgContainer = document.querySelector('.img-container');
let arrowRight = document.querySelector('.arrow-right');
let arrowLeft = document.querySelector('.arrow-left');


arrowRight.addEventListener('click', nextImage);
arrowLeft.addEventListener('click', previousImage);

let images = [];
let actualImgIndex = 0;

for(let image of imgContainer.children){
    images.push(image);
}
function nextImage(e){
    actualImgIndex < images.length-1 ? actualImgIndex++ : actualImgIndex = 0;
    let actualMargin = imgContainer.style.marginLeft;
    imgContainer.style.marginLeft = `${-500 * actualImgIndex}px`;
}
function previousImage(e){
    actualImgIndex > 0 ? actualImgIndex-- : actualImgIndex = images.length -1;
    let actualMargin = imgContainer.style.marginLeft;
    imgContainer.style.marginLeft = `${-500 * actualImgIndex}px`;
}