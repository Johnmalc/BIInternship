function ocr2(id) {  

    function OCRImage(image){
        var canvas = document.createElement('canvas')
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        canvas.getContext('2d').drawImage(image, 0, 0)
        return OCRAD(canvas)
    }

    function OCRPath(url, callback){
        var image = new Image()
        image.src = url;
        image.onload = function(){ 
            callback(OCRImage(image))
        }
    }

    // This part is only used for budget value where the value is located at the top of the picture
    // http://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string-using-javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    OCRPath("img/sdelogv.png", function(words){
        //console.log(words);
        var myString = words.replace(/[0-9]+(?!.*[0-9])/, ""); // first match string with a regex
        var StringLastChars = myString.slice(-5); // we want just last, up-to 4 characters
        var find = "&";
        var re = new RegExp(find, "g");
        var Actual = StringLastChars.replace(re, "8"); // must be otherwise doesn't recognize 8
        var numberToCompare = parseFloat(Actual.replace(',', '.')); // JS only accepts . not a comma !

        var Budget = words.substring(1,5); // print first 3 number with ,
        var numberToCompareWith = parseFloat(Budget.replace(',', '.')); // JS only accepts . not a comma !

        if (numberToCompare < numberToCompareWith) {         
            var thumbContainer = document.getElementsByClassName("thmbDiv");
            var thumbnail = document.createElement("img");
            thumbContainer[0].appendChild(thumbnail);                
            thumbnail.src = "support_img/tongue.png";
            thumbnail.style.height = "55px";
            thumbnail.style.width = "55px";
        } else {
            var thumbContainer = document.getElementsByClassName("thmbDiv");
            var thumbnail = document.createElement("img");
            thumbContainer[0].appendChild(thumbnail);
            thumbnail.src = "support_img/pizza.png";
            thumbnail.style.height = "55px";
            thumbnail.style.width = "90px";
        };

    });

    return true;
}

// Thanks to http://stackoverflow.com/questions/1531093/how-to-get-current-date-in-javascript
function date_time(id) {
    var objToday = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ),
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = new Array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ),
        dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder[objToday.getDate()] : objToday.getDate() + domEnder[parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))],
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(); //, 
        //curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = curHour + ":" + curMinute + ":" + curSeconds + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " +curYear;
    // " " +  curMeridiem +
    $(".time").html(today);
    $(".time").css("color", "black");
    setTimeout('date_time("'+id+'");','1000');
    return true;
}
