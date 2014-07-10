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
        $(".revenue").html(StoredRevenue).css("color", "black");
    });
}

function doAJAXBudget(url) {
    $.ajax({
        url: url,
        dataType: 'text',
        cache: false,
        }).done(function(csvAsString){ 
        csvAsArray=csvAsString.csvToArray({ rSep:'|' }, {head:false});
        // see above
        $("body").data("budget", csvAsArray[0]);        
        var StoredBudget = $("body").data("budget");
        $(".budget").html(StoredBudget).css("color", "black");
    });
}

function doAJAXRevText(url) {
    $.ajax({
        url: url,
        dataType: 'text',
        cache: false,
        }).done(function(csvAsString){
            csvAsArray=csvAsString.csvToArray({ rSep:'|' }, {head:false});
            var revenue = csvAsArray[1].toString();        
            console.log(revenue);   
            if (revenue.contains("-")) {
                // text on the left side e.g. To Go vs. Over
                var stringToGo = "To go: ";   
                $(".TextToDisplay").html(stringToGo + " " + revenue).css("color", "black");
                // add smiley
                var thumbnail = $("#ocr2 .thmbDiv").height("55px").width("55px").attr('src', "support_img/tongue.png");
            } else{
                var stringOver = "Over: ";
                $(".TextToDisplay").html(stringOver + " " + revenue).css("color", "black");                
                var thumbnail = $("#ocr2 .thmbDiv").height("55px").width("90px").attr('src', "support_img/pizza.png");
            }
        });
}