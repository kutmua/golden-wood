document.addEventListener('DOMContentLoaded', function(){
  const catalogSwiper = new Swiper('.catalog-swiper', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
    },

    grid: {
      rows: 1,
      fill: "row"
    },

    breakpoints: {
      200: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      },

      360: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      },

      550: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      },

      768: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      },

      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      },

      1350: {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
        },
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",
  });

  const heroSwiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.hero__swiper-btn-next',
      prevEl: '.hero__swiper-btn-prev',
    },

    grid: {
      rows: 1,
      fill: "row"
    },
    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",
  });

  const productSwiper = new Swiper('.product-photo-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: '.product-photo-pagination',
      clickable: true,
    },

    grid: {
      rows: 1,
      fill: "row"
    },

    // breakpoints: {
    //   200: {
    //     slidesPerView: 1,
    //     slidesPerGroup: 1,
    //   },

    //   570: {
    //     slidesPerView: 2,
    //     slidesPerGroup: 2,
    //   },

    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 34,
    //     slidesPerGroup: 2,
    //   },

    //   1024: {
    //     slidesPerView: 3,
    //     spaceBetween: 27,
    //   },

    //   1500: {
    //     slidesPerView: 3,
    //     spaceBetween: 50
    //   }
    // },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",
  });
})