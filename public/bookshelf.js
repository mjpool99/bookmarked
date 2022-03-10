$("#flipbook").turn({
    height: 200,
    width: 300,
    autoCenter: true,
    duration: 1000
})

$(".thumbnail").on("click", () => {
    $(".modal").css("display", "flex") 
    $("#flipbook").turn("page", 2)
    setTimeout(() => {
     $("#flipbook").turn("size", 900, 600)  
    }, 100)
})