//Overview Flot Line Chart
$(document).ready(function() {

    var offset = 0;
    plot();

    function plot() {
        var data1 = [

            [gd(2016, 12, 15), 2400],
            [gd(2016, 12, 16), 2800],
            [gd(2016, 12, 17), 2600],
            [gd(2016, 12, 18), 2590],
            [gd(2016, 12, 19), 2700],
            [gd(2016, 12, 20), 4300],
            [gd(2016, 12, 21), 4500],
            [gd(2016, 12, 22), 3700],
            [gd(2016, 12, 23), 3000],
            [gd(2016, 12, 24), 14300],
            [gd(2016, 12, 25), 13500],
            [gd(2016, 12, 26), 4500],
            [gd(2016, 12, 27), 3700],
            [gd(2016, 12, 28), 5000],
            [gd(2016, 12, 29), 5300],
            [gd(2016, 12, 30), 13500]
        ];
        var data2 = [

            [gd(2016, 12, 15), 14400],
            [gd(2016, 12, 16), 24800],
            [gd(2016, 12, 17), 24600],
            [gd(2016, 12, 18), 24590],
            [gd(2016, 12, 19), 17040],
            [gd(2016, 12, 20), 13040],
            [gd(2016, 12, 21), 15004],
            [gd(2016, 12, 22), 27004],
            [gd(2016, 12, 23), 20004],
            [gd(2016, 12, 24), 43404],
            [gd(2016, 12, 25), 35000],
            [gd(2016, 12, 26), 23500],
            [gd(2016, 12, 27), 17400],
            [gd(2016, 12, 28), 20400],
            [gd(2016, 12, 29), 24300],
            [gd(2016, 12, 30), 35040]
        ];
        // var dataset = [data1, data2]

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
        var dataset = [{
            label: "觸擊次數",
            data: data2
        }, {
            label: "點擊次數",
            data: data1
        }];
        var options = {
            series: {
                stack: true,
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 0.07
                        }, {
                            opacity: 0.05
                        }]
                    }
                },
                points: {
                    radius: 3,
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                tickSize: [1, "day"],
                tickLength: 10,
                color: "black",
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10
            },
            colors: ["#FF7070", "#f2cd51"],
        };

        var plotObj = $.plot($("#overview-flot-line-chart"), dataset,
            options);
    }
});

//Group Flot Line Chart
$(document).ready(function() {

    var offset = 0;
    plot();

    function plot() {
        var data1 = [

            [gd(2016, 12, 16), 10.78],
            [gd(2016, 12, 17), 15.12],
            [gd(2016, 12, 18), 20.22],
            [gd(2016, 12, 19), 16.32],
            [gd(2016, 12, 20), 18.42],
            [gd(2016, 12, 21), 20.12],
            [gd(2016, 12, 22), 19.92],
            [gd(2016, 12, 23), 17.82],
            [gd(2016, 12, 24), 20.42],
            [gd(2016, 12, 25), 15.82],
            [gd(2016, 12, 26), 16.42],
            [gd(2016, 12, 27), 17.2],
            [gd(2016, 12, 28), 20.42],
            [gd(2016, 12, 29), 20.82],
            [gd(2016, 12, 30), 20.72]
        ];
        var data2 = [
            [gd(2016, 12, 16), 12.5],
            [gd(2016, 12, 17), 12.6],
            [gd(2016, 12, 18), 12.45],
            [gd(2016, 12, 19), 12.21],
            [gd(2016, 12, 20), 12.44],
            [gd(2016, 12, 21), 12.55],
            [gd(2016, 12, 22), 12.57],
            [gd(2016, 12, 23), 12.87],
            [gd(2016, 12, 24), 12.66],
            [gd(2016, 12, 25), 12.55],
            [gd(2016, 12, 26), 17.5],
            [gd(2016, 12, 27), 17.0],
            [gd(2016, 12, 28), 17.1],
            [gd(2016, 12, 29), 17.2],
            [gd(2016, 12, 30), 17.3]
        ];
        var data3 = [
            [gd(2016, 12, 16), 20],
            [gd(2016, 12, 17), 15],
            [gd(2016, 12, 18), 10],
            [gd(2016, 12, 19), 5],
            [gd(2016, 12, 20), 7.5],
            [gd(2016, 12, 21), 12.5],
            [gd(2016, 12, 22), 15.2],
            [gd(2016, 12, 23), 15.3],
            [gd(2016, 12, 24), 15.6],
            [gd(2016, 12, 25), 17.5],
            [gd(2016, 12, 26), 17.0],
            [gd(2016, 12, 27), 14.4],
            [gd(2016, 12, 28), 14.2],
            [gd(2016, 12, 29), 14.6],
            [gd(2016, 12, 30), 14.7]
        ];
        var data4 = [
            [gd(2016, 12, 16), 3],
            [gd(2016, 12, 17), 3.2],
            [gd(2016, 12, 18), 3.3],
            [gd(2016, 12, 19), 7.2],
            [gd(2016, 12, 20), 7.5],
            [gd(2016, 12, 21), 5.5],
            [gd(2016, 12, 22), 3.3],
            [gd(2016, 12, 23), 3.2],
            [gd(2016, 12, 24), 3.6],
            [gd(2016, 12, 25), 7.5],
            [gd(2016, 12, 26), 10.0],
            [gd(2016, 12, 27), 7.4],
            [gd(2016, 12, 28), 5.2],
            [gd(2016, 12, 29), 3.6],
            [gd(2016, 12, 30), 7.7]
        ];
        var data5 = [
            [gd(2016, 12, 16), 7.5],
            [gd(2016, 12, 17), 7.7],
            [gd(2016, 12, 18), 14],
            [gd(2016, 12, 19), 12],
            [gd(2016, 12, 20), 7.5],
            [gd(2016, 12, 21), 4.5],
            [gd(2016, 12, 22), 2.2],
            [gd(2016, 12, 23), 2.3],
            [gd(2016, 12, 24), 2.6],
            [gd(2016, 12, 25), 7.5],
            [gd(2016, 12, 26), 10.0],
            [gd(2016, 12, 27), 7.4],
            [gd(2016, 12, 28), 7.2],
            [gd(2016, 12, 29), 10.6],
            [gd(2016, 12, 30), 5.7]
        ];

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
        var dataset = [{
            label: "上衣",
            data: data1
        }, {
            label: "褲款",
            data: data2
        }, {
            label: "運動系列",
            data: data3
        }, {
            label: "鞋包",
            data: data4
        }, {
            label: "洋裝",
            data: data5
        }];
        var options = {
            series: {
                stack: true,
                lines: {
                    show: true,
                },
                points: {
                    radius: 3,
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                tickSize: [1, "day"],
                tickLength: 10,
                color: "black",
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10
            },
            yaxis: {
                axisLabel: "Change(%)",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 3
            },
            colors: ["#2828FF", "#FF8040", "#8CEA00", "#F9F900", "#EA0000"]
        };

        var plotObj = $.plot($("#group-flot-line-chart"), dataset, options);
    }

    //     var plotObj = $.plot($("#group-flot-line-chart"), [{
    //             data: sin,
    //             label: "sin(x)"
    //         }, {
    //             data: cos,
    //             label: "cos(x)"
    //         }],
    //         options);
    // }
});

//Keyword Flot Line Chart
$(document).ready(function() {

    var offset = 0;
    plot();

    function plot() {

        var data2 = [
            [gd(2016, 12, 2), 1120],
            [gd(2016, 12, 3), 4330],
            [gd(2016, 12, 4), 2320],
            [gd(2016, 12, 5), 3130],
            [gd(2016, 12, 6), 3590],
            [gd(2016, 12, 7), 7300],
            [gd(2016, 12, 8), 2300],
            [gd(2016, 12, 9), 2610],
            [gd(2016, 12, 10), 2700],
            [gd(2016, 12, 11), 3000],
            [gd(2016, 12, 12), 3300],
            [gd(2016, 12, 13), 3500],
            [gd(2016, 12, 14), 3000],
            [gd(2016, 12, 15), 4400],
            [gd(2016, 12, 16), 4800],
            [gd(2016, 12, 17), 4600],
            [gd(2016, 12, 18), 4590],
            [gd(2016, 12, 19), 7040],
            [gd(2016, 12, 20), 3040],
            [gd(2016, 12, 21), 5004],
            [gd(2016, 12, 22), 7004],
            [gd(2016, 12, 23), 3004],
            [gd(2016, 12, 24), 3404],
            [gd(2016, 12, 25), 5000],
            [gd(2016, 12, 26), 3500],
            [gd(2016, 12, 27), 7400],
            [gd(2016, 12, 28), 4400],
            [gd(2016, 12, 29), 4300],
            [gd(2016, 12, 30), 5040]
        ];
        // var dataset = [data1, data2]

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
        var dataset = [{
            data: data2
        }];
        var options = {
            series: {
                stack: true,
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 0.07
                        }, {
                            opacity: 0.05
                        }]
                    }
                },
                points: {
                    radius: 3,
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                tickSize: [1, "day"],
                tickLength: 10,
                color: "black",
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 11,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 9
            },
            colors: ["#28FF28"],
        };

        var plotObj = $.plot($("#keyword-flot-line-chart"),
            dataset,
            options);
    }
});
