$(function () {

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    var rail;    
    
    Papa.parse("../csv/RealTimeRevenueFooter.csv", { 
        download: true, 
        delimiter: "|",
        dynamicTyping: true,
        complete: function(results) { 
            rail = results.data[0][2];
            console.log(rail);
        }
    });

    var chart;
    $('#container').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function() {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function() {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random()//rail; // Math.random()
                        series.addPoint([x, y], true, true);
                    }, 5000);
                }
            }
        },
        title: {
            text: 'Live Revenues'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        /*tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                Highcharts.numberFormat(this.y, 2);
            }
        },*/
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i++) {
                    data.push({
                        x: time + i * 5000,
                        y: Math.random() //rail
                    });
                }
                return data;
            })()
        }]
    });
});