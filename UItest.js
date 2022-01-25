
var game1Left = parseInt(window.getComputedStyle(game1).getPropertyValue("left"));
if($(game1).is(':hover')) {
    game1.style.left = (game1Left+100)+"px"
}