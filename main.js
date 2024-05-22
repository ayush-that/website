// JavaScript part
// Define an array with the URLs of your images
const imageUrls = [
  "https://i.pinimg.com/736x/7d/dd/61/7ddd61e721cc385eb5744d96493afb6a.jpg",
  "https://i.pinimg.com/1200x/bb/09/50/bb095081674dd278d267c1a2a3844ab3.jpg",
  "https://favim.com/pd/s11/orig/7/710/7108/71084/aesthetic-girl-hair-black-Favim.com-7108492.jpg",
  "https://i.pinimg.com/originals/c0/ec/19/c0ec190f270af0f83a49a3138ecddb8d.jpg",
  "https://i.pinimg.com/originals/8c/24/53/8c24534bde83f4a0d0abc0573c312bb7.jpg",
  "https://i.pinimg.com/736x/64/ea/e9/64eae99a070bb4c99c167aa3488c08f7.jpg",
  "https://i.pinimg.com/736x/e5/fb/5a/e5fb5abd632e73557561bb1fc8ad25ee.jpg",
  "https://i.pinimg.com/1200x/af/dc/98/afdc987b8b717a7367459686e676d7d2.jpg",
  "https://i.pinimg.com/236x/8f/ec/32/8fec32d595acac6949b287f617270775.jpg",
  "https://i.pinimg.com/1200x/af/dc/98/afdc987b8b717a7367459686e676d7d2.jpg",
  "https://i.pinimg.com/originals/d3/fa/f4/d3faf4a4b9a711ca52eca434b120cb1d.jpg",
  "https://i.pinimg.com/originals/c0/ec/19/c0ec190f270af0f83a49a3138ecddb8d.jpg",
  "https://i.pinimg.com/564x/42/0a/eb/420aebda1cf182f55fa040b259da44a1.jpg",
  "https://i.pinimg.com/550x/20/fe/b9/20feb9b98eb92b191c7f4f963abe776a.jpg",
  "https://i.pinimg.com/236x/0d/da/2e/0dda2e2846244f9137914b05215ec786.jpg",
  "https://i.pinimg.com/236x/de/2f/01/de2f01716dbdb67d5e1b9ed56e332f5f.jpg",
  "https://i.pinimg.com/236x/0d/da/2e/0dda2e2846244f9137914b05215ec786.jpg",
  "https://64.media.tumblr.com/74c3b0bbf469f37e97cc72e0e931756f/a38d298e238dbe3b-66/s1280x1920/4bed63b4f412e9f31e6880825813929ef98d32a2.jpg",
  "https://i.pinimg.com/736x/68/8a/4e/688a4efd2cc09f84c2976fbd38997fd0.jpg",
  "https://i.pinimg.com/280x280_RS/9c/2b/83/9c2b835a2c0b99d0bcc5262d898119d7.jpg",
  "https://i.pinimg.com/736x/6e/fe/b9/6efeb9fc53cbbb95e3ca5dfe01c1c4b3.jpg",
  "https://i.pinimg.com/736x/ee/8d/91/ee8d91eb9c5954ecbbd3b323044c65c1.jpg",
  "https://i.pinimg.com/originals/01/5b/c9/015bc96f3b93be890d2265edead6b43b.jpg",
  "https://i.pinimg.com/originals/c3/8f/d7/c38fd77775bf9ca8387d1e9522d2032c.jpg",
  "https://i.pinimg.com/originals/ee/72/85/ee7285b51f9e9ff5ad1495f91aedf3e6.jpg",
  // Add more image URLs here as needed
];

// Function to get a random image URL
function getRandomImageUrl() {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

// Function to set the image source
function setRandomImages() {
  const imgElement1 = document.getElementById("randomImage1");
  const imgElement2 = document.getElementById("randomImage2");
  const imgElement3 = document.getElementById("randomImage3");

  const randomImageUrl1 = getRandomImageUrl();
  const randomImageUrl2 = getRandomImageUrl();
  const randomImageUrl3 = getRandomImageUrl();

  imgElement1.src = randomImageUrl1;
  imgElement2.src = randomImageUrl2;
  imgElement3.src = randomImageUrl3;
}

// Set random images when the page is loaded
setRandomImages();
