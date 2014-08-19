var chart19;

function requestData19() {
    //var firtst = null;
    $.ajax({
        url: '../json4.php',
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
                chart19.series[0].addPoint(prRada[i],true);
                chart19.series[1].addPoint(drRada[i],true); 
            };         
            
            /*for (var i = 0; i < point.length; i++) {
                chart19.series[1].addPoint(point[i],true);
                // chart.series[1].addPoint(drRada[i],true); 
            }; */       
        },
        cache: false
    });
}


$(document).ready(function() {
   chart19 = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: 'container3',
            events: {
                load: requestData19
            }
        },
        title: {
            text: 'Real Time Created Order at t:m GmbH'
        },
        subtitle: {
            text: 'in TEUR'
        },
        xAxis: {
            categories: [
                'Sameday Air',
                'Sameday Rail',
                'E-Log'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Revenue'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                //colorByPoint: true,
                //colors: ['#e4d354', '#e4m3p4', '#e4r354'],
                borderWidth: 0, 
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: "Actual",
            data: []
        },{
            name: "Budget",
            data: []
        }]
    });
});






