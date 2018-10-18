$(function () {
    //  DESLIZA O MENU
    $('.main_menu a[class!="special"]').click(function () {
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;    //  $('.home')
        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
        console.clear();
        console.log(goto);
        return false;
    });

    //   SUSPENDE MENU
    $(window).scroll(function () { //  quando acontece a rolagem para baixo na pagina
        if ($(this).scrollTop() > $('.main_header').outerHeight() + 150) {    //  verifica se passou da altura da header + 150 pixels
            $('body').css('padding-top', $('.main_header').outerHeight());
            $('.main_header').addClass('main_header_fixed');
            $('.j_back').fadeIn(500);
        }
        else {
            $('body').css('padding-top', '0');
            $('.main_header').removeClass('main_header_fixed');
            $('.j_back').fadeOut(500);
        }
//      console.log('scroll');
    });

    //   BACK TOPO
    $('.j_back').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });

    //   FORM SUBMIT
    $('.j_form_submit').submit(function () {
//        var dados = $(this).serialize();
        var nome = document.getElementById('nome');
        
        alert("Olá, " + nome.value + ". Obrigado por escrever.\nEntraremos em contato o mais rápido possível!!");
//        console.clear();
//        console.log("passou pelo j_form");
//        
//        var yourMessage = document.getElementById("mensagem").value;
//        var nome = document.getElementById("nome").value;
//        var email = document.getElementById("email").value;
//        
//        alert("Olá " + nome + ". Obrigado por escrever. Entraremos em contato o mais rápido possível!!");
        
//        document.location.href = "mailto:contato@casanostra.com.br?subject=[Casa Nostra] Nova Mensagem"
//                                    + "&body=" + encodeURIComponent(yourMessage);

//        document.write('<a href="mailto:' + email + '?subject=[Casa Nostra] Nova Mensagem' + '&body=' + yourMessage + '">' + 'Click here to send feedback' + '<'+'/a>');

//        alert("Olá " + dados.nome + ". Obrigado por escrever. Entraremos em contato o mais rápido possível!!");
//        $.ajax({
//            url: "js/ajax.php",
//            data: dados,
//            tpye: 'POST',
//            dataType: 'json',
//            
//            beforeSend: function () {
//                $('.form_load').fadeIn();
//            },
//            
//            success: function (data) {
//                console.clear();
//                console.log(data);
//                $('.form_load').fadeOut();
//                alert("Olá " + data.nome + ". Obrigado por enviar sua mensagem " + data.mensagem +".");
//            }
//        });
//       return false; 
    });

    document.getElementById('contatoForm').addEventListener('submit', function () {
//        var nome = this.querySelector('input[name=nome]'), nome = nome.value;
//        var email = this.querySelector('input[name=email]'), email = email.value;
//        var mensagem = this.querySelector('input[name=mensagem]'), mensagem = mensagem.value;

//        alert("Olá " + document.getElementById("nome").value + ". Obrigado por escrever. Entraremos em contato o mais rápido possível!!");

//        var texto = 'Nome ' + nome + '\nEmail ' + email + '\n';
//        this.querySelector('input[name=Body]').setAttribute('value', texto.concat(mensagem));




    });

});