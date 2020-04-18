// $(document).ready(function () {
//   $(".seat").on("click", function () {
//     if ($(".seat.selected").length < 5) {
//       $(this).toggleClass("selected");
//     }
//   });
//   // $("#btn").on("click", function () {
//   //   // $("h1").toggleClass("hide");
//   //   $("h1").toggleClass("large");
//     // $("h1").toggle("slow");
//   });
// });
// $(document).ready(function () {
//   $("#btn").click(function () {
//     $("h1").toggle("slow");
//   });
// // });
// $(document).ready(function () {
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn").addEventListener("click", function () {
    document.querySelector("h1").classList.toggle("large");
  });
});
