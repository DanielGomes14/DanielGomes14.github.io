$(document).ready(function () {
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
    var users = {
        "user1": new User("user1", "user1", "Miguel Almeida", "user1@ex.pt", "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538?k=6&m=1142192538&s=170667a&w=0&h=mKkx-3SlGFT_QL10L3zcx_jepev6R7qk2-b7q5XpYA4=", []),
        "user2": new User("user2", "user2", "Luís Valentim", "user2@ex.pt", "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538?k=6&m=1142192538&s=170667a&w=0&h=mKkx-3SlGFT_QL10L3zcx_jepev6R7qk2-b7q5XpYA4=", []),
        "user3": new User("user3", "user3", "Tiago Oliveira", "user3@ex.pt", "https://media.istockphoto.com/vectors/man-avatar-profile-male-face-icon-vector-illustration-vector-id1142192538?k=6&m=1142192538&s=170667a&w=0&h=mKkx-3SlGFT_QL10L3zcx_jepev6R7qk2-b7q5XpYA4=", []),
        "currentUser": new User("", "", "", "", "", []),
    };

    if (localStorage.getItem("users") == null) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    $(".btn-log-out").click(function() {
        var newUser = new User("", "", "", "", "", []);
        users["currentUser"] = newUser;
        localStorage.setItem("users", JSON.stringify(users));
        window.location.assign("index.html");
    })
});