$(function () {
    var options = {
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                text: 'Real Time Value Orders Created'
            },
            xAxis: {
                categories: ['Sameday Air', 'Sameday Rail', 'E-Log']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Real Time Value Orders Created'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: []
        };

            /*
            series: [{
                name: 'All today',
                data: [5, 3, 4]
            }, {
                name: 'Last Hour',
                data: [2, 2, 3]
            }, {
                name: 'Until one hour ago',
                data: [3, 4, 4]
            }]
            */
    $.get('../csv/data2.csv', function(data) {
        // Split the lines
        var lines = data.split('\n');
        $.each(lines, function(lineNo, line) {
            var items = line.split(',');
            // header line containes categories
            if (lineNo == 0) {
                $.each(items, function(itemNo, item) {
                    if (itemNo > 0) options.xAxis.categories.push(item);
                });
            }
            // the rest of the lines contain data with their name in the first position
            else {
                var series = { 
                    data: []
                };
                $.each(items, function(itemNo, item) {
                    if (itemNo == 0) {
                        series.name = item;
                    } else {
                        series.data.push(parseFloat(item));
                    }
                });
                options.series.push(series);
            }
        });
        var chart = new Highcharts.Chart(options);
    });
});