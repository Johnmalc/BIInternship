 $(function () {
    $('#container, #pekne').highcharts({
    
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: true
        },
        
        title: {
            text: 'SD:Air', 
            style: {
                "color": "#333333", 
                "fontSize": "35px" 
            }
        },
        
        pane: {
            startAngle: -130,
            endAngle: 130,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },
           
        // the value axis
        yAxis: {
            min: 20,
            max: 160,
            
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 15,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
    
            tickPixelInterval: 30,
            tickWidth: 5,
            tickPosition: 'inside',
            tickLength: 15,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'in TEUR',
                style: {
                    "fontSize": "25px"
                }
            },
            plotBands: [{
                from: 40,
                to: 60,
                color: '#DF5353' // red
            }, {
                from: 60,
                to: 80,
                color: '#DF5353' // orange
            }, {
                from: 80,
                to: 100,
                color: '#FFFF00' // yellow
            }, {
                from: 100,
                to: 120,
                color: '#32FF32' // lime
            }, {
                from: 120,
                to: 140,
                color: '#005800' // green
            }]        
        },
    
        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    
    }, 
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 60);
                
                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }
                
                point.update(newVal);
                    
                Papa.parse("../csv/RealTimeRevenueFooter.csv", { 
                    download: true, 
                    delimiter: "|",
                    dynamicTyping: true,
                    complete: function(results) { 
                      console.log(results.data);
                    }
                });

            }, 3000);
        }
    });
});




