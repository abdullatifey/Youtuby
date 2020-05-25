$(document).ready(function () {
    /*عند الضغط على الزر استدعي الفانكشن لتعمل وتظهر وتخفي النص */
    $("#myBtn").on("click", function(){
        read();
    });

    $(".reply-popup").click(function(){
        $(".reply-box").toggle();
    });
     
});
/* الفانكشن الذي نستخدمه لإظهار وغخفاء العناصر*/
function read() {
    var dots = document.getElementById("dots");/*أحضر النقط الثلاث */
    var moreText = document.getElementById("more");/*أحضر النص الذي نريد إظهاره وإخفائه */
    var btnText = document.getElementById("myBtn");/*أحضر الزر الذي سنضغط عليه */
  
    if (dots.style.display === "none") {/*إذا كانو النقط الثلاث مخفيين يعني النص ظاهر وضغطت عالزر */
      dots.style.display = "inline";/*أظهر النقط */
      btnText.innerHTML = "عرض المزيد";
      moreText.style.display = "none";/*أخفي النص */
    } else {/*إذا كان النقط الثلاث ظاهرين أي النص مخفي وضغطت على الزر */
      dots.style.display = "none";/*أخفي النقط */
      btnText.innerHTML = "عرض عناصر أقل";
      moreText.style.display = "inline";/*أظهر النص المخفي */
    }
}