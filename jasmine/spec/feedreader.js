/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: escrevendo um teste 
         * Criando um objeto e definindo um nome
         * verificando se está vazio 
         */

        it('Definindo NAME e URL', function(){
            var defined = true;
              /*
                * Fazendo a checagem da variavel para que ela esteja de acordo
                * Vai percorrer tanto URL como NAME 
               */
            for(let feed of allFeeds){
                if(expect(feed).not.toBe(null) || expect(feed).not.toBe('') || expect(feed).toBeDefined()){
                defined = false;
                }
            }
            expect(defined).toBe(true);
        });
    });


    /* verificando o id body 
     * está verificando se tem outro body
     */
    describe('O Meu menu', function(){
        it('default', function(){
            let menu = document.querySelector('body').classList;
            expect(menu).toContain('menu-hidden');

        }); 
        /*Verificando se o abre e fecha o menu*/
            it('interacao', function(){
            $('.menu-icon-link').click();
            //Verificando o 1  click
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').click();
            //Verifica se oculta ao 2 click
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });
    });


    /* Escrevendo o menu de entrada */
    describe('entrada', function(){
        beforeEach(function(done){
            loadFeed(0,done);
        }) ;
        it('aqui deve carregar o feed',function(){
        expect($('.feed .entry').length).not.toBe(0);
    });
});
/* Escrevendo um suite com o feed sobre novas */
describe('Novo feed de seleção', function(){
    var meuFeed1, meuFeed2;
          /**
       * está averiguando se é o mesmo feed 
       * salvando dados nas variaveis
       */
    beforeEach(function(done){
        loadFeed(0,function(){
            meuFeed1 = $('.feed .entry').html();
        loadFeed(1,function(){
            meuFeed2 = $('.feed .entry').html();
            done();
        });
        });
    });
    it('Selecionando as noticias', function(){
        expect(meuFeed1).not.toBe(meuFeed2);
    });
});


}());
