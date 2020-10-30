//using luxon.DateTime to get DataTime object
var DateTime = luxon.DateTime;
//save current weekday, month, day to dt variable
var dt = DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); 
//output current time to screen
$("#currentDay").text(dt);
