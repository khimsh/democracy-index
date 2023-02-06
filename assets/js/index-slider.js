const swiperBig = new Swiper('.index-slider-big', {
    // autoplay: {
    //     delay: 3000,
    // },
    on: {
        slideChange: function () {
            swiperSmall.slideTo(this.activeIndex)
        },
    },
})

const swiperSmall = new Swiper('.index-slider-small', {
    slidesPerView: 2,
    spaceBetween: 10,
    clickable: true,
    on: {
        click: function (e) {
            swiperBig.slideTo(this.clickedIndex)
        },
        slideChange: function () {
            swiperBig.slideTo(this.activeIndex)
        },
    },
})
