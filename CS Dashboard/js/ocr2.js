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
        var myString = words.substring(1,5); // print first 3 number with ,
        document.getElementById(id).innerHTML = myString;
        return console.log(myString);
    });

    return true;
}