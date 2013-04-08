'use strict';

/* Controllers */


function JvmCtrl($scope, Dispatcher) {

    $scope.heap = new dmr.ModelNode();

    // /host=master/core-service=platform-mbean/type=memory

    $scope.load = function() {
        var op = new dmr.ModelNode();
        op.get("operation").set("read-resource");
        op.get("address").addProp("host", "master");
        op.get("address").addProp("core-service", "platform-mbean");
        op.get("address").addProp("type", "memory");
        op.get("include-runtime").setBoolean(true);

        Dispatcher.execute(op, function(err, results){

            if(err!=null)
            {
                alert("Operation failed.");
            }
            else
            {
                //alert(results);
                console.log(results.toString());

                var response = results.get("result");
                $scope.heap = response.get("heap-memory-usage");
                $scope.$apply();
            }
        });

    }
}
