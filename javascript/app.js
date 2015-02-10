var app = angular.module('payment',['ngAnimate', 'ui.router','mm.foundation']);


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)


        .state('payment', {
            url: '/payment',
            templateUrl: 'views/payment.html',
            controller: 'formController'
        })

        .state('home',{
          url: '/home',
          templateUrl: 'views/home.html'
        })
        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('payment.method', {
            url: '/method',
            templateUrl: 'views/payment-method.html'

        })

        // url will be /form/interests
        .state('payment.profile', {
            url: '/profile',
            templateUrl: 'views/form-profile.html',
            controller: 'formController'
        })

        // url will be /form/payment
        .state('payment.thanks', {
            url: '/payment',
            templateUrl: 'views/thanks.html'
        });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/home');
});


// payment method controller
/*
var paymentController = function ($scope, $http){

  $http.get('views/data/widget.json')
      .success(function(data) {
        $scope.datas = data;
      })
      .error(function(data,status,headers,config)
      { console.log('error render ajax json'); }
    );
};
*/

var formController = function ($scope)
{
  // Initialize the model variables

  $scope.done = function (event){
     $(event.target).addClass('done');
  };

  // function to process the form
  $scope.processForm = function() {
      alert('awesome!');

  };

};





var Dropdown = function ($scope){
  $scope.items = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
  $scope.linkItems = {
    "Google": "http://google.com",
    "AltaVista": "http://altavista.com"
  };
};


app.controller('paymentController', function($scope) {
  var json = {
"widget":
  {"http_response":[
      { "is_ok": true,
        "is_success": true,
        "is_redirection": false,
        "is_redirect": false,
        "is_forbidden": false,
        "is_not_found": false,
        "is_client_error": false,
        "is_server_error": false }
  ]},
  "data":[
  { "payment_id": "1444",
    "payment_method_id": "5",
    "payment_method_info": null,
    "payment_method_info2": "9",
    "payment_method_info3": null,
    "payment_status": "1",
    "payment_method_key": "ONLINE",
    "payment_method_value": "Veritrans"
  },
  { "payment_id": "1445",
    "payment_method_id": "4",
    "payment_method_info": "PT. Global Loket Sejahtera\r\nBANK : BCA (Branch Mall Pondok Indah)\r\nAccount : 731.033.7344 \r\n",
    "payment_method_info2": null,
    "payment_method_info3": null,
    "payment_status": "0",
    "payment_method_key": "OFFLINE",
    "payment_method_value": "Bank Transfer"
    },
    { "payment_id": "1446",
      "payment_method_id": "9",
      "payment_method_info": "",
      "payment_method_info2": null,
      "payment_method_info3": null,
      "payment_status": "0",
      "payment_method_key": "ONLINE",
      "payment_method_value": "VA Permata"
     }
    ],
      "inquiry":{
        "status_message":"success"
      }
};

  $scope.ocw = json;

  //----------------
  //    Accordion
  //----------------


  $scope.oneAtATime = true;

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

});

var mapsController = function (){

};


app.controller('legendController', function ($scope, $modal, $log) {

  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'views/partials/modal.html',
      controller: 'legendController',
    });

  };
});
