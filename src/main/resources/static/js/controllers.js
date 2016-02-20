bigApp
    .controller('RegisterController', ['$scope', function($scope){
        $scope.message = "Wanna register something?";
    }])
    .controller('OverviewController', ['$scope', function($scope){
        $scope.message = "Wanna see something?";
    }])
    .controller('LoginController', ['$scope', function($scope){
            $scope.message = "PRISIJUNKITE";
            $scope.login = function(){
                $scope.message2 = "Welcome " + $scope.user.email;
            };
            $scope.register = function() {
                $scope.message3 = "Welcome " + $scope.user.firstName;
            };
    }]);