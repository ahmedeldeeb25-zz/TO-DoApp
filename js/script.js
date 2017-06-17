var appx = angular.module('myapp',[]);

appx.controller('app',function($scope){
    
    $scope.tasks=[];
    $scope.edit="true";
    ////////////////////////////////////
    var taskdata = localStorage['taskslist'];
    if(taskdata !== undefined)
        $scope.tasks = JSON.parse(taskdata);
    ///////////////////////////////////////////////
    $scope.searchEnter = function(){
    if(event.which ==13  && $scope.task !='')
        $scope.doTask();
    };
    
    $scope.doTask =function(){
        $scope.tasks.push({'taskMessage':$scope.task,'status':false});
        console.log($scope.tasks);
        $scope.task='';
        localStorage['taskslist'] = JSON.stringify($scope.tasks);
        console.log(localStorage);
    };
    
    $scope.contentEdit = function(x){
        
        if($scope.edit == 'false')
            $scope.edit = 'true';
        else
            $scope.edit ='false';
        ////////////////////////////////////////////
        for(i=0;i<$scope.tasks.length;i++)
            if($scope.tasks[i].taskMessage == x){
                $scope.tasks[i].taskMessage = event.target.innerHTML;       
            }
        
         localStorage['taskslist'] = JSON.stringify($scope.tasks);
    };
    
    $scope.update= function(){
        $scope.tasks[event.target.value].status=  $scope.tasks[event.target.value].status;
         localStorage['taskslist'] = JSON.stringify($scope.tasks);
    };
    
    $scope.again = function(msg){
         if(event.which ==13  && msg !='')
             $scope.contentEdit(msg);
        
    }
});