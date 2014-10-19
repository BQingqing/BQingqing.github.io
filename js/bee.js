$(document).ready(function(){
	$.supersized({
		// Functionality
		slide_interval: 5000,		// Length between transitions
		transition: 1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed:	700,		// Speed of transition
												   
		// Components							
		slide_links:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides:  	
			[
				{image : 'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/383757_10150508898448847_1295074568_n.jpg?oh=ca3ba61628438a5f8089d94bc6fa9ce7&oe=54EB2A0E&__gda__=1425446021_577ff69ebae9742c0351a95ed24d4fda', title : 'QQ_Bee'},
				{image : 'https://scontent-b.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/402974_10150508898738847_247126169_n.jpg?oh=85283bb6b4082e3dab321f6726c7a857&oe=54B77BA6', title : 'QQ_Bee'},  
				{image : 'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/393442_10150508901553847_173579672_n.jpg?oh=6d68138f129591531b23715667dc437b&oe=54EAAF10&__gda__=1420538151_b415ddd3052b0270001cc725dd3ea498', title : 'QQ_Bee'},
			]
		
	});
});

