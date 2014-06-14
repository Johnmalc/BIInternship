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
    OCRPath("img/sdetotal.png", function(words){
        myString = words.replace(/^[0-9]/g, "");
        console.log(myString);
        
        $(document).ready(function() {
           var raa = words.match(/(\d+)/g);
        }



        document.getElementById(id).innerHTML = myString;
        return console.log(words);
    });

    
    return true;
}
