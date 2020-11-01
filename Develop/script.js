//using luxon.DateTime to get DataTime object
var DateTime = luxon.DateTime;
//save current weekday, month, day to dt variable
var dt = DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); 
var currentHour = DateTime.local().toLocaleString({ hour: '2-digit', hour12: false }); //=> '11'

//output current time to screen
$("#currentDay").text(dt);

var input
var hourCount = 8;

//add calender background to html dynamically
//add a dive to hold grid
$("#tableContainer").append("<div class='time-block' id='tbBg'></div>");
//array containing working hours
var timeHour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var timeID = ["9hr", "10hr", "11hr", "12hr", "1hr", "2hr", "3hr", "4hr", "5hr"];
var inputID = ["9Inp", "10Inp", "11Inp", "12Inp", "1Inp", "2Inp", "3Inp", "4Inp", "5Inp"];
var btnID = ["9Btn", "10Btn", "11Btn", "12Btn", "1Btn", "2Btn", "3Btn", "4Btn", "5Btn"];
//add a row for each hour with a for loop
for (var i=0; i< timeHour.length; i++) {
    hourCount += 1;
    console.log(hourCount);
    //add hours with hoursformatted in an array
    var tableRow = $("<div>");
    tableRow.addClass("row");
    tableRow.attr("id",timeHour[i]);
    //creat new col div for timeslot with class, id, and add to tableRow
    var coltime = $("<div>");
    coltime.addClass("col-lg-1 hour");
    coltime.attr("id", timeID[i]);
    coltime.text(timeHour[i]);
    tableRow.append(coltime);
    //creat new col div for userinput with class, id, and add to tableRow
    var colInp = $("<div>");
    colInp.addClass("col-lg-10");
    //set color class past for passed hour
    if (hourCount < currentHour) {
        colInp.addClass("past");
    }
    else if (hourCount == currentHour) {
        colInp.addClass("present");
    }
    else {
        colInp.addClass("future");
    }
    //set color class present for present hour
    //set color class future for future hour
    var textInput = $("<textarea>");
    textInput.attr("rows", "2");
    textInput.attr("cols", "115");
    textInput.attr("id",inputID[i]);
    colInp.append(textInput);
    tableRow.append(colInp);
    //creat new col div for savebutton with class, id, and add to tableRow
    var btnDiv = $("<div>");
    btnDiv.addClass("col-lg-1");
    var saveBtn = $("<button>");
    saveBtn.addClass("btn btn-lg saveBtn");
    saveBtn.append("<i class='far fa-save'></i>");
    btnDiv.append(saveBtn);
    tableRow.append(saveBtn);
    // add tableRow to tbBg
    $("#tbBg").append(tableRow);
    
}
/*
//when click save button
for (var i=0; i< timeHour[i]; i++) {
    $(".btn").on("click", function(event) {
        event.preventDefault();
        //save user input to a variable input
        input = $(".testArea").value.trim();
        //save timeslot to a variable time
        //check if input is empty
        if (input === "") {
            alert("Input cannot be blank");
        }
        else {
            alert("Registered successfully");
        }
        //save user input to input in local storage
        localStorage.setItem("input", email);
        //save timeslot to time in local storage
    })
}
//render last saved input once reload
renderLasInput();
function renderLasInput() {
    for (var i = 0; i < timeHour.length; i++) {
        var lastInput = localStorage.getItem(input);
        //display none if nothing saved in local storage
        if (!lastInput) {
            return;
        }
        //output saved input for each time slot
        $(".col-lg-10").text(lastInput);
        }
}
*/


 
    
    //set table contain with colspan
    //add save button
