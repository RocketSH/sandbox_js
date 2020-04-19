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
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#btn").addEventListener("click", function () {
//     document.querySelector("h1").classList.toggle("large");
//   });
// });

function btnClickEvent(event) {
  event.stopPropagation();
  event.preventDefault();
  $("h1").toggleClass("large");
  console.log("btn clicked");
}

$(document).ready(function () {
  $("#btn").on("click", btnClickEvent);
  $(".wrapper").on("click", function () {
    console.log("wrapper clicked");
    $("#btn").off("click");
  });
  let counter = 0;
  $("#addItem").on("click", function () {
    $("#container").append(`<li class="item">Item${counter}</li>`);
    counter++;
  });
  $("#container").on("click", ".item", function () {
    // console.log("item clicked");
    $(this).toggleClass("large");
  });
});
