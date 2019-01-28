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

        it('Definindo NAME', function(){
            let defined = true;
        
            for(let i in allFeeds){
                /*Verificando se a URL está ou não definida*/
                /*Verificando se eles possuem algo ou não */
                if(allFeeds[i].name === expect(allFeeds).not.toBe(null) || allFeeds[i].name === expect(allFeeds).not.toBe(undefined) || allFeeds[i].name === expect(allFeeds).not.toBe('')){
                    defined = false;
                }
            }
            expect(defined).toBe(true);

        });

        it('definindo URL',function(){
            var nameDefined = true;
            for(let i in allFeeds){
                /*Verificando se a URL está ou não definida*/
                /*espera que apos a verificação todos estejam definidos*/
                if(allFeeds[i].url === expect(allFeeds).toBeDefined() || allFeeds[i].url === expect(allFeeds).toBeDefined() || allFeeds[i].url === expect(allFeeds).toBeDefined()){
                    nameDefined = false;
                }
            }
            expect(nameDefined).toBe(true);
        });
    });


    /* verificando o id body 
     * está verificando se tem outro body
     */
    describe('O Meu menu', function(){
        let menu = document.querySelector('body').classList;

        it('default', function(){
            expect(menu).toContain('menu-hidden');

        }); 
        /* Verificando o click no menu*/
        /*Verificando se o abre e fecha o menu*/
            it('interacao', function(){
            $('#menu-buttom').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
            $('#menu-buttom').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(false);
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
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
}());
