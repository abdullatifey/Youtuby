$(document).ready(function() {
   
    //إذا تم الضغط على القائمة التي تحتوي أيقونة البحث سيتم إظهار حقل البحث أو إخفائه
    $('.channel-page .search-icon').click(function(){
        $('.channel-page .channel-search').animate({width: 'toggle'});
    });

});