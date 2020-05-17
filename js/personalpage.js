$(document).ready(function () {
var users = JSON.parse(localStorage.getItem("users"));
var user= users["currentUser"];
var pages = user.pages
var url = window.location.href.split("#")[1];
url = url.split("_").join(" ");
var page;
$.each(pages, function (index, value) {
    if (value.split("/")[0]==url){
        page=value;
        return page;
    }
})
page=page.split("//")

$("#title").html(page[0].split("/")[1]);

$.each(page, function (index, value) {
    if (index==0){
        return true;
    }
    var task=value.split("/");
    var topic=task.splice(0,1);
    var counter=0;
    $("#grid").append(`
        <div class="col-lg-4 py-2">
                <div class="card h-100"  style="border-bottom-left-radius: 10%; border-bottom-right-radius: 10%;">
                    <div class="card-header">
                        <h4>`+topic+`</h4>
                        <i  class="fa fa-trash fa-lg" aria-hidden="true"></i>
                    </div>
                <div class="card card-body h-100">
                    <ul class="list-group" id="tasks`+index+`">
                    </ul>
                 </div>
                  <div class="container-login100-form-btn">
                        <div class="wrap-login100-form-btn" style="padding-top: 0px; border-top-left-radius: 0%; border-top-right-radius: 0%;">
                            <div class="login100-form-bgbtn" ></div>
                            <button id="editbtn" class="login100-form-btn " style="width: 20%, justify-content-center">
                                 Edit/Add Task
                            </button>
                        </div>
                    </div>
               </div>
            </div>`);
    var temp=index;
    $.each(task, function (index, value) {
        $("#tasks"+temp).append(`
        <input type="checkbox" name="checkboxInputName" value="`+task+`"  id="`+topic+counter+`" />
        <label class="list-group-item" for="`+topic+counter+`">`+task+`</label>`)
        counter+=1;})
    });
});	