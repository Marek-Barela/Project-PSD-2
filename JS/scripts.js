$(document).ready(function() {
    const $stickyNavigation = $('.main-header__scicky-nav'),
    $logo = $('.main-header__logo'),
    $hamburgerBtn = $('.main-header__menu-btn'),
    $hiddenMenuLayer = $('.main-header__hidden-menu');

    function stickyNav() {
        if ($(window).scrollTop()) {
            $stickyNavigation.addClass('main-header__scicky-nav--is-active')
            $logo.css({'top':'20px','transform':'scale(0.9)'})
        }
        else {
            $stickyNavigation.removeClass('main-header__scicky-nav--is-active')
            $logo.css({'top':'30px','transform':'scale(1)'})
        }
    }

    function toggleHiddenMenu() {
        $hamburgerBtn.toggleClass('is-active')
        $hiddenMenuLayer.toggleClass('main-header__hidden-menu--is-active')
    }

    function removeNavigationClass() {
        $hiddenMenuLayer.removeClass('main-header__hidden-menu--is-active');
        $hamburgerBtn.removeClass('is-active');
    }

    function scrollToLink(e) {
        e.preventDefault();
        const target = this.hash;
        const $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top - 60 + "px"
        }, 800, 'swing')
        removeNavigationClass()
    }

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-1x"></span>'],
        mouseDrag: false,
        autoplay: true,
        dots: false
    });

    $(window).on('scroll', stickyNav)
    $hamburgerBtn.on('click', toggleHiddenMenu)
    $('a[href*="#"]').on('click', scrollToLink)
    stickyNav()
})