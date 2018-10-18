<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="stylesheet.css">
        <meta charset="UTF-8">
        <title></title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,800" rel="stylesheet">
        
        <style>
/*          # -- seletor de id
            . -- seletor de class

            Graus de Especificidade:    1, 0, 0, 0
                                        Inline, id, class, Elementos
                                        0001    Elementos
                                        0010    Classes
                                        0100    Id
                                        1000    Inline
            
            Ex. do menos específico para o mais: p -> class"p" -> id="p" -> style="color: black";
*/
            
/*            .artigo {background: red;}
            .artigo_dois {background: #ccc;}
            .color_red{color: red;}
            .color_blue{color: blue;}*/

            /*p {color: black !important;} comando !important não respeita especificidade*/
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box; /*o tamanho da box será baseado na borda da box*/
                font-family: 'Open Sans', sans-serif;
            }
            
            body {
                height: 1600px;
            }
            
            .content {
                text-align: center;
                float: left;
                width: 100%;
                padding: 5%;
                
                /*plano de fundo da caixa 'content'*/
                background: #ccc;
                background-image: url(https://www.linhadapraia.pt/imgs/bg/fundo.jpg);
                background-size: cover;
                background-attachment: fixed;   /*imagem fixa*/

                /*background-repeat: no-repeat;*/
                /*background-repeat: repeat-x;*/
                /*background-repeat: repeat-y;*/
                
                /*background-position: left;*/
                /*background-position: center;*/
                /*background-position: right;*/
                /*background-position: right top;*/
            }
            
            .news {
                text-align: center;
                display: inline-block;
                padding: 30px;
                max-width: 500px;
                background: rgba(255,255,255,0.3);
                color: #000;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                box-shadow: 0 2px 5px #555;
                
/*                margin-bottom: 50px;*/
/*                border: 5px solid #fff;*/
                /*outline: 10px solid #999;*/
            }
            
            .news header {
                margin-bottom: 30px;
            }
            
            .title {
                font-size: 1.8em; /*1 em é 14px*/
                font-weight: 600;
            }
            
            .tagline {
                margin-top: 15px;
                font-size: 1em;
                text-transform: uppercase;
            }
            
            .optin {
                display: block;
            }
            
            .optin input {
                padding: 10px;
                border: 1px solid #ccc;
                display: block;
                width: 100%;
                margin-bottom: 15px;
                font-family: 'Arial', serif;
            }
            
            button {padding: 8px 25px; cursor: pointer; font-size: 1.2em; font-weight: bold; color: #eaeaea; border: 2px solid #253f21; background: #426d42}
            button:hover{background: #b4ceaf}
            
            .clear {clear: both;}   /* serve para dividir os elementos html/ box*/
            
        </style>
        
    </head>
    <body>
        <div class="content">
            <article class="news">
                <header>
                    <h1 class="title">Conheça o curso Work Series - HTML5 do Jeito Certo.</h1>
                    <p class="tagline">Descubra como utilizar o poder do HTML5 semântico, somado a avançadas técnicas de SEO e Mrketing Digital para criar sites
                    que geram resultados rápidos e eficientes.</p>
                </header>
                
                <form class="optin">
                    <input type="text" name="nome" placeholder="Seu Nome"/>
                    <input type="email" name="email" placeholder="Seu Email"/>
                    <button>Enviar</button>
                </form>
            </article>
        </div>
    </body>
</html>
