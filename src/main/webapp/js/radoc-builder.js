$(function() {
    loadRelatos('teste.json');
});

function loadRelatos(json) {
        $.getJSON(json, function (radoc) {
            var relatorio = $('#relatorio');
            relatorio.append(
                $(document.createElement('h1')).text(radoc.anoBase)
            );
            $.each(radoc.relatos, function (key, value) {
                relatorio.append(
                    $(document.createElement('div')).addClass('relato').attr('id', 'relato-'+key)
                );
                var relato = $('#relato-'+key);
                relato.append(
                    $(document.createElement('div')).addClass('cabecalho').append(
                        $(document.createElement('h3')).text(value.classe)
                    ),
                    $(document.createElement('div')).addClass('conteudo')
                );
                var conteudo = relato.find('.conteudo');
                $.each(value.atributos, function (key, value) {
                    conteudo.append(
                        $(document.createElement('a')).text(key +': '+ value),
                        $(document.createElement('br'))
                    );
                });
            });
        });
}