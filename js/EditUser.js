$(document).ready(function () {
    var users = JSON.parse(localStorage.getItem("users"));
	$('#username').attr('placeholder', users["currentUser"].username);
	$('#username2').html(users["currentUser"].username);
	$('#name').attr('placeholder', users["currentUser"].name);
	$('#name2').html(users["currentUser"].name);
	$('#email').attr('placeholder', users["currentUser"].email);
	$('#email2').html(users["currentUser"].email);
    $('#profilePic').attr('src', users["currentUser"].imageProfile);
    
    $('#editbtn').click(function(){
        $('#form1').css({ display : 'block' })
        $('#normcontainer').css({ display : 'none' })

    })

    /*
    function teste(){
    var form= $('#form1')
    for (i = 0; i < form.getElementsByTagName; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            $('#confirmbtn').css({display:visible})
        } else {
            $('#confirmbtn').css({display:none})
        }
        }       
    }
}
   */
});