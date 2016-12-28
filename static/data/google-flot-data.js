//Overview Flot Line Chart
$(document).ready(function() {

    var offset = 0;
    plot();

    function plot() {
        var data1 = [
            [gd(2016, 12, 2), 2110],
            [gd(2016, 12, 3), 3430],
            [gd(2016, 12, 4), 2220],
            [gd(2016, 12, 5), 3130],
            [gd(2016, 12, 6), 2590],
            [gd(2016, 12, 7), 2700],
            [gd(2016, 12, 8), 3300],
            [gd(2016, 12, 9), 2610],
            [gd(2016, 12, 10), 2700],
            [gd(2016, 12, 11), 3000],
            [gd(2016, 12, 12), 3300],
            [gd(2016, 12, 13), 3500],
            [gd(2016, 12, 14), 3000],
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
            [gd(2016, 12, 2), 21120],
            [gd(2016, 12, 3), 14330],
            [gd(2016, 12, 4), 12320],
            [gd(2016, 12, 5), 13130],
            [gd(2016, 12, 6), 13590],
            [gd(2016, 12, 7), 17300],
            [gd(2016, 12, 8), 22300],
            [gd(2016, 12, 9), 12610],
            [gd(2016, 12, 10), 12700],
            [gd(2016, 12, 11), 13000],
            [gd(2016, 12, 12), 23300],
            [gd(2016, 12, 13), 13500],
            [gd(2016, 12, 14), 23000],
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
            [gd(2016, 12, 2), 2110],
            [gd(2016, 12, 3), 3430],
            [gd(2016, 12, 4), 2220],
            [gd(2016, 12, 5), 3130],
            [gd(2016, 12, 6), 2590],
            [gd(2016, 12, 7), 2700],
            [gd(2016, 12, 8), 3300],
            [gd(2016, 12, 9), 2610],
            [gd(2016, 12, 10), 2700],
            [gd(2016, 12, 11), 3000],
            [gd(2016, 12, 12), 3300],
            [gd(2016, 12, 13), 3500],
            [gd(2016, 12, 14), 3000],
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
            [gd(2016, 12, 2), 21120],
            [gd(2016, 12, 3), 14330],
            [gd(2016, 12, 4), 12320],
            [gd(2016, 12, 5), 13130],
            [gd(2016, 12, 6), 13590],
            [gd(2016, 12, 7), 17300],
            [gd(2016, 12, 8), 22300],
            [gd(2016, 12, 9), 12610],
            [gd(2016, 12, 10), 12700],
            [gd(2016, 12, 11), 13000],
            [gd(2016, 12, 12), 23300],
            [gd(2016, 12, 13), 13500],
            [gd(2016, 12, 14), 23000],
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
                    fill: true
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
                position: "right",
                axisLabel: "Change(%)",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 3
            }
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
        var data1 = [
            [gd(2016, 12, 2), 2110],
            [gd(2016, 12, 3), 3430],
            [gd(2016, 12, 4), 2220],
            [gd(2016, 12, 5), 3130],
            [gd(2016, 12, 6), 2590],
            [gd(2016, 12, 7), 2700],
            [gd(2016, 12, 8), 3300],
            [gd(2016, 12, 9), 2610],
            [gd(2016, 12, 10), 2700],
            [gd(2016, 12, 11), 3000],
            [gd(2016, 12, 12), 3300],
            [gd(2016, 12, 13), 3500],
            [gd(2016, 12, 14), 3000],
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
            [gd(2016, 12, 2), 21120],
            [gd(2016, 12, 3), 14330],
            [gd(2016, 12, 4), 12320],
            [gd(2016, 12, 5), 13130],
            [gd(2016, 12, 6), 13590],
            [gd(2016, 12, 7), 17300],
            [gd(2016, 12, 8), 22300],
            [gd(2016, 12, 9), 12610],
            [gd(2016, 12, 10), 12700],
            [gd(2016, 12, 11), 13000],
            [gd(2016, 12, 12), 23300],
            [gd(2016, 12, 13), 13500],
            [gd(2016, 12, 14), 23000],
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

        var plotObj = $.plot($("#keyword-flot-line-chart"),
            dataset,
            options);
    }
});
