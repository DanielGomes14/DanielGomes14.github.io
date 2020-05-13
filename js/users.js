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
        "user1": new User("user1", "user", "Miguel Almeida", "user1@ex.pt", "https://img.tineye.com/result/f7479eed5d3fd4da70043343f1d7176fcd15b4cc1c67ecfd4d2295efa10964a1?size=160", []),
        "user2": new User("user2", "user", "Luís Valentim", "user2@ex.pt", "https://img.tineye.com/result/f7479eed5d3fd4da70043343f1d7176fcd15b4cc1c67ecfd4d2295efa10964a1?size=160", []),
        "user3": new User("user3", "user", "Tiago Oliveira", "user3@ex.pt", "https://img.tineye.com/result/f7479eed5d3fd4da70043343f1d7176fcd15b4cc1c67ecfd4d2295efa10964a1?size=160", []),
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