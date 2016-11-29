$(function() {
    loadRelatos('teste.json');
});

function loadRelatos(json) {
        $.getJSON(json, function (radoc) {
            $('#ano-base').text(radoc.anoBase);

            var relatorio = $('#relatorio');

            $.each(radoc.relatos, function (key, value) {
                var repetido = false;
                var relato;
                $('[id^="relato-"]').each(function () {
                    if(value.classe === $(this).find('.cabecalho-relato a').text()) {
                        relato = $(this);
                        repetido = true;
                        return false;
                    }
                });

                if(!repetido) {
                    relatorio.append(
                        $(document.createElement('div')).addClass('row relato').attr('id', 'relato-'+key)
                    );
                    relato = $('#relato-'+key);
                    relato.append(
                        $(document.createElement('div')).addClass('cabecalho-relato').append(
                            $(document.createElement('a')).text(value.classe)
                        )
                    );
                }

                relato.append(
                    $(document.createElement('div')).addClass('conteudo-relato').attr('id', 'conteudo-'+key)
                );

                var conteudo = relato.find('#conteudo-'+key);
                $.each(value.atributos, function (key, value) {
                    conteudo.append(
                        $(document.createElement('div')).addClass('atributo').append(
                            $(document.createElement('div')).addClass('key-atributo').text(key+':'),
                            $(document.createElement('div')).addClass('key-value').text(value)
                        )
                    );
                });
            });
        });
}