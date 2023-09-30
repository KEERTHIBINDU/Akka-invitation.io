$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
    console.log(tags);
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
});

// let front_img = document.getElementById("front-img");
// let flag = document.getElementsByClassName("flag")
// console.log("flag");
// console.log(flag);
// function openInvitation() 
// {  
// // front_img.style.transform = "rotate(50deg)";
// // front_img.style.transition = "transform 1s ease"; 
// front_img.style.width = "750px";
// front_img.style.height = "auto";
// front_img.style.transition = "width 0.5s ease";
// // $(flag).addClass("visible")
// flag.style.opacity= "1"
// }