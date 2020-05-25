$(document).ready(function() {
    //فانكشن لحذف الكلاس النشط ووضعه عندما يتم الضغط على أحد أزرار الناف بار
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");   
    });
    
    //عند الضغط على الأيقونة الخاصة بالقائمة الجانبية
    $("#toggler").click(function(event){
        event.preventDefault();
        $('#wrap').toggleClass('toggled');

        //إضافة طبقة سوداء
        var right = $('.sidebar').css("right");//أعطينا هذه الخاصية للقائمة الجانبية لكي تُصبح على اليمين
        if (right == '0px')//القائمة الجانبية بحالة إظهار وبالتالي يجب إغلاقها
        {
            $('.sidebar').css({ 'right': '-17rem' });
            $('.layer').hide();
        }
        else {   // القائمة الجانبية بحالة إغلاق وبالتالي يجب إظهارها
            $('.sidebar').css({ 'right': '0' });
            $('.layer').show();
        }
        });
         //إخفاء القائمة الجانبية والطبقة السوداء عند الضغط على الطبقة السوداء
        $('.layer').click(function () {
            $('.sidebar').css({ 'right': '-17rem' });
            $('.layer').hide();
        });

        //إخفاء القائمة الجانبية عند تحميل الصفحة لأول مرة
        $('#wrap').toggleClass('toggled');

});