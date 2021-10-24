let imgSlider = document.querySelector('.img-slider');
let imgContainer = document.querySelector('.img-container');
let imgSelector = document.querySelector('.img-selector');
let arrowRight = document.querySelector('.arrow-right');
let arrowLeft = document.querySelector('.arrow-left');


arrowRight.addEventListener('click', nextImage);
arrowLeft.addEventListener('click', previousImage);

let images = [];
let actualImgIndex = 0;

for (let index = 0; index < imgContainer.children.length; index++) {
    images.push(imgContainer.children[index]);
    let newEL = document.createElement('p');
    newEL.innerHTML = index;
    newEL.addEventListener('click', changeImg);
    imgSelector.appendChild(newEL);
}
updateSelector();

function nextImage(e){
    actualImgIndex < images.length-1 ? actualImgIndex++ : actualImgIndex = 0;
    let actualMargin = imgContainer.style.marginLeft;
    imgContainer.style.marginLeft = `${-500 * actualImgIndex}px`;
    updateSelector();
}
function previousImage(e){
    actualImgIndex > 0 ? actualImgIndex-- : actualImgIndex = images.length -1;
    let actualMargin = imgContainer.style.marginLeft;
    imgContainer.style.marginLeft = `${-500 * actualImgIndex}px`;
    updateSelector();
}
function changeImg(e){
    actualImgIndex = e.target.innerHTML;
    let actualMargin = imgContainer.style.marginLeft;
    imgContainer.style.marginLeft = `${-500 * actualImgIndex}px`;
    updateSelector();
}
function updateSelector(){
    for(let selector of imgSelector.children){
        selector.classList.remove('selected');
    }
    imgSelector.children[actualImgIndex].classList.add('selected');
}

setTimeout(nextImage, 5000);