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
                     <button id="editbtn` + counter + `" class="login100-form-btn temp"  onclick="checkButton(this,'`+topic+`')" >Edit/Add Tasks</button>
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

    
    
    $("#addATask").click(function (event) {
        var index=document.getElementById("grid2").childElementCount
        $("#grid2").append(`
            <span>Task `+(index/2+1)+`: </span><input value="`+$("#taskToAdd").val()+`" style="width:100%" id="task`+(index/2+1)+`"></input>
        `)
        $("#taskToAdd").val("");
    });

  
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
                window.onclick = function(event) {
                    if (event.target == modal) {
                      modal.style.display = "none";
                    }
                  }
        if(id.includes("editbtn")){
            document.getElementById("grid2").innerHTML = "";
            var users = JSON.parse(localStorage.getItem("users"));
            var pagemembers=JSON.parse(localStorage.getItem("pagemembers"));
            var user= users["currentUser"];
            var rm = users["currentUser"].pages;
            var pages = user.pages
            var url = window.location.href.split("#")[1];
            url = url.split("_").join(" ");
            var page;
            var tasks;
            var temptopic;
            $.each(pages, function (index, value) {
                if (value.split("/")[0]==url){
                    page=value;
                    return page;
                }
            })
            page=page.split("//")
            $.each(page, function (index, value) {
                if (value.split("/")[0]==topic){
                    tasks=value;
                    return tasks;
                }
            })
            tasks=tasks.split("/");
                  $("#topicID").val(topic);
                  $.each(tasks, function (index, value) {
                      value=value.split("--")
                      if (index!=0){
                    $("#grid2").append(
                        `<span>Task `+index+`: </span><input value="`+value[0]+`" style="width:100%" id="task`+index+`"></input>`
                    )}
                  })
                  
            $("#addNote").click(function (event) {

                var indexTk=document.getElementById("grid2").childElementCount/2
                var pageEdit=$("#topicID").val();
                var string="";
                var allTasks=[]
                $.each(page, function (index, value) {
                    if (index==0){
                        return true;
                    }
                    else{
                        if (value.split("/")[0]==topic){
                            topicToChange=value;
                            indexToRemove=index;
                            return topicToChange;
                        }
                    }
                })
                topicToChange=topicToChange.split("/")
                for(i =1; i<= topicToChange.length-1;i++){
                    allTasks.push($("#task"+i).val())
                }
                if (indexTk>topicToChange.length-1){
                    for(i =topicToChange.length; i<= indexTk;i++){
                        if (i==indexTk){
                            string+=$("#task"+i).val()+"--false"
                        } else{
                            string+=$("#task"+i).val()+"--false/"
                        }
                    }
                }
                var temp="";
                $.each(topicToChange, function (index, value) {
                    if (index==0){
                       value=pageEdit
                    } else{4
                        value=(allTasks[index-1]+"--"+value.split("--")[1])
                    }
                    if(index==topicToChange.length-1){
                        if (indexTk>topicToChange.length-1){
                            temp+=value+"/"
                        } else{
                            temp+=value
                        }
                    }
                    else {
                        temp+=value+"/"
                    }
                    
                  
                });

                temp+=string
                console.log(temp)
                page.splice(indexToRemove,1);
                page.push(temp)
                var final=""
                $.each(page, function (index, value) {
                    if(index==page.length-1){
                        final+=value
                    }
                    else{
                        final+=value+"//"
                    }
                   
                })
                var tmpind=0
                $.each(user.pages, function (index, value) {
                    if (value.split("/")[0]==url){
                        tmpind=index
                        return false;
                    }
                });
                var pagemembers=JSON.parse(localStorage.getItem("pagemembers"));
                var flag=false;
                $.each(pagemembers,function(index,value){
                    var indpage=String(value.pagename)

                    if(indpage.includes(url)){
                        pagemembers[index].pagename=final
                        console.log(pagemembers[index].personlist)
                        $.each(pagemembers[index].personlist,function(index,value){
                            var counter=-1;
                            flag=false;
                            if(users[value] != user){
                                for(i = 0;i<users[value].pages.length;i++){
                                console.log(users[value])
                                counter++
                                console.log(users[value].pages[i].split("/")[0])
                                console.log(url)
                                if(users[value].pages[i].split("/")[0]==url){
                                    console.log(users[value].pages)
                                    users[value].pages[i]=final;
                                    console.log("entrei")
                                    break
                                }
                                else if(counter==users[value].pages.length-1){
                                     users[value].pages.push(final)
                                     console.log("entrei2")
                                      break;
                                    
                                }
                            }
                            }
                     

                        })
                        
                    }

                })
                user.pages[tmpind]=final
                users[user.username].pages[tmpind]=final
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("pagemembers",JSON.stringify(pagemembers))
                location.reload();
                                
          });
          
         }
         else if(id.includes("addTopicbtn")){
            document.getElementById("topicID").innerHTML = "";
           }
        }