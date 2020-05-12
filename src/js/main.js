$(Document).ready(function (){
    //open modal
    $('#open_modal').click(function(){
        $('#modal_to_open').css({

                'display': 'block'
            }
        );
    });
    // close modal
    $('#close_modal').click(function () {
        $('#modal_to_open').css(
            {
                'display': 'none'
            }
        )
    });
    // sent mail with ajax
	//$('#send_mail').click(function (e) {
	//	// e.preventdefault c'est pour eviter que la page se reload
	//	e.preventDefault();
	//	// objet
	//	var data = {
	//		email: $('#email').val(),
	//		name: $('#firstname').val(),
	//		objet: $('#name').val(),
	//		message: $('#message').val()
	//	};
	//	// ajax  methode de jquery
	//	$.ajax({
	//		// envoyer vers une url
	//		url: "mail.php",
	//		// methode post
	//		type: 'POST',
	//		data: data,
	//		success: function (data) {
	//			$('#js_alert_success').css({ 'display': 'block' });
	//			setTimeout(function () {
	//				$('#js_alert_success').css({ 'display': 'none' });
	//				$('#email').val("");
	//				$('#name').val("");
	//				$('#object').val("");
	//				$('#message').val("")
	//			}, 3000);
	//			// 3 sec
	//		},
	//		error: function (data) {
	//			$('#js_alert_danger').css({ 'display': 'block' });
	//			setTimeout(function () {
	//				$('#js_alert_danger').css({ 'display': 'none' });
	//				$('#email').val("");
	//				$('#name').val("");
	//				$('#object').val("");
	//				$('#message').val("")
	//			}, 3000);
	//		}
	//	});
	// });
});

// node js et autre pour faire du http