const topSellingSwiper = new Swiper(".product_boxes", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 0,

  speed: 500,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },

  pagination: {
    el: ".swiper-pagination-custom",
    clickable: true,
  },
});

const paginationPrev = document.querySelector(".pagination-prev");
const paginationNext = document.querySelector(".pagination-next");

paginationPrev.addEventListener("click", function () {
  topSellingSwiper.slidePrev();
});

paginationNext.addEventListener("click", function () {
  topSellingSwiper.slideNext();
});
