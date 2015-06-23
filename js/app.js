App = Ember.Application.create();

App.Router.map(function() {
	this.route('artistas');
	this.route('musicas');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {
    	colors: ['red', 'yellow', 'blue','black']
    };
  }
});

App.ArtistasRoute = Ember.Route.extend({
	model: function(){
		return [
			{nome: 'Gilberto Gil', genero: 'MPB', qtd_musicas: 39},
			{nome: 'MV Bill', genero: 'Rap', qtd_musicas: 26},
			{nome: 'Jorge Aragão', genero: 'Samba', qtd_musicas: 23},
		];
	}
});

App.MusicasRoute = Ember.Route.extend({
	model: function(){
		return [
			{nome:'Soldado do Morro', artista:'MV Bill', plays: 2091},
			{nome:'Conselho', artista:'Jorge Aragão', plays: 1093},
			{nome:'Andar com Fé', artista:'Gilberto Gil', plays: 393},
			{nome:'Saudade', artista:'Jorge Aragão', plays: 348},
		];
	}
});

App.ArtistasController = Ember.Controller.extend({
	actions: {
		remover: function(obj){
			this.model.removeObject(obj);
		}
	}
});

App.MusicasController = Ember.Controller.extend({
	actions: {
		remover: function(obj){
			this.model.removeObject(obj);
		}
	}
});