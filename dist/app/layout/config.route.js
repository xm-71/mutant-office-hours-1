(function(){
    'use strict'

    angular.module('mutantApp.template')
        .config(templateRouteConfigFunction);

    templateRouteConfigFunction.$inject = ['$stateProvider'];
    function templateRouteConfigFunction($stateProvider){
        $stateProvider

        .state('template',{
            parent: 'navbar',
            url: '/template',
            templateUrl: 'template',
            controller: 'TemplateController'
            controllerAs: 'vm',
        });
    }
})();
