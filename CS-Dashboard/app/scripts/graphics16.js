
var chart3; // global
var chart4;
/**
 * Request data from the server, add it to the graph and set a timeout 
 * to request again
 */
function requestData16() {
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
                chart3.series[0].addPoint(point[i],true);
                // chart.series[1].addPoint(drRada[i],true); 
            };         
            for (var i = 0; i < point.length; i++) {
                chart4.series[0].addPoint(point[i],true);
                // chart.series[1].addPoint(drRada[i],true); 
            };           
        },
        cache: false
    });
}

$(document).ready(function() {
   chart3 = new Highcharts.Chart({
        chart: {
            type: 'pie',
            events: {
                load: requestData16
            },
            renderTo: 'containerAgent',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: '(Creating) Agents with more than 6 shipments during last 7 days'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.1f}</b>'
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
   chart4 = new Highcharts.Chart({
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
            text: '(Creating) Agents with more than 6 shipments during last 7 days'
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
