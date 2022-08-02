//swiper
window.addEventListener("load", () => {

  
  var swiper = new Swiper(".Swipe1", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".rb",
      prevEl: ".lb"
    }
  });
  














var swiper = new Swiper(".Swipe2", {
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