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
    
    // http://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string-using-javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    OCRPath("img/sdrailv.png", function(words){
        var myString = words.replace(/[0-9]+(?!.*[0-9])/, ""); // first match string with a regex
        var StringLastChars = myString.slice(-5); // we want just last, up-to 4 characters
        var newString = StringLastChars.replace("&", "8"); // must be otherwise doesn't recognize 8
        document.getElementById(id).innerHTML = newString;
        return console.log(newString);
    });

    return true;
}