
    var chart20; // global
    /**
     * Request data from the server, add it to the graph and set a timeout 
     * to request again
     * POZOR:Iprava nutna v SASu, jinak bude stejne prepsan.
     */
    function request20() {
        //var firtst = null;
        $.ajax({
            url: '../json5.php',
            success: function(point) {
                var series = chart20.series[0],
                    seri = chart20.series[1],
                    shift = series.data.length > 12; 

                    console.log(series);
                    console.log(seri);
                    firtst = point[0];
                    second = point[1];
		    third = point[2];
                    //console.log(firtst);
                    //console.log(second);
                    for (i = 0; i < firtst.length; i++) {
                        chart20.series[0].addPoint(firtst[i], true, shift);
                        chart20.series[1].addPoint(second[i], true, shift);
			chart20.series[2].addPoint(third[i], true, shift);
                    }
                // call it again after one second
                // setTimeout(requestData, 5000);    
            },
            cache: false
        });
    }

   $(document).ready(function() {
        chart20 = new Highcharts.Chart({
            chart: {
                renderTo: 'samedayair',
                zoomType: 'xy',
                events: {
                    load: request20
                }
            },
            title: {
                text: 'Sameday Air Market Revenue (Actual x PY x Budget)'
            },/*
            subtitle: {
                text: 'Och, those numbers!'
            },*/
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            yAxis: [{ 
                labels: {
                    format: '{value} TEUR',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                title: {
                    text: 'Actual',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }
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
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Actual',
                type: 'column',
                data: []
            } , {
	        name: 'PY',
                type: 'spline',
                data: []
            } , {
                name: 'Budget',
                type: 'spline',
                data: []
            }]
        });
    });
    