const container = document.querySelector(".images");

// EX7: Write a function to change the h1 text to something else

const changeTheHeader = function changeHeader() {
  const h1 = document.querySelector("h1");
  h1.innerText = "This is my new shop";
};
changeTheHeader();

// EX8: Write a function to change the page background color

const changeBackgroundColor = function changeBackgroundColor() {
  const backgroundColor = document.querySelector("body");
  backgroundColor.style.backgroundColor = "grey";
};
changeBackgroundColor();

// EX9: Write a function to change the footer address with a fake one

const changeFooter = function changeFooter() {
  const footer = document.querySelector("footer > p");
  footer.innerText = "This is a fake address LoL";
};
changeFooter();

// EX10: Write a function to add a CSS class to every Amazon link
const addClass = function addClass() {
  const linkClass = document.querySelector("span");
  linkClass.classList.add = "amazon-link";
};
addClass();

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

const hideContainer = function hideContainer() {
  //   const container = document.querySelector("img");
  container.classList.toggle("hidden"); // this leaverages the class we created in css to hide the element, toggling it on / off
};

// EX12: Write a function to color the price of the products in a different one every time it’s invoked

const changeColor = function changeColor() {
  const priceColor = document.querySelector(".price");
  for (let i = 0; i < 10; i++) {
    priceColor.style.color = color(i);
  }
};
