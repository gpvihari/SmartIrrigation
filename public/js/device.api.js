/*
Developed by: Kranthi Kiran
Date: 30-May-2016
Description: This file provides apis to access and post the data to smiley-plant application
*/
//Global Variables
var apis = {}; //to store all apis
var endpoint = '';
var rootUrl = 'https://smiley-plant-svs.run.aws-usw02-pr.ice.predix.io';

apis.smileyplant = {

    getDeviceState: function(deviceId, successCallback, errorCallback){
        endpoint = '';

    },

    postDeviceStart: function(successCallback, errorCallback){
        'use strict';
        endpoint = rootUrl + '/startsignal';
        this.post(endpoint, successCallback, errorCallback);
    },

    postDeviceStop: function(successCallback, errorCallback){
        'use strict';
        endpoint = rootUrl + '/stopsignal';
        this.post(endpoint, successCallback, errorCallback);
    },

    /**
     * Common fundtion to make an Ajax request against to smiley-plant API end points
     * @param {string} resource The name of the resource to retrieve from the response.
     * @param {string} endpoint The URL of the endpoint.
     * @param {function(resource)} successCallback The function to call if the request is successful.
     * @param {function(error)} errorCallback The function to call if there was an error.
     * @return {void}
     */
    get: function(endpoint, successCallback, errorCallback) {
        'use strict';
        $.get(endpoint)
            .done(function (data, status, xhr) {
                if (xhr.status == 200) {
                    successCallback(data);
                } else {
                    errorCallback(xhr);
                }
            })
            .fail(function () {
                errorCallback('Can not connect to smiley-plant app. Please reload the page.');
            });
    },

    post: function(endpoint, successCallback, errorCallback){
        'use strict';
        $.post(endpoint)
            .done(function(data, status, xhr){
                if (xhr.status == 200) {
                    successCallback(data);
                } else {
                    errorCallback(xhr);
                }
            })
            .fail(function(){
                errorCallback('Can not connect to smiley-plant app. Please reload the page.');
            });
    }
};