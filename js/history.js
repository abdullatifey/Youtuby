$(document).ready(function() {

     // حذف الفيديو من سجل المشاهدة عندما يتم الضغط على إشارة الخطأ الموجودة في الزاوية
     $(".remove").click(function () {
        $(this).parents('.card').hide(); 
    });

    /*جعل التشك بوكس يختار خيار واحد من الخيارات الموجودة*/
    $("input:checkbox").on('click', function() {
        var $box = $(this);//تحديد البوكس الذي تم الضغط عليه
        if ($box.is(":checked")) {//إذا حدد البوكس
        //group إضافة كود للتشك بوكس ووضعه بداخل المتغير 
        //attr أيضًا الحصول على اسم التشك بوكس عن طريق الخاصية 
        var group = "input:checkbox[name='" + $box.attr("name") + "']";

        $(group).prop("checked", false);//تحديد خطأ لجميع التشك بوكس الموجودة في المجموعة التي لها الاسم الذي جلبناه في السطر السابق
        $box.prop("checked", true);//تحديد صح فقط للبوكس الذي ضغطنا عليه
        }
        else {
        $box.prop("checked", false);//إذا لم يتم الضغط على أي بوكس سنعطيه الخاصية خطأ
        }
    });
    
});