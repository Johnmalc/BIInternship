
var chart; // global
/**
 * Request data from the server, add it to the graph and set a timeout 
 * to request again
 */
function requestData() {
    //var firtst = null;
    $.ajax({
        url: '../json3.php',
        success: function(point) { 

            prRada = point[0];
            drRada = point[1];
            console.log(point[0]);
            console.log(point[1]);
            console.log(point[2]);
            console.log(point[3]);
            console.log(point[4]);
            console.log(point[5]);
            console.log(point[6]);

            for (var i = 0; i < point.length; i++) {
                chart.series[0].addPoint(point[i],true);
                // chart.series[1].addPoint(drRada[i],true); 
            };                  
        },
        cache: false
    });
}

$(document).ready(function() {
   chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            events: {
                load: requestData
            },
        },
        title: {
            text: 'More than 6 shipments per agent (creator) during last 7 days'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
		showInLegend: false //true
            }
        },
        series: [{
		type: 'pie',
                name: 'Browser share',
                data: []
        }]

    });
});
