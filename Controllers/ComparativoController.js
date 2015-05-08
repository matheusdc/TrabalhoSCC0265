var trank = angular.module("trankApp");

trank.controller("ComparativoController", function ($rootScope, $scope, lugaresApi) {

    $scope.$on("$viewContentLoaded", function () {
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
        }]
        };

        // Get context with jQuery - using jQuery's .get() method.
        var ctx = $("#myChart").get(0).getContext("2d");

        // This will get the first returned node in the jQuery collection.
        var myNewChart = new Chart(ctx);
        myNewChart.Bar(data, {
            responsive: true
        });
        console.log(myNewChart);

        $('#button').click(function () {

            var data = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.5)",
                    strokeColor: "rgba(151,187,205,0.8)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    highlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
        }]
            };
            myNewChart.Bar(data);

        });
    });
});