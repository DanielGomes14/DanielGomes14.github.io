$(document).ready(function () {
 var users = JSON.parse(localStorage.getItem("users"));
 var user= users["currentUser"];
 var rm=user.invitations;
 var counter=-1
 console.log(rm)
 $.each(rm, function (index, value) {
 	var spec=value.split("/");
 	counter+=1
 	$("#invitesgrid").append(`<div  id="card` +  counter + `" class="col-lg-4 py-2">
     <div class="card h-100">
                    <div class="card-header">
                        <h4>` + spec[0] + ` </h4>
                    </div>
                <div class="card card-body h-100">
                    <div style="border-width: 3x;border-style: groove;">
                        <h5 >Invitation sent by :</h5>
                        <p  id="inviter" style="margin-bottom: 0px"> ` + spec[1] + `</p>
                        <h5 >Page Description:</h5>
                        <p  id ="description"style="margin-bottom: 0px"> ` + spec[2] +  `</p> 
                       </div>  
                 </div>
                  <div class="container-login100-form-btn">
                        <div class="wrap-login100-form-btn btn-group">
                            <div class="login100-form-bgbtn" ></div>
                            <button id="joinbtn` + counter + `" class="login100-form-btn "  onclick="checkButton(this);" >Join Page</button>
                             <button id="removebtn` + counter + `" class="login100-form-btn "  onclick="checkButton(this);" >Remove Invite</button>
                            </div>
                        </div>
               </div>
            </div> `);

 		
 });

});

function checkButton(btn) {
var users = JSON.parse(localStorage.getItem("users"));
 var user= users["currentUser"];
 var rm=user.invitations;
 var id = String(btn.id)
   if(id.includes("joinbtn")){
   		var counter=parseInt(id.substring(7,8))
   		var inviter=rm[counter].split("/")[1]
   		console.log(inviter)
   		var pagename=rm[counter].split("/")[0]
   		var inviterpages=users[inviter].pages
   		for(i =0; i< inviterpages.length;i++){
   			if (inviterpages[i]==pagename)
   				user.pages.push(inviterpages[i])
                   users[users["currentUser"].username].pages.push(inviterpages[i])
                   users["currentUser"].pages.push(inviterpages[i])
   				break;
   		}
   		user.invitations=rm.splice(counter,1)
        users[users["currentUser"].username].invitations=rm.splice(counter,1)
        users["currentUser"].invitations=rm.splice(counter,1)
   		localStorage.setItem("users", JSON.stringify(users));
        location.reload();
   }
   else{
   	    var counter=parseInt(id.substring(7,8));
   		user.invitations.splice(counter,1)
        users[users["currentUser"].username].invitations=user.invitations
        users["currentUser"].invitations=user.invitations
   	    localStorage.setItem("users", JSON.stringify(users));
    	location.reload();
    }

  }
