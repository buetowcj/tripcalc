$(document).ready(
    function () {
        // add event listener (clicks, etc.)
        $("#tripButton").click(calcTrip);
        $("#alertButton").click(showPopup);
        // any other functions
        function calcTrip()
        {
            var tripMiles = $("#tripLengthMiles").val();
            tripMiles = parseFloat(tripMiles);

            var mpg = $("#mpg").val();
            tripMiles = parseFloat(mpg);

            var avgSpeed = $("#averageSpeed").val();

            var costPerGallon = parseFloat($("#dollarsPerGallon").val());

            var totalTime = tripMiles / avgSpeed;

            var totalGallons = tripMiles / mpg;

            var totalGasCost = totalGallons * costPerGallon;

            $("#hoursOutput").text(totalTime.toFixed(1));

            $("#costOutput").text(totalGasCost.toFixed(2));

            $(".output").show();
        }
        function showPopup()
        {
            alert("Hello");
        }

    }
);