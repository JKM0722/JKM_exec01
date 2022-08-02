//swiper
window.addEventListener("load", () => {


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets"
    },
    navigation: {
      nextEl: ".btr",
      prevEl: ".btl"
    }
  });










})/////////////load