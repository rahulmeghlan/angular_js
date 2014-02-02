/**
 * Created by Rahul on 2/1/14.
 */
myModule.controller("startUpController", function ($scope) {
    $scope.funding = {startFunding: 0};
    var computeNeeded = function () {
        $scope.funding.needed = $scope.funding.startFunding * 10;
    };

    $scope.$watch('funding.startFunding', computeNeeded);
});