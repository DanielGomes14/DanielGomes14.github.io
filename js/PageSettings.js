$(document).ready(function () {
    var users = JSON.parse(localStorage.getItem("users"));
    var pagemembers = JSON.parse(localStorage.getItem("pagemembers"));
    var user= users["currentUser"];
    var pages = user.pages
    var url = window.location.href.split("#")[1];
    url = url.split("_").join(" ");
    var page;
    var pageMemb;
    $.each(pages, function (index, value) {
        if (value.split("/")[0]==url){
            page=value;
            return page;
        }
    })
    $.each(pagemembers, function (index, value) {
        if (value.pagename==page){
            pageMemb=value;
            return pageMemb;
        }
    })
    page=page.split("//")
    
    var title=page[0].split("/")[0]
    var desc=page[0].split("/")[1]
    var members=pageMemb.personlist;



});    