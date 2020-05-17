    
$(document).ready(function () {
  var users = JSON.parse(localStorage.getItem("users"));
  var user= users["currentUser"];
  var pages = user.pages

  $.each(pages, function (index, value) {
    $("#grid").append(`
    <div class="card  bg-dark text-white " style="margin-bottom:15px; ">
    <div class="card-header">`+value.split("//")[0].split("/")[0]+`</div>
    <div class="card-body bg-light  text-dark">`+value.split("//")[0].split("/")[1]+`</div>
    </div>
    `);
  });

  $("#addTask").click(function (event) {
    if ($("#name").val()=="" || $("#desc").val()==""){
      alert("Please fill name and description of the page");
    } else{
      var res=$("#name").val()+"/"+$("#desc").val()+"/"+$("#col").val();
      console.log(res);
      users["currentUser"].pages.push(res);
      users[users["currentUser"].username].pages.push(res);
      localStorage.setItem("users", JSON.stringify(users));
      location.reload();
    }
  });




    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
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