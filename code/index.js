const navContainer = document.querySelector(".nav_container");
const btn = document.getElementById("btn");
const img1 = document.querySelector(".image_1");
const img2 = document.querySelector(".image_2");
const img3 = document.querySelector(".image_3");
const img4 = document.querySelector(".image_4");
const img5 = document.querySelector(".image_5");
const img6 = document.querySelector(".image_6");
const img7 = document.querySelector(".image_7");
const img8 = document.querySelector(".image_8");
const img9 = document.querySelector(".image_9");

btn.addEventListener("click", () => {
  navContainer.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 699) {
    img2.src = "../images/desktop/image-transform.jpg";
    img3.src = "../images/desktop/image-stand-out.jpg";
    img4.src = "../images/desktop/image-graphic-design.jpg";
    img5.src = "../images/desktop/image-photography.jpg";
    img6.src = "../images/desktop/image-gallery-milkbottles.jpg";
    img7.src = "../images/desktop/image-gallery-orange.jpg";
    img8.src = "../images/desktop/image-gallery-cone.jpg";
    img9.src = "../images/desktop/image-gallery-sugarcubes.jpg";
  } else {
    img2.src = "../images/mobile/image-transform.jpg";
    img3.src = "../images/mobile/image-stand-out.jpg";
    img4.src = "../images/mobile/image-graphic-design.jpg";
    img5.src = "../images/mobile/image-photography.jpg";
    img6.src = "../images/mobile/image-gallery-milkbottles.jpg";
    img7.src = "../images/mobile/image-gallery-orange.jpg";
    img8.src = "../images/mobile/image-gallery-cone.jpg";
    img9.src = "../images/mobile/image-gallery-sugar-cubes.jpg";
  }
});

window.addEventListener("load", () => {
  if (window.innerWidth > 699) {
    img2.src = "../images/desktop/image-transform.jpg";
    img3.src = "../images/desktop/image-stand-out.jpg";
    img4.src = "../images/desktop/image-graphic-design.jpg";
    img5.src = "../images/desktop/image-photography.jpg";
    img6.src = "../images/desktop/image-gallery-milkbottles.jpg";
    img7.src = "../images/desktop/image-gallery-orange.jpg";
    img8.src = "../images/desktop/image-gallery-cone.jpg";
    img9.src = "../images/desktop/image-gallery-sugarcubes.jpg";
  }
});
