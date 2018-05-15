var smzbImagesFunction = function () {
    var ulId = document.getElementById("smzb");
    var tagA = ulId.getElementsByTagName("a");
    for (var i = 0; i < tagA.length-1; i++) {
        tagA[i].onclick = function () {
            showPic(this);
            return false;
        }
    }
}
function showPic(href) {
    var source = href.getAttribute("href");
    var pla = document.getElementById("pla");
    pla.setAttribute("src",source);
}

smzbImagesFunction();