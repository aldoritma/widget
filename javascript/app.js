var app = angular.module('payment', ['ngAnimate', 'ui.router', 'mm.foundation', 'ngLoadingSpinner']);
var formatMoney = function (n, c, d, t) {

    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
app.filter('rupiah', ['$filter', '$locale',
    function (filter, locale) {
        var currencyFilter = filter('currency');
        var formats = locale.NUMBER_FORMATS;
        return function (amount, currencySymbol) {
            return 'IDR ' + formatMoney(amount, 2, ',', '.');
        };
    }]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('payment', {
            url: '/payment',
            templateUrl: 'views/payment.html',

        })

    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
    })
        .state('payment.method', {
            url: '/method',
            templateUrl: 'views/payment-method.html'

        })
        .state('payment.profile', {
            url: '/profile',
            templateUrl: 'views/form-profile.html',
            controller: 'formController'
        })
        .state('payment.thanks', {
            url: '/payment',
            templateUrl: 'views/thanks.html'
        });

    $urlRouterProvider.otherwise('/payment/method');
});


var formController = function ($scope, $http) {
    // Initialize the model variables
    var pid = localStorage.getItem('payment_method_id');
    $scope.paymentform='views/pay'+pid+'.html';
    
};

var Dropdown = function ($scope) {

};

function findArray(a, key, val) {
    for (var n in a) {
        var i = a[n];
        if (i[key] == val) {

            return i;
        }
    }
}

app.controller('bookingController', function ($scope, $http) {
    var account_organization = localStorage.getItem('account_organization');
    var event_name = localStorage.getItem('event_name');
    var eventId = localStorage.getItem('eventId');
    var mydata = false;
    var token = localStorage.getItem('token');
    $scope.setPayment = function (d) {
        $scope.discount = mydata.discount;
        var payment = findArray(mydata.paymentlist, 'payment_method_id', d);
        localStorage.setItem('payment_method_id', d);
        $scope.total = payment.totalbayar;
        $scope.payment_fee = payment.payment_fee;
        localStorage.setItem('totalbayar', totalbayar);
    }

    $http.get('http://api.loket.id:4000/api/1.0/get_booking/' + eventId + '/' + token)
        .success(function (data, status, headers, config) {
            mydata = data;
            $scope.booking = data;
            $scope.setPayment(5);
        })

    $scope.oneAtATime = true;

});

var mapsController = function () {

};


app.controller('legendController', function ($scope, $modal, $log) {

    $scope.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'views/partials/modal.html',
            controller: 'legendController',
        });

    };
});