function ocr(id) {  

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
    
    // This part is only used for current value where the value is located at the bottom of the picture
    // http://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string-using-javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // http://coding.pressbin.com/114/Solved-appendChild-is-not-a-function/
    OCRPath("img/sdelogv.png", function(words){
        //console.log(words);
        var myString = words.replace(/[0-9]+(?!.*[0-9])/, ""); // first match string with a regex
        var StringLastChars = myString.slice(-5); // we want just last, up-to 4 characters
        var find = "&";
        var re = new RegExp(find, "g");
        var newString = StringLastChars.replace(re, "8"); // must be otherwise doesn't recognize 8
        document.getElementById(id).innerHTML = newString;

        var numberToCompare = parseFloat(newString.replace(',', '.')); // JS only accepts . not a comma !

        if (numberToCompare < 40) {         
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
            thumbnail.style.width = "55px";
        };

        return console.log(newString);
    });

    return true;
}