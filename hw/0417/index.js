// method1
// // document.addEventListener("DOMContentLoaded", () => {
// //   let form = document.getElementById("form");
// //   form?.addEventListener("submit", (e) => {
// //     e.preventDefault();
// //     let getImg = () => {
// //       e.getElementById("#img_container").innerHTML = "url_input";
// //     };
// //     console.log(getImg());
// //   });
// // });

// method2
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log("click submit");
//     let input = document.querySelector("#url_input");
//     // console.log("url test");
//     // document.querySelector(".text-center");
//     console.log(input.value);
//     const url = `https://picsum.photos/300/200?random=${input.value}`;
//     console.log(url);
//     let panel = document.querySelector("#panel");

//     console.log(panel);
//     panel.innerHTML = `<img src="${url}">`;
//     // e.querySelector("text-center").classList("");
//   });
// });
// // document.body.onload = addElement;

// // function addElement() {
// //   let form = document.getElementById("form");
// //   let url_input = document.getElementById("url_input");
// //   let img_container = document.getElementById("img_container");
// //   url_input.appendChild(img_container);
// // }

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.addEventListener("#url_input");
    console.log("url_input");
  });
});
