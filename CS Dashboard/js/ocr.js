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
    
    var myString;
    // http://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string-using-javascript
    OCRPath("img/sdetotal.png", function(words){
        myString = words.replace(/[0-9]+(?!.*[0-9])/, ""); // first match string with a regex
        console.log(myString);
        var myNewString = myString.slice(-5); // then take last 3 characters
        document.getElementById(id).innerHTML = myNewString;
        return console.log(myNewString);
    });

    return true;
}