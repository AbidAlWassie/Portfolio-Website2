window.onload = function() {
  const config = {
    type: "carousel",
    perView: 1,
    breakpoints: {
      // 1024: {
      //   perView: 1
      // },
      // 600: {
      //   perView: 1
      // }
    }
  }
  
  new Glide(".glide", config).mount();
  
  const glideContent = document.querySelector(".glide-content");
  glideContent.addEventListener("click", function() {
    console.log("Hello");
  });
}