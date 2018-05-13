$(document).ready(function() {
    const $stickyNavigation = $('.main-header__scicky-nav'),
    $logo = $('.main-header__logo'),
    $hamburgerBtn = $('.main-header__menu-btn'),
    $hiddenMenuLayer = $('.main-header__hidden-menu'),
    reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

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

    function subscriptionValidation(e) {
        let inputValue = $('.subscription-email').val();
        if(inputValue == '') {
            e.preventDefault()
            $('.email--error').text("The field cannot be empty")
        }
        else if(reg.test(inputValue) === false) {
            e.preventDefault()
            $('.email--error').text("please enter a valid email address")
        }
    }
    
    function emailValidation(e) {
        let emailValue = $('.contact-form__input-email').val();
        if(emailValue == '') {
            e.preventDefault()
            $('.contact-email--error').text("The field cannot be empty")
        }
        else if(reg.test(emailValue) === false) {
            e.preventDefault()
            $('.contact-email--error').text("Please enter a valid email address")
        }
        else
            $('.contact-email--error').text("")
    }

    function subjectValidation(e) {
        let subjectValue = $('.contact-form__input-subject').val();
        if(subjectValue == '') {
            e.preventDefault()
            $('.subject--error').text("The field cannot be empty")
        }
        else
            $('.subject--error').text("")
    }

    function messageValidation(e) {
        let messageValue = $('.contact-form__textarea').val();
        if(messageValue == '') {
            e.preventDefault()
            $('.message--error').text("The field cannot be empty")
        }
        else
            $('.message--error').text("")
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
    $('.subscription-submit').on('click', subscriptionValidation)
    $('.contact-form__button').on('click', emailValidation)
    $('.contact-form__button').on('click', subjectValidation)
    $('.contact-form__button').on('click', messageValidation)
    stickyNav()
})