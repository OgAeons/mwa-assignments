var app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
    $scope.users = [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
        { name: 'Mike Johnson', email: 'mike@example.com' }
    ];

    $scope.title = "User List";

    $scope.addUser = function() {
        if ($scope.newUser && $scope.newUser.name && $scope.newUser.email) {
            $scope.users.push({
                name: $scope.newUser.name,
                email: $scope.newUser.email
            });
            $scope.newUser = {};
        }
    };
});
