$(document).ready(function () {
    const my_list = [];
  
    $('li input:checkbox').on('change', function () {
      if ($(this).is(':checked')) {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');
  
        my_list.push(amenityName);
  
        $('.amenities h4').text(my_list.sort().join(', '));
      } else if (!$(this).is(':checked')) {
        const amenityName = $(this).data('name');
        const index = my_list.indexOf(amenityName);
        if (index !== -1) {
          my_list.splice(index, 1);
        }
  
        $('.amenities h4').text(my_list);
      }
    });
    url = 'http://0.0.0.0:5001/api/v1/status/'; /* 'https://jsonplaceholder.typicode.com/posts/1'  :test_link */
    $.get(url, function (data, status) {
      if (status === 'success') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });

   // fetch data about places
	//fetch
	$.post({
		url: `${HOST}/api/v1/places_search`,
		data: JSON.stringify({}),
		headers: {
			"Content-Type": "application/json",
		},
		success: (data) => {
			data.forEach((place) =>
				$("section.places").append(
					`<article>
			<div class="title_box">
			<h2>${place.name}</h2>
			<div class="price_by_night">$${place.price_by_night}</div>
			</div>
			<div class="information">
			<div class="max_guest">${place.max_guest} Guest${
						place.max_guest !== 1 ? "s" : ""
					}</div>
			<div class="number_rooms">${place.number_rooms} Bedroom${
						place.number_rooms !== 1 ? "s" : ""
					}</div>
			<div class="number_bathrooms">${place.number_bathrooms} Bathroom${
						place.number_bathrooms !== 1 ? "s" : ""
					}</div>
			</div> 
			<div class="description">
			${place.description}
			</div>
				</article>`
				)
			);
		},
		dataType: "json",
	});
});

  