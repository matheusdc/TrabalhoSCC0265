var api = angular.module("lugaresApi", []);

api.factory("lugaresApi", function() {

	var categorias = [
			{	"nome" : "América",
				"id" : "america"
			},
			{	"nome" : "Ásia",
				"id" : "asia"
			},
			{	"nome" : "Europa",
				"id" : "europa"
			}
	];

	var lugares = [

		{ 	"nome" : "Vale do Silicio",
			"autor" : "Paulo",
			"descricao" : "Ótimo lugar para os fãs de tecnologia. Os passeios incluem visitas a gigantes da tecnologia como Apple, Google, Twitter, Facebook e muito mais.",
			"imagens" : ["media/lugares/1.jpg"],
			"categorias" : ["america"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 1
		},
		
		{ 	"nome" : "Nova York",
			"autor" : "Matheus",
			"descricao" : "Cidade com ótimos roteiros gastronômicos.",
			"imagens" : ["media/lugares/2.jpg"],
			"categorias" : ["america"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 2
		},

		{ 	"nome" : "Machu Picchu",
			"autor" : "Paulo",
			"descricao" : "Cidadela da civilização Inca localizada no topo da cordilheira dos Andes.",
			"imagens" : ["media/lugares/3.jpg"],
			"categorias" : ["america"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 3
		},

		{ 	"nome" : "Rio de Janeiro",
			"autor" : "Matheus",
			"descricao" : "Cidade maravilhosa, com diversas e belissimas praias paradisiacas. Possui atrações como o Cristo Redentor (considerado uma das maravilhas modernas atuais) e o Pão de Açucar.",
			"imagens" : ["media/lugares/4.jpg"],
			"categorias" : ["america"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 4
		},


		{ 	"nome" : "Muralha da China",
			"autor" : "Paulo",
			"descricao" : "Grande muralha construída durante o império chinês, considerada uma das maravilhas modernas atuais.",
			"imagens" : ["media/lugares/5.jpg"],
			"categorias" : ["asia"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 5
		},
		
		{ 	"nome" : "Tokyo",
			"autor" : "Matheus",
			"descricao" : "Cidade para os fãs da cultura nipônica.",
			"imagens" : ["media/lugares/6.jpg"],
			"categorias" : ["asia"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 6
		},

		{ 	"nome" : "Seoul",
			"autor" : "Paulo",
			"descricao" : "Capital da Coréia do Sul.",
			"imagens" : ["media/lugares/7.jpg"],
			"categorias" : ["asia"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 7
		},

		{ 	"nome" : "Hong Kong",
			"autor" : "Matheus",
			"descricao" : "Ótima cidade turística.",
			"imagens" : ["media/lugares/8.jpg"],
			"categorias" : ["asia"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 8
		},




		{ 	"nome" : "Stonehenge",
			"autor" : "Paulo",
			"descricao" : "Monumento pré-histórico com propósito desconhecido.",
			"imagens" : ["media/lugares/9.jpg"],
			"categorias" : ["europa"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 9
		},
		
		{ 	"nome" : "Castelo de Versailles",
			"autor" : "Matheus",
			"descricao" : "Castelo francês que atualmente foi transformado em um museu. Conta com diversos itens da época, tais como objetos da realeza, itens históricos e o ambiente do castelo que permanece inalterado.",
			"imagens" : ["media/lugares/10.jpg"],
			"categorias" : ["europa"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 10
		},

		{ 	"nome" : "Coliseu",
			"autor" : "Paulo",
			"descricao" : "Anfiteatro da época do império romando, utilizado na época para as batalhas dos gladiadores.",
			"imagens" : ["media/lugares/11.jpg"],
			"categorias" : ["europa"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 11
		},

		{ 	"nome" : "Partenon",
			"autor" : "Matheus",
			"descricao" : "Templo dedicado a deusa grega Atena.",
			"imagens" : ["media/lugares/12.jpg"],
			"categorias" : ["europa"],
			"componentes" : [],
			"data" : new Date(),
			"id" : 12
		}

	];

	return {
		listarCategorias: function() {
			return categorias;

		},
		listarLugares: function(categoria) {
			//Filtra lugares de acordo com a categoria
			var lugares_filtrados = lugares.filter(function(lugar){
				return lugar.categorias.some(function(cat){
					return cat === categoria;
				});
			});

			return lugares_filtrados;

		},
        listaTodosLugares: function(){
            return lugares;
        },
		listarLugar: function(lugarId){
			//Filtra lugares de acordo com a categoria
			var lugares_filtrados = lugares.filter(function(lugar){
				return lugar.id === lugarId;
			});

			return lugares_filtrados;
		},

		listarCategoria: function(catId){
			//Filtra lugares de acordo com o id da categoria
			var categorias_filtradas = categorias.filter(function(categoria){
				return categoria.id === catId;
			});

			return categorias_filtradas;

		},

		listShotComments: function(shotId){
			var n_url = url + "/shots/" + shotId + "/comments?callback=JSON_CALLBACK";
			return $http.jsonp(n_url).then(function(response) {
				return response.data.comments;
			});
		},
	}
});
