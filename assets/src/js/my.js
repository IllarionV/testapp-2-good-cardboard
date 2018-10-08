            $('.make-slider_top').slick({
                infinite: true,
                arrow: false,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.make-slider_bottom'
            });
            $('.make-slider_bottom').slick({
                infinite: true,
                focusOnSelect: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrow: true,
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }],
                asNavFor:  '.make-slider_top',
                prevArrow: '<button type="button" class="make-slider-btn prev-btn"></button>',
                nextArrow: '<button type="button" class="make-slider-btn next-btn"></button>'

            });

            $('.feedback-slider').slick({
                arrow: true,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                focusOnSelect: true,
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }],
                prevArrow: '<button class="feedback-arrow prev2"></button>',
                nextArrow: '<button class="feedback-arrow next2"></button>'

            });

            $('.header-btn').on("click", function () {
                $('.overlay').show();
            });
            $('.popup-close').on("click", function () {
                $('.overlay').hide();
            });