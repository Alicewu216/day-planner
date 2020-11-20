$(document).ready(function () {
  //using luxon.DateTime to get DataTime object
  var DateTime = luxon.DateTime;
  //save current weekday, month, day to dt variable
  var dt = DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
  });
  var currentHour = DateTime.local().toLocaleString({
    hour: "2-digit",
    hour12: false,
  }); //=> '11'

  //output current time to screen
  $("#currentDay").text(dt);
  var hourCount = 8;

  //add calender background to html dynamically
  //add a dive to hold grid
  $("#tableContainer").append("<div class='time-block' id='tbBg'></div>");
  //array containing working hours
  var timeHour = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];
  var timeID = [
    "9hr",
    "10hr",
    "11hr",
    "12hr",
    "1hr",
    "2hr",
    "3hr",
    "4hr",
    "5hr",
  ];
  var inputID = [
    "9Inp",
    "10Inp",
    "11Inp",
    "12Inp",
    "1Inp",
    "2Inp",
    "3Inp",
    "4Inp",
    "5Inp",
  ];
  var btnID = [
    "9Btn",
    "10Btn",
    "11Btn",
    "12Btn",
    "1Btn",
    "2Btn",
    "3Btn",
    "4Btn",
    "5Btn",
  ];
  //add a row for each hour with a for loop
  for (var i = 0; i < timeHour.length; i++) {
    hourCount += 1;
    console.log(hourCount);
    //add hours with hoursformatted in an array
    var tableRow = $("<div>");
    tableRow.addClass("row");
    tableRow.attr("id", timeHour[i]);
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
    } //set color class present for present hour
    else if (hourCount == currentHour) {
      colInp.addClass("present");
    } //set color class future for future hour
    else {
      colInp.addClass("future");
    }

    var textInput = $("<textarea>");
    textInput.attr("rows", "2");
    textInput.attr("cols", "110");
    textInput.attr("id", inputID[i]);
    colInp.append(textInput);
    tableRow.append(colInp);
    //creat new col div for savebutton with class, id, and add to tableRow
    var btnDiv = $("<div>");
    btnDiv.addClass("col-lg-1");
    var saveBtn = $("<button>");
    saveBtn.addClass("btn btn-lg saveBtn");
    saveBtn.append("<i class='far fa-save'></i>");
    saveBtn.attr("id", btnID[i]);
    btnDiv.append(saveBtn);
    tableRow.append(saveBtn);
    // add tableRow to tbBg
    $("#tbBg").append(tableRow);
  }
  //save user input to localstorage for each time slot
  $("#9Btn").on("click", function () {
    var x = document.getElementById("9Inp").value;
    localStorage.setItem("input9am", x);
  });
  $("#10Btn").on("click", function () {
    var x = document.getElementById("10Inp").value;

    localStorage.setItem("input10am", x);
  });
  $("#11Btn").on("click", function () {
    var x = document.getElementById("11Inp").value;

    localStorage.setItem("input11am", x);
  });
  $("#12Btn").on("click", function () {
    var x = document.getElementById("12Inp").value;

    localStorage.setItem("input12pm", x);
  });
  $("#1Btn").on("click", function () {
    var x = document.getElementById("1Inp").value;
    localStorage.setItem("input1pm", x);
  });
  $("#2Btn").on("click", function () {
    var x = document.getElementById("2Inp").value;

    localStorage.setItem("input2pm", x);
  });
  $("#3Btn").on("click", function () {
    var x = document.getElementById("3Inp").value;

    localStorage.setItem("input3pm", x);
  });
  $("#4Btn").on("click", function () {
    var x = document.getElementById("4Inp").value;

    localStorage.setItem("input4pm", x);
  });
  $("#5Btn").on("click", function () {
    var x = document.getElementById("5Inp").value;

    localStorage.setItem("input5pm", x);
  });

  //render last saved input once reload
  renderLasInput();
  function renderLasInput() {
    var last9 = localStorage.getItem("input9am");
    document.getElementById("9Inp").textContent = last9;

    var last10 = localStorage.getItem("input10am");
    document.getElementById("10Inp").textContent = last10;

    var last11 = localStorage.getItem("input11am");
    document.getElementById("11Inp").textContent = last11;

    var last12 = localStorage.getItem("input12pm");
    document.getElementById("12Inp").textContent = last12;

    var last1 = localStorage.getItem("input1pm");
    document.getElementById("1Inp").textContent = last1;

    var last2 = localStorage.getItem("input2pm");
    document.getElementById("2Inp").textContent = last2;

    var last3 = localStorage.getItem("input3pm");
    document.getElementById("3Inp").textContent = last3;

    var last4 = localStorage.getItem("input4pm");
    document.getElementById("4Inp").textContent = last4;

    var last5 = localStorage.getItem("input5pm");
    document.getElementById("5Inp").textContent = last5;
  }
});
