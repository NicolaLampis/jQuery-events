$(document).ready(function() {
    // $("#stream1_btn").on("click", function() {
    //     $(".stream1").removeClass('highlight_stream');
    //     $(".stream2").removeClass('highlight_stream');
    //     $(".stream3").removeClass('highlight_stream');
    //     $(".stream1").addClass('highlight_stream');

    $("#stream1_btn").on("click", function() {
        $(".stream1").hide(3000);
        $(".stream2").slideUp('slow');
        $(".stream3").slideToggle('medium');
        $(".stream1").toggle('fast');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 