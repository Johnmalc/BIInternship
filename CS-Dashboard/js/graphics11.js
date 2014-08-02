$(function () {
	
    var gaugeOptions = {
	
	    chart: {
	        type: 'solidgauge'
	    },
	    
	    title: null,
	    
	    pane: {
	    	center: ['50%', '85%'],
	    	size: '140%',
	        startAngle: -90,
	        endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
	    },

	    tooltip: {
	    	enabled: false
	    },
	       
	    // the value axis
	    yAxis: {
			stops: [
				[0.1, '#55BF3B'], // green
	        	[0.5, '#DDDF0D'], // yellow
	        	[0.9, '#DF5353'] // red
			],
			lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
	        title: {
                y: -70
	        },
            labels: {
                y: 16
            }        
	    },
        
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };
    
    // The speed gauge
    $('#container-speed').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
	        min: 0,
	        max: 200,
	        title: {
	            text: 'Speed'
	        }       
	    },

	    credits: {
	    	enabled: false
	    },
	
	    series: [{
	        name: 'Speed',
	        data: [0],
	        dataLabels: {
	        	format: '<div style="text-align:center"><span style="font-size:25px;color:' + 
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' + 
                   	'<span style="font-size:12px;color:silver">km/h</span></div>'
	        },
	        tooltip: {
	            valueSuffix: ' km/h'
	        }
	    }]
	
	}));
    
    // The RPM gauge
    $('#container-rpm').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
        	min: 0,
        	max: 100,
	        title: {
	            text: 'RPM'
	        }       
	    },
	
	    series: [{
	        name: 'RPM',
	        data: [0],
	        dataLabels: {
	        	format: '<div style="text-align:center"><span style="font-size:25px;color:' + 
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' + 
                   	'<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
	        },
	        tooltip: {
	            valueSuffix: ' revolutions/min'
	        }      
	    }]
	
	}));
                               
    // Bring life to the dials
    setInterval(function () {
    	// Speed
        var chart = $('#container-speed').highcharts();
        if (chart) {
            Papa.parse("../csv/RealTimeRevenueFooter.csv", { 
                download: true, 
                delimiter: "|",
                dynamicTyping: true,
                complete: function(results) { 
                    currentNumberArray = results.data[0];
                    nowNumber = currentNumberArray[2]; // number here to fetch for values
                    var point = chart.series[0].points[0],
                                newVal,
                                inc = Math.round(nowNumber);
                                console.log(nowNumber);
                                console.log(point);
                                point.y = 0; // reset every 3 seconds to 0. Then 0+ new value.
                                newVal = point.y + inc;
                                //if (newVal < 0 || newVal > 200) {
                                //    newVal = point.y - inc;
                                //}
                                point.update(newVal);
                }
            });
        }

        // RPM
        chart = $('#container-rpm').highcharts();
        if (chart) {
            Papa.parse("../csv/RealTimeRevenueFooter.csv", { 
                download: true, 
                delimiter: "|",
                dynamicTyping: true,
                complete: function(results) { 
                    currentNumberArray = results.data[0];
                    nowNumber = currentNumberArray[2]; // number here to fetch for values
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
    	}
    }, 2000);  
    
	
});