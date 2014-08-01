$(function () {
    var rail;
    var rail1;
    var rail2;
    var rail3;

    Papa.parse("../csv/RealTimeRevenueFooter.csv", { 
        download: true, 
        delimiter: "|",
        dynamicTyping: true,
        complete: function(results) { 
            rail = results.data[0];
            rail1 = results.data[0][1];
            rail2 = results.data[0][1];
            rail3 = results.data[0][2];
            //console.log(rail1);
        }
    });

    var options = {
        chart: {
            renderTo: 'container',
            type: 'column'
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
        /*tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },*/
        plotOptions: {
            column: {
                pointPadding: 0.2,
                //colorByPoint: true,
                //colors: ['#e4d354', '#e4m3p4', '#e4r354'],
                borderWidth: 0
            }
        },
        series: []
    };

    $.get('../csv/data.csv', function(data) {
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