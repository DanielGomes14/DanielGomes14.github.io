$(document).ready(function(){
	 users = JSON.parse(localStorage.getItem("users"));



	 $("#loginbtn").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        var val;
        if(username.length==0 && password.length==0){
           console.log("invalid login")}
    
        else{
        $.each(users, function (index, value) {
            if (username==value.username && password==value.password && username!=""){
                val=true;
                users["currentUser"].username=username;
                users["currentUser"].password=password;
                users["currentUser"].name=value.name;
                users["currentUser"].email=value.email;
                users["currentUser"].invitations=value.invitations;
                users["currentUser"].imageProfile=value.imageProfile;
                localStorage.setItem("users", JSON.stringify(users));
            }
        });
        if (val) {
        	console.log("Entrei boi");
            window.location.assign("Pages.html");
        }
        else {
     			console.log("invalid login 2")
        	}
   		 }
    });

})