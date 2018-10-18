$(function () {

    //SELETOR, EVENTO, CALLBACK, ACAO

//    $('.j_alert').click(function(){
//        var texto = $(this).text(); //pegando texto do paragrafo
//        alert(texto);
//    });
//    
//    $('a[title="Upinside Treinamentos"]').click(function(){
//        $(this).text($(this).attr('title'));
//        return false;
//    });

/*
    $('.j_mouseover').mouseenter(function () {
//        alert("Passou o mouse no H1. Seu texto é: " + $(this).text());
    });
*/

//    $('.j_keyup').keyup(function(){
//        var texto = $(this).val();
//        $('.j_empresa').html(texto);
//    });


    //SELETOR, EFEITO, CALLBACK, ACAO
/*
    $('a').click(function () {
//        deletaPost($(this).attr('rel'));
//        location.href = '../';
        alert($(location).attr('href'));
//        $('.b').slideToggle();
        return false;
    });

    $(window).load(function () {
//       CALLBACK, TEMPO
        var tempo = setInterval(function () {
            $('a').fadeToggle(function(){});
        }, 200);

        $('a').click(function () {
            clearInterval(tempo);
        });
    });

    function deletaPost(postId) {
        var alerta = confirm('Tem certeza que quer deletar ?');
        if (alerta === true) {
            $('#' + postId).fadeOut(function () {
                alert('Post removido com sucesso');
            });
        }
        else {
            alert('no');
        }
    }
    
    var s = 0;
    setInterval(function (){
        s++;
        console.log(s);
        if (s >= 4) {
            console.clear();
            console.log('teste');
        }
        $('.j_time').text(s);
    }, 1000);
*/

});