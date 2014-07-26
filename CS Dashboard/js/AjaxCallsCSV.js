function doAJAXRevenue(url) {
    $.ajax({
        url: url,
        dataType: 'text',
        cache: false,
        }).done(function(csvAsString){
        csvAsArray=csvAsString.csvToArray({ rSep:'|' }, {head:false});
        // http://api.jquery.com/data/
        // Store our values because after refresh these may go missing (displayed as blank)
        $("body").data("revenue", csvAsArray[0]);        
        var StoredRevenue = $("body").data("revenue");
        $(".revenue").html("(Current: " + StoredRevenue + " /").css("color", "black");

        $("body").data("budget", csvAsArray[2]);        
        var StoredBudget = $("body").data("budget");
        $(".budget").html(" &nbsp;" + StoredBudget + ")").css("color", "black");

        var changingVar = csvAsArray[1].toString();        
        if (changingVar.contains("-")) {
            // text on the left side e.g. To Go vs. Over
            var stringToGo = "To go: ";   
            $(".TextToDisplay").html(stringToGo + " " + changingVar).css("color", "black");
            // add smiley
            var thumbnail = $("#ocr2 .thmbDiv").height("55px").width("55px").attr('src', "support_img/tongue.png");
        } else{
            var stringOver = "Over: ";
            $(".TextToDisplay").html(stringOver + " " + changingVar).css("color", "black");                
            var thumbnail = $("#ocr2 .thmbDiv").height("55px").attr('src', "support_img/pizza.png");
        }
    });
}

function playSound() {
    $.ajax({
        url: 'csv/RealTimeRevenueFooter.csv',
        dataType: 'text',
        cache: false,
        }).done(function(csvAsString){
            csvAsArray=csvAsString.csvToArray({ rSep:'|' }, {head:false});
            var revenue = csvAsArray[0].toString();
            var budget = csvAsArray[2].toString();        
            if (revenue == budget) {
                $.ionSound.play("metal_plate");
            } 
        });
}

// Thanks to http://stackoverflow.com/questions/1531093/how-to-get-current-date-in-javascript
function date_time(id) {
    var objToday = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sasturday' ),
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = new Array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ),
        dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder[objToday.getDate()] : objToday.getDate() + domEnder[parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))],
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        //curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(); //, 
        //curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = curHour + ":" + curMinute + ":" + curSeconds + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth; 
    //+ ", " +curYear;
    // " " +  curMeridiem +      
    $(".time").html(today);
    $(".time").css("color", "black");
    setTimeout('date_time("'+id+'");','1000');
    return true;
}
