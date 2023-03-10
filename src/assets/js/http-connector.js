/*
* This code snippet enables http communication with backend 
*/

import $ from "jquery";

  function FetchHTTPData (param, callback) {

    var settings = {
        "url": `https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=${param}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
        "Accept": "application/json"
        },
    };
    
    $.ajax(settings).done(function (response) {
        callback(response);
    });

  }

  export default FetchHTTPData;