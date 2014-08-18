
var chart; // global
/**
 * Request data from the server, add it to the graph and set a timeout 
 * to request again
 */
function requestData() {
    //var firtst = null;
    $.ajax({
        url: '../json2.php',
        success: function(point) { 

            prRada = point[0];
            drRada = point[1];
            console.log(point[0]);
            console.log(point[1]);

            for (var i = 0; i < prRada.length; i++) {
                chart.series[0].addPoint(prRada[i],true);
                chart.series[1].addPoint(drRada[i],true); 
            };                  
        },
        cache: false
    });
}

$(document).ready(function() {
   chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'area',
            events: {
                load: requestData
            },
            inverted: true
        },
        title: {
            text: '(Not)Realized E-Log Offers during last week'
        },
        subtitle: {
            style: {
                position: 'absolute',
                right: '0px',
                bottom: '10px'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ]
        },
        yAxis: {
            title: {
                text: 'Number of offers'
            },
            labels: {
                formatter: function() {
                    return this.value;
                }
            },
            min: 0,
 	    allowDecimals: false
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5/*,
                dataLabels: {
                    enabled: true
                }*/
            }
        },
        series: [{
            name: 'Offers realized',
            data: []
        }, {
            name: 'Offers not realized',
            data: []
        }]
    });
});
