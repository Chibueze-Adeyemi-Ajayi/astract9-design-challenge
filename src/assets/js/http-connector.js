/*
* This code snippet enables http communication with backend 
*/

import $ from "jquery";

var settings = {
    "url": "{{staging}}/elections/candidate-total-votes?type=president",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });