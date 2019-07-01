
//hide unused tabs in content container on home page
$(document).ready(function(){
	$('#contact-container').hide();
	$('#faq-container').hide();
});

var tabs = ['msg', 'contact', 'faq'];

//function for switching between message, contact, and faq tabs
$('.tab').on('click', function(){
	if ($(this).hasClass('tab-pass') ) {
		$('.tab').removeClass('tab-act');
		$('.tab').addClass('tab-pass');
		$(this).removeClass('tab-pass');
		$(this).addClass('tab-act');
	}

		$('#msg-container').hide();
		$('#contact-container').hide();
		$('#faq-container').hide();	

	for (i in tabs) {
		if ($(this).hasClass(tabs[i])) {
			$('#'+tabs[i]+'-container').show();
		}
	}
});

//function to switch tickets on homepage
$('.tkt').on('click', function(){
	if ($(this).hasClass('tkt-pass')) {
		$('.tkt').removeClass('tkt-act');
		$('.tkt').addClass('tkt-pass');
		$(this).removeClass('tkt-pass');
		$(this).removeClass('selectHover');
		$(this).addClass('tkt-act');
	}
	$('.tkt-pass').addClass('selectHover');
});