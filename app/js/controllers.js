'use strict';

/* Controllers */


function JvmCtrl($scope, Dispatcher) {

    $scope.load = function() {
        var op = new dmr.ModelNode();
        op.get("operation").set("read-attribute");
        op.get("address").setEmptyList();
        op.get("name").set("release-version");

        Dispatcher.execute(op, function(err, results){

            if(err!=null)
            {
                alert("Operation failed");
            }
            else
            {
                alert(results);
            }
        });

    }
}


function MyCtrl1() {}
MyCtrl1.$inject = [];

function MyCtrl2() {
}
MyCtrl2.$inject = [];
