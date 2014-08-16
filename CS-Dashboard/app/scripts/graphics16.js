
var chart; // global
var chart2;
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
            for (var i = 0; i < point.length; i++) {
                chart2.series[0].addPoint(point[i],true);
                // chart.series[1].addPoint(drRada[i],true); 
            };           
        },
        cache: false
    });
}

$(document).ready(function() {
   chart = new Highcharts.Chart({
        chart: {
            type: 'pie',
            events: {
                load: requestData
            },
            renderTo: 'container',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
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
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: []
        }]

    });
});

$(document).ready(function() {
   chart2 = new Highcharts.Chart({
        chart: {
            type: 'pie',
            /*events: {
                load: requestData
            },*/
            renderTo: 'dole',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'More than 6 shipments per agent (creator) during last 7 days'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: []
        }]

    });
});
