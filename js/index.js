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
        var nthChild = i +2;
        
        $('.realtor-list-contact-container.content-list:nth-child('+nthChild+')').toggle();
        console.log(nthChild);
    });
});