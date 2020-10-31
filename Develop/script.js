//using luxon.DateTime to get DataTime object
var DateTime = luxon.DateTime;
//save current weekday, month, day to dt variable
var dt = DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); 
//output current time to screen
$("#currentDay").text(dt);

//add calender background to html dynamically
//add a dive to hold grid
$("#tableContainer").append("<div class='time-block' id='tbBg'></div>");
//array containing working hours
var timeHour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
//add a row for each hour with a for loop
for (var i = 0; i < timeHour.length; i++) {
    //add hours with hoursformatted in an array
    var tableRow = $("<div>");
    tableRow.addClass("row");
    tableRow.attr("id",timeHour[i]);
    //add time as column holding 1/12 space
    tableRow.append("<div class='col-lg-1'>"+timeHour[i] + "</div>");
    //add textarea as column holding 10/12 space
    tableRow.append("<div class='col-lg-10'><textarea rows='2' cols='115'></textarea></div>");
    //add button as colum holding 1/12 space
    tableRow.append("<div class='col-lg-1'><button class='btn btn-lg saveBtn'><i class='far fa-save'></i></button></div>");
    //append to background div
    $("#tbBg").append(tableRow);
}
 
    
    //set table contain with colspan
    //add save button
