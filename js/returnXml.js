var analysisXml = function (fileName,rootElement) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET",fileName,false);
    xmlhttp.send();
    var xmlDoc=xmlhttp.responseXML;
    var x=xmlDoc.getElementsByTagName(rootElement);
    return x;
}

var returnXML = {
    getXMlElementName: function (fileName,rootElement,ElementName) {
        var blogTitlexml = analysisXml(fileName,rootElement);
        var array = new Array();
        for (var i = 0; i < blogTitlexml.length; i++) {
            array.push(blogTitlexml[i].getElementsByTagName(ElementName)[0].innerHTML)
        }
        return array;
    },

}