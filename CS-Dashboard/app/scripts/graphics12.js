
    var chart; // global
    /**
     * Request data from the server, add it to the graph and set a timeout 
     * to request again
     * POZOR:Iprava nutna v SASu, jinak bude stejne prepsan.
     */
    function requestData() {
        //var firtst = null;
        $.ajax({
            url: '../json.php',
            success: function(point) {
                var series = chart.series[0],
                    seri = chart.series[1],
                    shift = series.data.length > 12; 

                    console.log(series);
                    console.log(seri);
                    firtst = point[0];
                    second = point[1];
                    //console.log(firtst);
                    //console.log(second);
                    for (i = 0; i < firtst.length; i++) {
                        chart.series[0].addPoint(firtst[i], true, shift);
                        chart.series[1].addPoint(second[i], true, shift);
                    }
                // call it again after one second
                // setTimeout(requestData, 5000);    
            },
            cache: false
        });
    }

   $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                zoomType: 'xy',
                events: {
                    load: requestData
                }
            },
            title: {
                text: 'Emergency Logistics Market Revenue (Actual x PY)'
            },
            subtitle: {
                text: 'Och, those numbers!'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value} TEUR',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Actual',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'PY',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} TUER',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Actual',
                type: 'column',
                yAxis: 1,
                data: []
                //[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                /*tooltip: {
                    valueSuffix: ' TUER'
                }*/
    
            } , {
                name: 'PY',
                type: 'spline',
                data: [],
                tooltip: {
                    valueSuffix: 'TUER'
                }
            }]
        });
    });
    