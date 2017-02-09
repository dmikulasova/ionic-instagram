angular.module('app.controllers',['ionic', 'ngCordova'])

.controller('homeCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('searchCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

}])

.controller('cameraCtrl', function($scope, $ionicPlatform, $cordovaCamera){
  console.log("camera");
    $scope.takePhoto = function(){
        var options =  {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE
        };

        $ionicPlatform.ready(function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.picture = imageData;
            }, function(err) {
                  // error
            });
        });
    }


})

.controller('profileCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
