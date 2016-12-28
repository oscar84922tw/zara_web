//Like Line Chart
$(document).ready(function() {

    var offset = 0;
    plot();

    function plot() {
        var data1 = [
            [gd(2016, 12, 21), 366],
            [gd(2016, 12, 22), 346],
            [gd(2016, 12, 23), 387],
            [gd(2016, 12, 24), 1438],
            [gd(2016, 12, 25), 1499],
            [gd(2016, 12, 26), 1509],
            [gd(2016, 12, 27), 1509],
            [gd(2016, 12, 28), 500],
            [gd(2016, 12, 29), 502],
            [gd(2016, 12, 30), 502]
        ];

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
        var dataset = [{
            data: data1
        }];
        var options = {
            series: {
                stack: true,
                lines: {
                    show: true,
                    fill: true,

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
            colors: ["rgb(75, 103, 213)"]
        };

        var plotObj = $.plot($("#like-flot-line-chart"), dataset,
            options);
    }
});

//Reach Line Chart
$(document).ready(function() {

    var offset = 0;
    plot();

    function plot() {
        var data1 = [
            [gd(2016, 12, 21), 36680],
            [gd(2016, 12, 22), 30670],
            [gd(2016, 12, 23), 30700],
            [gd(2016, 12, 24), 43800],
            [gd(2016, 12, 25), 46900],
            [gd(2016, 12, 26), 36930],
            [gd(2016, 12, 27), 36980],
            [gd(2016, 12, 28), 37000],
            [gd(2016, 12, 29), 37210],
            [gd(2016, 12, 30), 37220]
        ];

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
        var dataset = [{
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
            colors: ["rgb(75, 103, 213)"]
        };

        var plotObj = $.plot($("#reach-flot-line-chart"), dataset,
            options);
    }
});

//Views Flot Line Chart
$(document).ready(function() {

    var offset = 0;
    plot();

    function plot() {
        var data1 = [
            [gd(2016, 12, 21), 36680],
            [gd(2016, 12, 22), 31670],
            [gd(2016, 12, 23), 46700],
            [gd(2016, 12, 24), 56800],
            [gd(2016, 12, 25), 36900],
            [gd(2016, 12, 26), 46930],
            [gd(2016, 12, 27), 56980],
            [gd(2016, 12, 28), 27000],
            [gd(2016, 12, 29), 75210],
            [gd(2016, 12, 30), 37220]
        ];

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
        var dataset = [{
            // label: "觸擊次數",
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
            colors: ["rgb(75, 103, 213)"]
        };


        var plotObj = $.plot($("#views-flot-line-chart"), dataset,
            options);
    }
});

//Engagement Flot Line Chart
$(document).ready(function() {


    var offset = 0;
    plot();

    function plot() {
        var data1 = [
            [gd(2016, 12, 21), 86680],
            [gd(2016, 12, 22), 80670],
            [gd(2016, 12, 23), 80700],
            [gd(2016, 12, 24), 93800],
            [gd(2016, 12, 25), 66900],
            [gd(2016, 12, 26), 76930],
            [gd(2016, 12, 27), 66980],
            [gd(2016, 12, 28), 87000],
            [gd(2016, 12, 29), 77210],
            [gd(2016, 12, 30), 67220]
        ];

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
        var dataset = [{
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
            colors: ["rgb(75, 103, 213)"]
        };

        var plotObj = $.plot($("#engagement-flot-line-chart"),
            dataset, options);
    }
});

//Action Flot Line Chart
$(document).ready(function() {



    var offset = 0;
    plot();

    function plot() {
        var data1 = [
            [gd(2016, 12, 21), 868],
            [gd(2016, 12, 22), 806],
            [gd(2016, 12, 23), 707],
            [gd(2016, 12, 24), 1180],
            [gd(2016, 12, 25), 1290],
            [gd(2016, 12, 26), 1193],
            [gd(2016, 12, 27), 690],
            [gd(2016, 12, 28), 700],
            [gd(2016, 12, 29), 610],
            [gd(2016, 12, 30), 620]
        ];

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
        var dataset = [{
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
            colors: ["rgb(75, 103, 213)"]
        };

        var plotObj = $.plot($("#action-flot-line-chart"),
            dataset, options);
    }


});

//Video Flot Line Chart
$(document).ready(function() {


    var offset = 0;
    plot();

    function plot() {
        var data1 = [
            [gd(2016, 12, 21), 866],
            [gd(2016, 12, 22), 806],
            [gd(2016, 12, 23), 807],
            [gd(2016, 12, 24), 1938],
            [gd(2016, 12, 25), 1669],
            [gd(2016, 12, 26), 1769],
            [gd(2016, 12, 27), 669],
            [gd(2016, 12, 28), 870],
            [gd(2016, 12, 29), 772],
            [gd(2016, 12, 30), 720]
        ];

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }
        var dataset = [{
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
            colors: ["rgb(75, 103, 213)"]
        };

        var plotObj = $.plot($("#video-flot-line-chart"),
            dataset, options);
    }



});
