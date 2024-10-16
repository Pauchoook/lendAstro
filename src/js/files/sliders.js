import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

export default function sliders() {
  const reviewsSlider = document.querySelector(".reviews__slider");
  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 700,
      modules: [Pagination, Autoplay],
      autoplay: true,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".reviews__slider-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2000,
      },
    });
  }
}
