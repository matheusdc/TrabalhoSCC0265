    var trank = angular.module("trankApp");

    trank.controller("CadastrarLugarController", function ($rootScope, $scope, $rootScope, lugaresApi, $location) {

        $rootScope.title = "Novo Lugar";
        $rootScope.meta_desc = "Cadastro de um Novo Lugar!";

        $rootScope.trocaBkg();

        $scope.imgId = 1;
        $scope.camposId = 1;

        $scope.usuario = $rootScope.usuario;


        if (!$scope.usuario) {
            $location.search('next', $location.path());
            $location.path('/entrar');
        }
        //}

        $scope.categorias = {
            america: false,
            europa: false,
            asia: false
        };
        $scope.allCat = lugaresApi.listarCategorias();
        $scope.imagens = [{
            'id': 0,
            'url': '',
            'base64': ''
        }];
        $scope.camposExtras = [{
            'id': 0,
            'nome': '',
            'valor': ''
        }];

        $rootScope.$watch('usuario', function (u) {
            $scope.usuario = u;
        });

        $scope.campoVazio = function (field) {
            return (field.$error.required && field.$dirty);
        }

        $scope.pattern = function (field) {
            return (field.$error.pattern && field.$dirty);
        }

        $scope.cadastrar = function (nome, autor, descricao, categorias) {

            var valid = $scope.cadLugar.$valid;

            if (valid) {

                var cats = [];
                var keys = Object.keys(categorias);

                for (i = 0; i < keys.length; i++) {
                    if (categorias[keys[i]]) {
                        cats.push(keys[i]);
                    }
                }

                var img;
                var imagens = [];
                for (var i = 0; i < $scope.imagens.length; i++) {
                    if ($scope.imagens[i].base64 !== "") {
                        imagens.push($scope.imagens[i].base64);
                    }
                }

                var cmp;
                var campos = [];

                for (var i = 0; i < $scope.camposExtras.length; i++) {
                    if ($scope.camposExtras[i].nome !== "")
                        campos.push({
                            'nome': $scope.camposExtras[i].nome,
                            'valor': $scope.camposExtras[i].valor
                        });
                }

                var id = lugaresApi.adicionarLugar(nome, autor, descricao, imagens, cats, campos);

                $location.path("/lugares/" + id);


            } else {
                for (var i = 0; i < $scope.cadLugar.$error.required.length; i++) {
                    $scope.cadLugar.$error.required[i].$setDirty();
                }
            }

        }

        $scope.algumSelecionado = function (obj) {
            var cadLugar = $scope.cadLugar;

            var dirty = false;

            // Verifica se todos os inputs de categoria são "sujos"
            for (var i = 0; i < $scope.allCat.length; i++) {
                dirty = dirty || cadLugar[$scope.allCat[i].id].$dirty;
            }

            // Se não são sujos, retorna true (para não mostrar o 'erro')
            if (!dirty) {
                return true;

                //Senão, retorna se existe algum selecionado
            } else {
                return Object.keys(obj).some(function (key) {
                    return obj[key];
                });
            }
        }

        $scope.removeImg = function (id) {
            if ($scope.imagens.length > 1) {
                for (var i = 0; i < $scope.imagens.length; i++) {
                    if ($scope.imagens[i].id === id) {
                        $scope.imagens.splice(i, 1);
                        break;
                    }
                }
            }
        }

        $scope.imagensPodeDeletar = function () {
            return ($scope.imagens.length > 1);
        }

        $scope.addImg = function () {
            $scope.imagens.push({
                'id': $scope.imgId,
                'url': '',
                'base64': ''
            });
            $scope.imgId++;
        }

        $scope.removeCampo = function (id) {
            if ($scope.camposExtras.length > 1) {
                for (var i = 0; i < $scope.camposExtras.length; i++) {
                    if ($scope.camposExtras[i].id === id) {
                        $scope.camposExtras.splice(i, 1);
                        break;
                    }
                }
            }
        }

        $scope.camposPodeDeletar = function () {
            return ($scope.camposExtras.length > 1);
        }

        $scope.addCampo = function () {
            $scope.camposExtras.push({
                'id': $scope.camposId,
                'valor': ''
            });
            $scope.camposId++;
        }

    });