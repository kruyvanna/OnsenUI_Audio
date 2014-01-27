function Page1Controller($scope){
    $scope.play = function(){
        var audio = new Audio();
    	audio.src = 'http://storage-new2.newjamendo.com/tracks/1080401_96.mp3';
        audio.play();
    }   
}