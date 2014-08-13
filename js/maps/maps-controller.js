angular.module('examplesApp').controller('MapsController', ['$scope', 'AddressGeocoder', function ($scope, AddressGeocoder) {

    // Default address
    $scope.address = "Av Olascoaga 1500, Neuquen, Argentina";

    // Default map code
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 17
    };

    $scope.findAddress = function () {

        AddressGeocoder.getLocation($scope.address).then(function (result) {

            if (result.success) {

                $scope.map.center = result.location;

            }

        });
    };

}]);