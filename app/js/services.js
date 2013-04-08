'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
        .service("Dispatcher", function () {
            this.execute = function(operation, callback){

                var endpoint = "http://as7-preview.dyndns.org:9990/management";

                var http = new XMLHttpRequest();
                http.withCredentials = true;
                http.open("POST", endpoint, true);

                // async response handler
                http.onreadystatechange =function()
                {
                    if (http.readyState==4)
                    {
                        if(http.status==200)
                        {
                            // decode response
                            var response = dmr.ModelNode.fromBase64(http.responseText);
                            callback(null, response);
                        }
                        else
                        {
                            callback(http.status, http.responseText);
                        }

                    }
                }

                // content type headers for DMR API
                http.setRequestHeader("Content-type","application/dmr-encoded");
                http.setRequestHeader("Accept","application/dmr-encoded");

                // send as base64 encoded
                http.send(operation.toBase64String());
            }

        })
        .value('version', '0.1');

