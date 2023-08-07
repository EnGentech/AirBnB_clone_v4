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
});
