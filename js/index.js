$(document).ready(function(){
    function activeTab(obj)
    {
        
        var id = $(obj).attr('href');
        $('.nav-tabs__content a').removeClass('nav-tabs__item--active');

        // Lấy href của tab để show content tương ứng
        
        $('.nav-tabs__content a'+id).addClass('nav-tabs__item--active');
        $('.prices-summary__values section').hide();
        $('.prices-summary__values section'+id) .show();
        
    }
    $('.nav-tabs__content a').click(function(){
        activeTab(this);
        return false;
    });


    $('.realtor-list-item').click(function(){
        var i = $(this).index();
        var z=i+1;
        var nthChild = i +2;
        
        $('.realtor-list-item--contact:nth-child('+z+') .icon-expand_more').toggleClass('icon-expand_more--contact-open');

        $('.realtor-list-contact-container.content-list:nth-child('+nthChild+')').toggle();
        console.log(i);
    });

    $('.iti-dropdown__header').click(function(){
        $(this).toggleClass('active');

        $('.iti-dropdown__content').toggle(
            function(){
                $('.iti-dropdown__content').css({"max-height": "428px"});
            });
    });

    $('.accordion.accordion--no-border').click(function(){
        var i = $(this).index();
        var z = i + 1;
        var nthChild = i +2;

        $('.accordion.accordion--no-border:nth-child('+z+')').toggleClass('active');

        $('.accordion-panel.accordion-panel--price:nth-child('+nthChild+')').toggle(function(){
            $('.accordion-panel.accordion-panel--price:nth-child('+nthChild+')').css({"max-height": "1000px"});
        });
    });

    $('.btn-reset.mobile-nav-toggler').click(function(){ 
        $(this).toggleClass('mobile-nav-toggler--active');

        $('body').toggleClass('topnav-opened');
        $('.topnav__menu').toggleClass('topnav__menu--visible');
        $('.topnav__menu').toggleClass('topnav__menu--sliding');
        
    });


    $('.topnav-submenu').click(function(){
        var i = $(this).index();
        var z = i + 1;

        $('.topnav-submenu:nth-child('+z+')').toggleClass('topnav-submenu--opened');
        $('.topnav-submenu:not(:nth-child('+z+'))').toggleClass('topnav-submenu--hidden');
        $('.topnav-submenu__button').toggleClass('topnav-submenu__button--opened');
        $('.topnav-submenu__items').toggleClass('topnav-submenu__items--visible');
    });
});