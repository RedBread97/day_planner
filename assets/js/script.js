   //displays date
  var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY'));     //displays date

// saves data
$('.saveBtn').on('click',function(){
    var text = $(this).siblings(".description").val();
    
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text)

})

//Displays data from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


function hourTrack(){
    var currentHour = moment().hour();
    //loops through hours and assigns CSS
    $('.time-block').each(function() {
        var setHour = parseInt($(this).attr('id').split('hour')[1]);
    
    
        if (setHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        }
        else if(setHour > currentHour) {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
        else  {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
    }
})
}
hourTrack();
  

