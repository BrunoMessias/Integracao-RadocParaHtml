/*
 * Author: Tiago Damascena, Bruno Messias
 * Date: 29/11/2016
 */

/*
* Exemplo de utilizaçao do método buildHTMLRadoc
*/
$(function() {
    //Carrega um exemplo de radoc e constroi o HTML dele
    $.getJSON('radoc-example.json', function (radoc) {
        buildHTMLRadoc(radoc);
    });
});