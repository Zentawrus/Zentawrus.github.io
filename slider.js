const productPrice = document.querySelector(".product_price");
const productDescription = document.querySelector(".product_description");
const productImage = document.querySelector(".product_image");

const descriptions = ['This is an awesome frog!', 'This is an awesome frog!', 'This is an awesome frog! (best price)'];
const prices = [1900, 2500, 1700];
const images = [
    'https://i.pinimg.com/originals/ab/d7/e5/abd7e5dd501a25bfc1d43b702ea812dc.png',
    'https://web-assets.limewire.media/u/a61cb62a-54a3-4f70-b757-4737d83a4824/2c8b0581-3afe-44f4-9897-3962e192ff8c.d/post_image_large.jpeg',
    'https://www.lvzoo.org/wp-content/themes/lvzoo/timthumb.php?src=https://www.lvzoo.org/wp-content/uploads/2015/11/Whites-Tree-Frog-image1.jpg&w=776&h=771'
];

const totalAmountOfProduct = 3;
let cancelNextAutoSlide = false;
let productIndex = 0;

function slideLeft() {
    productIndex = (productIndex - 1 + totalAmountOfProduct) % totalAmountOfProduct;
    cancelNextAutoSlide = true;
    changeProductDetails(productIndex);


}

function slideRight() {
    productIndex = (productIndex + 1) % totalAmountOfProduct;
    cancelNextAutoSlide = true;
    changeProductDetails(productIndex);


}

function changeProductDetails(index) {
    productPrice.textContent = prices[index] + "$";
    productDescription.textContent = descriptions[index];
    productImage.src = images[index];
}


setInterval(() => {

    if (!cancelNextAutoSlide) {
        slideRight();
    }
    cancelNextAutoSlide = false;
}, 5000);
