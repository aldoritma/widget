var app = angular.module('formApp',['ngAnimate', 'ui.router','mm.foundation']);


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('payment', {
            url: '/payment',
            templateUrl: 'views/payment.html',
            controller: 'formController'
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
            templateUrl: 'views/form-profile.html'
        })

        // url will be /form/payment
        .state('payment.thanks', {
            url: '/payment',
            templateUrl: 'views/thanks.html'
        });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/payment/method');
});



var formController = function ($scope)
{
  // Initialize the model variables



  // function to process the form
  $scope.processForm = function() {
      alert('awesome!');

  };

};

//----------------
//    Accordion
//----------------

var Accordion = function ($scope)
{
  $scope.oneAtATime = true;

   $scope.items = ['Item 1', 'Item 2', 'Item 3'];

   $scope.addItem = function() {
     var newItemNo = $scope.items.length + 1;
     $scope.items.push('Item ' + newItemNo);
   };
};

app.directive('Step',function($parse){
  return{

  }
});


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


// our controller for the form
