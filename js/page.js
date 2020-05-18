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
$("#pageTitle").html(page[0].split("/")[0]);

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
                 <div class="wrap-login100-form-btn btn-group" style="border-top-left-radius:0px;border-top-right-radius:0px">
                     <div class="login100-form-bgbtn"></div>
                     <button id="editbtn` + counter + `" class="login100-form-btn "  onclick="checkButton(this,'`+topic+`')" >Edit/Add Tasks</button>
                     </div>
                 </div>
        </div>
               </div>
            </div>`);
    var temp=index;
    $.each(task, function (index, value) {
    	tmp=String(task[index]).split("--")
    	if(tmp[1]=="false"){
    	$("#tasks"+temp).append(`
        <input type="checkbox" name="checkboxInputName" value="`+tmp[0]+`"  id="`+topic+counter+`" />
        <label class="list-group-item" for="`+topic+counter+`">`+tmp[0]+`</label>`)
        counter+=1;
    	  }
    	else{
    		$("#tasks"+temp).append(`
        <input type="checkbox" style=""name="checkboxInputName" value="`+tmp[0]+`"  id="`+topic+counter+`" checked>
        <label class="list-group-item" for="`+topic+counter+`">`+tmp[0]+`</label>`)
        counter+=1;
    	}  


        })
    });

    
    var modal = document.getElementById("myModal");


    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});

    function checkButton(btn, topic) {
        var id = String(btn.id)
        document.getElementById("grid2").innerHTML = "";
        var modal = document.getElementById("myModal");
                var span = document.getElementsByClassName("close")[0];
                span.onclick = function() {
                    modal.style.display = "none";
                  }
                modal.style.display = "block";

        if(id.includes("editbtn")){
            document.getElementById("grid2").innerHTML = "";
            var users = JSON.parse(localStorage.getItem("users"));
            var user= users["currentUser"];
            var rm = users["currentUser"].pages;
            console.log(topic)
            var pages = user.pages
            var url = window.location.href.split("#")[1];
            url = url.split("_").join(" ");
            var page;
            var tasks;
            $.each(pages, function (index, value) {
                if (value.split("/")[0]==url){
                    page=value;
                    return page;
                }
            })
            page=page.split("//")
            console.log(page)
            $.each(page, function (index, value) {
                if (value.split("/")[0]==topic){
                    tasks=value;
                    return tasks;
                }
            })
            console.log(tasks);
            tasks=tasks.split("/");
                
                 
                  $("#topicID").val(topic);
                  $.each(tasks, function (index, value) {
                      value=value.split("--")
                      if (index!=0){
                    $("#grid2").append(
                        `<input value="`+value[0]+`" style="width: 80%;" id="task`+index+`"></input>`
                    )}
                  })
                 
          }
          else if(id.includes("addTopicbtn")){
            document.getElementById("topicID").innerHTML = "";
           }
       
         }
