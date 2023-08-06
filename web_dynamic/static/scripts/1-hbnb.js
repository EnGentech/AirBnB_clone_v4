$(document).ready(function(){
    let my_list = []
    
  $('li input:checkbox').on('change', function(){
    if ($(this).is(':checked')){

        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');
        
        my_list.push(amenityName)
        
        $('.amenities h4').text(my_list.sort().join(', '))
        
    }
    else if (!$(this).is(':checked')){

        const amenityName = $(this).data('name');
        let index = my_list.indexOf(amenityName)
        if (index !== -1){
            my_list.splice(index, 1)
        }
        
        $('.amenities h4').text(my_list)
    }

    })
})
