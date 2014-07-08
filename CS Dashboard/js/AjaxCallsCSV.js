function doAJAXRevenue(url) {
    $.ajax({
        url: url,
        dataType: 'text',
        cache: false,
        }).done(function(csvAsString){
        csvAsArray=csvAsString.csvToArray({ rSep:'|' }, {head:false});
        csvAsArray[0].toString();        
        $(".revenue").html(csvAsArray[0]);
    });
}
function doAJAXBudget(url) {
    $.ajax({
        url: url,
        dataType: 'text',
        cache: false,
        }).done(function(csvAsString){
        csvAsArray=csvAsString.csvToArray({ rSep:'|' }, {head:false});
        csvAsArray[0].toString();        
        $(".budget").html(csvAsArray[0]);
        //$(".output").addClass('red');
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
            var string = "To go: "   
            $(".TextToDisplay").html(string);         
            console.log("alert");
        } else{
            console.log("alert+");
            var string = "Over: "
            $(".TextToDisplay").html(string);
        };
    });
}