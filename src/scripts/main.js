;(function($) {
	"use strict"; 


	var map;
	var poltavaOffice = {lat:49.592532, lng: 34.547124};
	var poltavaMarker;
	var poltavaPark = {lat: 49.589629, lng: 34.551219};
	var poltavaParkMarker;

	var officeInfo = $('#map .description[data-place="office"]').html();
	var parkInfo = $('#map .description[data-place="park"]').html();

	function initMap() {
		map = new google.maps.Map( $('#map')[0], {
			center: poltavaOffice, 
			zoom: 17,
			disableDefaultUI: true
		});
	}

	function initMarkers() {
		poltavaMarker = new google.maps.Marker({
			position: poltavaOffice,
			map: map,
			title: "This is Beetroot Academy Poltava office",
			icon: "https://beetroot.se/wp-content/uploads/2016/04/academy-logo.svg?x97799"
		});

		var poltavaInfoWindow = new google.maps.InfoWindow({
			content: officeInfo
		});

		var parkInfoWindow = new google.maps.InfoWindow({
			content: parkInfo
		});

		poltavaMarker.addListener('click', function() {
			poltavaInfoWindow.open(map, poltavaMarker);
		});


		poltavaParkMarker = new google.maps.Marker({
			position: poltavaPark,
			map: map
		});

		poltavaParkMarker.addListener('click', function() {
			parkInfoWindow.open(map, poltavaParkMarker);
		});

	}

	initMap();
	initMarkers();

	$('#places').on('click', 'button', function() {
		var lat = $(this).data('lat');
		var lng = $(this).data('lng');
		map.setCenter({lat: lat, lng: lng});
	});
	

})(jQuery); 













