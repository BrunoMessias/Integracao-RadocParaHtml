/*
* Author: Tiago Damascena, Bruno Messias
* Date: 08/11/2016
*/

/*
* Esse método é responsável por converter um Radoc em formato JSON para o formato HTML
*
* Parametros: radoc - o JSON de um Radoc
*/
function buildHTMLRadoc(radoc) {

    $('#ano-base').text(radoc.anoBase);

    var relatorio = $('#relatorio');

    //Monta a estrutura HTML de cada relato do Radoc
    $.each(radoc.relatos, function (key, value) {
        var repetido = false;
        var relato;

        //Pesquisa por relatos que sejam da mesma classe
        $('[id^="relato-"]').each(function () {
            if(value.classe === $(this).find('.cabecalho-relato a').text()) {
                relato = $(this);
                repetido = true;
                return false;
            }
        });

        //Cria o cabeçalho do relato caso nao haja outro com a mesma classe
        if(!repetido) {
            //O relato com classe Dados do Docente deve ser o primeiro a ser exibido
            if(value.classe.toLowerCase() === 'dados do docente') {
                relatorio.prepend(
                    $(document.createElement('div')).addClass('row relato').attr('id', 'relato-'+key)
                );
            } else {
                relatorio.append(
                    $(document.createElement('div')).addClass('row relato').attr('id', 'relato-'+key)
                );
            }

            relato = $('#relato-'+key);
            relato.append(
                $(document.createElement('div')).addClass('cabecalho-relato').append(
                    $(document.createElement('a')).text(value.classe)
                )
            );
        }

        relato.append(
            $(document.createElement('table')).addClass('conteudo-relato').attr('id', 'conteudo-'+key)
        );

        var conteudo = relato.find('#conteudo-'+key);
        //Para cada atributo do relato monta uma linha na tabela que contem seu nome e respectivo valor
        $.each(value.atributos, function (key, value) {
            conteudo.append(
                $(document.createElement('tr')).addClass('atributo').append(
                    $(document.createElement('td')).addClass('atributo-key').text(key+':'),
                    $(document.createElement('td')).addClass('atributo-value').text(value)
                )
            );
        });
    });
}