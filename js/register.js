$(document).ready(function () {
    users = JSON.parse(localStorage.getItem("users"));
    class User {
        constructor(username, password, name, email, imageProfile, invitations) {
            this.username=username;
            this.name = name;
            this.email = email;
            this.imageProfile = imageProfile;
            this.password = password;
            this.invitations=invitations;
        }
    }

    $("#regbtn").click(function (event) {
        if (!(contains(users, $("#username").val()))) {
            if (!(contains(users, $("#email").val()))) {
                var name = $("#name").val();
                var username = $("#username").val();
                var password = $("#pass").val();
                var email = $("#email").val();
                var user = new User(username, password, name, email,"https://img.tineye.com/result/f7479eed5d3fd4da70043343f1d7176fcd15b4cc1c67ecfd4d2295efa10964a1?size=160", []);
                users[user.username]= user;

                localStorage.setItem("users", JSON.stringify(users));
                window.location.assign("Pages.html");
            }
            else {
                alert("Email already taken.");
            }
        } else {
            alert("Username already taken.");
        }
    });

    function contains(a, obj) {
        for (key in a) {
            if (key==obj){
                return true;
            }
        }
        return false;
    }
});