 $(function () {

    $('#container').highcharts({
    
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
                        [1, '#DDD']
                    ]
                },
                borderWidth: 5,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#EEE',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '102%'
            }]
        },
           
        // the value axis
        yAxis: {
            min: 400,
            max: 650,
            
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
                step: 5,
                rotation: 'auto'
            },
            title: {
                text: 'in TEUR',
                style: {
                    "fontSize": "25px"
                }
            },
            plotBands: [{
                from: 400,
                to: 450,
                color: '#DF5353' // red
            }, {
                from: 450,
                to: 500,
                color: '#FFA500' // orange
            }, {
                from: 500,
                to: 550,
                color: '#FFFF00' // yellow
            }, {
                from: 550,
                to: 600,
                color: '#32FF32' // lime
            }, {
                from: 600,
                to: 650,
                color: '#005800' // green
            }]        
        },

        series: [{
            name: 'Revenue',
            data: [0], // begin here
            tooltip: {
                valueSuffix: ' TEUR'
            }
        }]
    
    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            var currentNumber;    
            var nowNumber;
            setInterval(function () {

                Papa.parse("../csv/RealTimeRevenueFooter.csv", { 
                    download: true, 
                    delimiter: "|",
                    dynamicTyping: true,
                    complete: function(results) { 
                        currentNumberArray = results.data[0];
                        nowNumber = currentNumberArray[3]; // number here to fetch for values
                        var point = chart.series[0].points[0],
                                    newVal,
                                    inc = Math.round(nowNumber);
                                    //console.log(nowNumber);
                                    //console.log(point);
                                    point.y = 0; // reset every 3 seconds to 0. Then 0+ new value.
                                    newVal = point.y + inc;
                                    //if (newVal < 0 || newVal > 200) {
                                    //    newVal = point.y - inc;
                                    //}
                                    point.update(newVal);
                    }
                });
                
            }, 2000);
        }
    });
});


