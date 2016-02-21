bigApp
    .controller('RegisterController', ['$scope', function($scope){

    }])
    .controller('OverviewController', ['$scope', function($scope){

    }])
    .controller('LoginController', ['$scope', '$firebaseAuth', 'FIREBASE_URL',
        function($scope, $firebaseAuth, FIREBASE_URL){
            var ref = new Firebase(FIREBASE_URL);
            var auth = $firebaseAuth(ref);

            $scope.login = function(){
                $scope.message = "Welcome " + $scope.user.email;
            }; //login

            $scope.register = function() {
                auth.$createUser({
                    email: $scope.user.email,
                    password: $scope.user.password
                }).then(function(regUser){
                    $scope.message = "Hi " + $scope.user.firstName + ", thanks for registering!";
                }).catch(function(error){
                    $scope.message = error.message;
                });
            }; //register
    }]); //controller