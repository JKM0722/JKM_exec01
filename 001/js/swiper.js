//swiper
window.addEventListener("load", () => {

  
  var swiper = new Swiper(".Swipe1", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".sec2 .swiper-pagination",
      clickable: true,
      loop:false,
    },
    navigation: {
      nextEl: ".rb",
      prevEl: ".lb"
    },
    breakpoints: { //반응형 조건 속성
      768: { //768 이상일 경우
        slidesPerView: "auto", //레이아웃 2열
      },
    }///breakpoints
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
      el: ".sec5 .swiper-pagination",
      clickable: true,
      type: "bullets"
    },
    navigation: {
      nextEl: ".btr",
      prevEl: ".btl"
    }
  });










})/////////////load