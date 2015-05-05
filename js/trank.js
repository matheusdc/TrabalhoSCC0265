var trank;

trank = angular.module("trankApp", ["ngRoute", "lugaresApi"]);

trank.config(function ($routeProvider) {
    $routeProvider.when("/", {
        controller: "InicioController",
        templateUrl: "inicio.html"
    });
    
    $routeProvider.when("/entrar", {
        templateUrl: "entrar.html"
    
    });
    
    $routeProvider.when("/cadastro", {
        controller: "CadastroController",
        templateUrl: "cadastro.html"
    });    

    $routeProvider.when("/categorias/:catId", {
        controller: "LugaresController",
        templateUrl: "listaLugares.html",
        resolve:{
            categoria : function(lugaresApi, $route) {
                var categoria = $route.current.params.catId;
                return lugaresApi.listarCategoria(categoria);
            },
            lugares : function(lugaresApi, $route) {
                var categoria = $route.current.params.catId;
                return lugaresApi.listarLugares(categoria);
            },
        }
    }); 
    
    $routeProvider.otherwise({
        template: "<h1>404 Not Found</h1>"
    });
});
