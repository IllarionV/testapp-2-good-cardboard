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
                asNavFor: '.make-slider_top',
                prevArrow: '<button type="button" class="make-slider-btn prev-btn"></button>',
                nextArrow: '<button type="button" class="make-slider-btn next-btn"></button>'
            });