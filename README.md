# 40 - Exercicios em JavaScript (JS) 





## OLÁ INTERNET!!!   

   
Tive a ideia de bolar uma lista de exercicios para quem tem interesse em aprender JavaScript.   
São todos exercicios simples, focando em quem gostaria de iniciar porém está meio perdido.   
Uma das vantagens de se começar a programar pelo JavaScript seria a premissa que todos tem um Browser/Navegador e um editor disponível.

Eu utilizo o [VS-Code](https://code.visualstudio.com/Download), é rapido é simples <del>é barato</del> é de graça. Com varios plugins para turbinar ele.  
 
## Just.... DO IT:
  - (1) Faça uma mensagem de **'Olá Mundo'**.... [Exemplo: 'Olá Mundo'](https://github.com/gabrieldarezzo/helpjs-ravi#exemplos)
  - (2) Faça essa mensagem em um arquivo javascript externo e chame ela... **([Importado](https://github.com/gabrieldarezzo/helpjs-ravi#importado))**
  - (3) Faça uma saída de soma de 2 inteiros, ex: alert(2 + 2) - [Somar dois Inteiros](https://github.com/gabrieldarezzo/helpjs-ravi#exemplo-de-alert--sa%C3%ADda--output-de-uma-soma-de-dois-inteiros-22)
  - (4) No HTML Crie:
```
1 - Campo/Input do tipo text para preencher o nome completo.
1 - Botão com o texto: 'Exibir Nome' e ao clicar neste botão é exibido um alert com o valor do campo nome completo, ex: ' O Nome Completo é: "xxxx". '
```   
  [Monitorando-Click](https://github.com/gabrieldarezzo/helpjs-ravi#monitorando-um-evento-click)  
  [Exibir o nome ao clicar](https://github.com/gabrieldarezzo/helpjs-ravi#exibir-o-nome-ao-clicar)  

  - (5) exiba a quantidade de letras que possuem o texto inserido ao clicar no botão
```
Exemplos de entrada e saida:
'Gabriel' // 7
'Daniel' // 6
'Ronaldo' // 6
'Dennis Ritchie' // 14 (Espaço conta)
```  

  - (6) No seu HTML exiba a imagem de uma lampada, ao clicar em cima da lampada, troque o src dela para a lampada que está acessa.
  ```
  //SRC da Lampada (apagada)  
  https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true  

  //SRC da Lampada (acessa)  
  https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true
  ```  
  ... - [Alterar-Src de Img](https://github.com/gabrieldarezzo/helpjs-ravi#alterar-um-atributo-do-html)   


  - (7) Agora que você já sabe utilizar o evento 'click', aprenda a usar o 'mouseover', ao passar o mouse em cima da 'lampada.jpg' altere ela para 'lampada-on.jpg' (Exemplo abaixo).
  - (7a) Faça 2 campos no HTML chamados: 'Nome', 'Sobrenome' e um botão 'Saudação'; ao clicar no botão exibir um alert: 'Olá {NOME} {SOBRENOME}'
  - (8) Crie um campo texto parar preencher um CPF `<input maxlength="11" id="cpf" />`, e exiba ao lado com pontuação conforme preencher 
  - (9) Preencha um CPF com pontuação `<input maxlength="14" id="cpfPoint" />` e no campo ao lado exiba sem pontuação.  
  - (10) No HTML Crie:
```
2 x - Campo/Input do tipo text. (id=soma1, id=soma2)
1 x - Botão (id=btn-soma)
1 x - Campo (id=resultado-soma)

Caso esteja preenchido um valor númerico nos dois campos(id=soma1, id=soma2), 
O resultado da soma devera aparecer no campo (id=resultado-soma) ao clicar no botão (id=btn-soma).
```   
  - (12) Faça um comentário de uma linha no JavaScript no exercicio anterior
  - (12.a) Crie dois botões no HTML chamados: 'Verde', ,'Vermelho'. ao clicar neles, o style="background-color: {COR-SELECIONADA}" vai ser alterado dinamicamente [Alterar-Style de uma div](https://github.com/gabrieldarezzo/helpjs-ravi#alterar-style-div)   
  - (13) Faça um comentário de varias linhas no JavaScript no exercicio anterior do CPF.
  - (14) Crie uma div vazia cujo o id dela é 'resultado'
Insira via JavaScript assim que a tela carregar o seguinte texto: 'Esse texto foi inserido pelo JavaScript...' ['Exemplo de "window.onload"'](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onload#Exemplos)  
  - (15) Agora crie um botão que ao ser clicado faça a mesma ação do exercício anterior.
  - (16) Crie uma função que recebe 2 parâmetros e retorna a soma deles. (e utilize no exercicio 10)
  - (17) Crie uma função que recebe 2 parâmetros e retorna a soma deles, porem caso seja passado um parâmetro vazio ela retorne zero.
  - (18) Exiba o 'resto' da seguinte divisão: (5 / 2)
  - (19) Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro inteiro.
  - (20) Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles. 
  - (21) Crie uma função que calcula 5% de desconto retornando o valor do desconto.
  - (22) Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
  - (23) Dentro da div com o id 'resultado', escreva 1x ('Repetição'). @dica 'innerHTML', ``` el.innerHTML = 'Repetição'; ```
  - (24) Dentro da div com o id 'resultado', escreva 2x ('Repetição').
  - (25) Dentro da div com o id 'resultado', escreva 20x ('Repetição'). (use o 'for' pelo amor de deus)
  - (26) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com forEach)
  - (27) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while)
  - (28) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com do while) 
  - (29) Dentro da div com o id 'resultado', escreva os números de 0 ~ 10 (escolha uma das opções acima)
  - (30) Dentro da div com o id 'resultado', escreva os números pares até 20... (ex 2,4,6...20)
  - (31) Ok... chega de for(), mentira / #SQN... Exiba a tabuada do 1 até o 10 (for dentro de for?) (caso você escreva de forma manual.. eu vou te bater HSUAHASHUAS)
```
0 x 0 = 0
0 x 1 = 0
0 x 2 = 0
...
10 x 9 = 90
10 x 10 = 100
```  
(Dica, pesquise um pouco de CSS para melhorar a visualização do resultado.)
  
  - (32) Crie uma função que informa se tem os caracteres 'dota' no parâmetro informado.
  ```
  Ex: 'Dota é melhor que LOL' (verdadeiro)
  Ex: 'Lol é melhor que CS' (falso) / e Falso na vida real tmb.
  ```
  - (33) Exiba aleatoriamente um número pelo alert()
  - (34) Agora faça um botão que ao clicar nele informa se a pessoa acertou o número.
  - (35) Exiba a data atual pelo JavaScript no seguinte formato: dia/mês/Ano
  - (36) Exiba o próximo mês (dinamicamente obviamente)

## Just.... DO IT ARRAYS:  
Entenda sobre arrays:
https://pt.wikipedia.org/wiki/Arranjo_(computa%C3%A7%C3%A3o) ou https://en.wikipedia.org/wiki/Array_data_type



- (37.a) Crie o seguinte array: ```var deuses = ['Aegir', 'Aud', 'Balder']```  
E Exiba a quantidade/comprimento que ele tem com a função [.length](http://www.w3schools.com/jsref/jsref_length_string.asp)  

- (37.b) Crie o seguinte array: ```var deuses = ['Aegir', 'Aud', 'Balder']```  
E exiba um a um com ```alert()``` - De preferencia para laços de repetição (for, forEach, while, do{}while)

- (37.c) Crie o seguinte array: ```var deuses = ['Aegir', 'Aud', 'Balder']```  
E exiba um a um com ```alert()``` - De preferencia para funções com callbacks, Ex:(map, reduce, filter)
<img src="https://cdn-images-1.medium.com/max/2000/1*A86lGTmXqQ_KrDUL47D2Hw.png" alt="map, reduce, filter" width="300px"/>

Leia mais sobre como trabalhar com arrays:
https://tableless.com.br/lidando-com-arrays-em-javascript/ 

- (37.e) Crie o seguinte array: ```var deuses = ['Aegir', 'Aud', 'Balder']```  
Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função [push()](http://www.w3schools.com/jsref/jsref_push.asp)  

- (37.f) Crie o seguinte array: ```var deuses = ['Aegir', 'Aud', 'Balder']```  
Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função [.length](http://www.w3schools.com/jsref/jsref_length_string.asp)  

- (37.g) Crie o seguinte array: ```var numbers = [5, 7, 1, 8, 9]```  
E exiba de forma crescente  @dica: [.sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)   
@dica2: http://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores

- (37.h) Crie o seguinte array: ```var numbers = [5, 7, 1, 8, 9]```  
E exiba de forma decrescente.


- (38) Crie o seguinte array: ```var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']```  
E exiba todos os nomes, dentro do html: ```<ul id="nomes"></ul>```

- (39) Crie um campo texto no html que armazena o conteúdo em um array sempre que você clicar no botão, e apresente em uma lista(ul)

- (40) Crie um campo texto no html que armazena o conteúdo em um array sempre que você clicar no botão, e apresente em uma lista(ul) destacando os números pares

- (41) Crie um contador como o abaixo:  
<img src="https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/img-readme/contador-gif-5.gif" alt="Contador" width="width: 60px;"/>


## Challenge Accepted  

- (42) 
<img src="https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/img-readme/meme-challenge-accepted.jpg" alt="Challenge Accepted Meme" width="300px"/>

Com as imagens abaixo:
![Animação Urso](https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/img-readme/all-chara.png)

Crie uma animação, onde a imagem se troca entre 1,2 e 3, e mova o bloco para a direita, dando entender que o urso está 'andando'.
<img src="https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/img-readme/urso-animado.gif" alt="Urso Animado"/>


@Dica: Já deixei cortado cada uma com ( 32px x 32px )
```    
  https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png
  https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png
  https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png
```

Basicamente você pode usar os exemplos abaixo:  
[Exemplo de temporizador/setTimeout()](https://github.com/gabrieldarezzo/helpjs-ravi#exemplo-de-temporizador)     
[Alterar-Style de uma div](https://github.com/gabrieldarezzo/helpjs-ravi#alterar-style-div)  
[Alterar-Src de Img](https://github.com/gabrieldarezzo/helpjs-ravi#alterar-um-atributo-do-html)   

E obviamente um toque de de CSS para mover a img:
Leitura recomendada:
https://www.w3schools.com/css/css_positioning.asp


---
Caso ficou curioso de como fazer, tem um exemplo aqui:  

Onde separei em 3 partes:  

1-animacao (Onde ocorre a troca de forma dinamica entre a img-chara: 1,2,3)  
2-mover-img (Empurro uma imagem estatica de forma dinamica da esquerda (left) até o final)  
3-urso-animado (Junção de ambos exemplos, dando a impressão do urso 'andar')  


Veja o código completo aqui:   
https://github.com/gabrieldarezzo/gabrieldarezzo.github.io/tree/master/helpjs-ravi/desafio-urso  


Demo Online do urso animado aqui: ( Não vale copiar em?! )
http://gabrieldarezzo.github.io/helpjs-ravi/desafio-urso/3-urso-animado/  



### BONUS - 
Crie um campo texto no html que armazena o conteúdo em um array sempre que você clicar no botão, e apresente em uma lista(ul) possibilitando excluir individualmente o item/li clicado

JavaScript curiosidade...  
http://pt.stackoverflow.com/questions/8035/qual-a-diferen%C3%A7a-entre-declarar-uma-matriz-com-array-e-em-javascript 



## Tópicos futuros:
  - [Importado](https://github.com/gabrieldarezzo/helpjs-ravi#just-do-it-arrays) - Arrays/Matrizes/Vetores?
  - Classes/Prototype
  - JSON
  - Manipulação de CSS pelo JavaScript
  - [Jquery](http://try.jquery.com/)
  - [feito](https://github.com/gabrieldarezzo/desafiosInternos/tree/master/ajax#guia-definitivo-ajax) - Ajax


## Exemplos:

### Exemplo de Saida: (Isto é um alert...)
```html
<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>JS Examples</title>
</head>
<body>
  <script type="text/javascript">
      alert('Olá Mundo!');    
  </script>
</body>
</html>
```

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) Ainda com dúvidas de como executar o Olá mundo no JavaScript?! ![#f03c15](https://placehold.it/15/f03c15/000000?text=+)  
Fiz um passo a passo.  ->
**(Não precisa de servidor, como eu disse aqui é só JavaScript.... Qualquer navegador/browser já executa.**

  - Copie e cole o conteúdo do código acima... (ou escreva, é bom saber algumas tags de cabeça...)
![Código HTML + JavaScript](https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/img-readme/1.png)

  - Clique em 'Arquivo' -> 'Salvar Como'
![Salvar->Salvar Como](https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/img-readme/2.png)

  - Escolha uma pasta, (de preferencia crie uma para cada exercício. **Exemplo: 'ex', 'ex1', ...)** )
![Salve o arquivo](https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/img-readme/3.png)

  - Vá até a pasta escolhida, clique com botão direito no arquivo salvo e depois 'Abrir com' -> 'Google Chrome' **(Caso não apareça a opção só arrasta para o navegador aberto)**
![Salve o arquivo](https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/img-readme/4.png)

  - Prontinho... Seu código foi executado  
![Salve o arquivo](https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/img-readme/5.png)  
@dica: caso você altere o arquivo 'index.html' é só dar um F5 (Ou Ctrl + R) no navegador que você olha a alteração.  



## Exemplo de Comentário   

```javascript
<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>JS Examples</title>
</head>
<body>
  <script type="text/javascript">
    //Isto é um comentário, vai ser ignorado pelo interpretador
  </script>
</body>
</html>
```


## Exemplo de Alert() / Saída / Output de uma soma de dois inteiros (2+2)  
Isto tambem é um alert, pode ser considera um 'exibir' ou 'saída' ou 'output' da linguagem:  
```javascript
<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>JS Examples</title>
</head>
<body>
  <script type="text/javascript">
    alert(2 + 2);
  </script>
</body>
</html>
```
Entenda:  
https://pt.wikipedia.org/wiki/Entrada/sa%C3%ADda ou https://en.wikipedia.org/wiki/Input/output  



## Monitorando um evento click  
Isto monitora o evento 'click' pelo JS no html (Incorporado/Importado)   
```javascript

<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>JS Examples</title>
</head>
<body>

<button id="btn-clicou">Exibir Alert</button>

<script type="text/javascript">  
document.getElementById('btn-clicou').addEventListener('click', function() {
  alert('Click');
});
</script>
</body>
</html>
```
Isto monitora o evento 'click' (Inline / In-Tag)
```html
<button onclick="alert('Hit-me');">Click-Me</button>
```


## Exibir o nome ao clicar
Isto monitora o evento 'click' pelo JS no html (Incorporado/Importado)   
```html

<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>JS Examples</title>
</head>
<body>
<p>Nome Completo:</p>
<input type="text" name="nome-completo" id="nome-completo" placeholder="Digite seu nome"/>
<br />
<input type="button" value="Exibir Nome" id="btn-exibir-nome"/>
<hr />
<script type="text/javascript">  
document.getElementById("btn-exibir-nome").addEventListener("click", function() {
  const nomeCompleto = document.getElementById('nome-completo').value;
  alert('O Nome Completo é: ' + nomeCompleto );	
});
</script>
</body>
</html>
```




## Monitorando um evento click (2)  
O código abaixo monitora o evento 'click' do elemento DOM com o id 'my-btn' e depois exibe o valor(value) do elemento my-txt  
```html
...
<body>
<p>Preencha Qualquer coisa e depois clique no botão abaixo...</p>
<input type="text" name="" id="my-txt" value="Aqui vai ser exibido"  />
<br />
<button id="my-btn">Outro 'Button'</button>

<script type="text/javascript">  
document.getElementById("my-btn").addEventListener('click', function() {
  var texto = document.getElementById("my-txt").value;
  alert(texto);
});
</script>
</body>
...
```

## Alterar Style Div
O código abaixo seleciona um elemento pelo DOM (id="my-photo"), e altera o src deste elemento para 'foto-diferente.jpg'
```html
...
<body>
  
  <style type="text/css">
  #quadrado {
    height: 100px;
    width: 100px;
  }
  </style>

  <div id="quadrado" style="background-color: #f00;"></div>  

  <script type="text/javascript">
    document.getElementById("quadrado").style = "background-color: #f00;";
  </script>


</body>
...
```

## Alterar um atributo do HTML
O código abaixo seleciona um elemento pelo DOM (id="my-photo"), e altera o src deste elemento para 'foto-diferente.jpg'
```html
...
<body>
  <img src="https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true" alt="Minha Foto" id="my-photo"/>
  <script type="text/javascript">
    document.getElementById("my-photo").src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
  </script>
</body>
...
```


## Criar Função
O código abaixo cria uma função de somar em JavaScript, [leia mais](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es)
```html
...
<body>
    <script type="text/javascript">
        function somaDoisNumeros(primeiro, segundo){
        
            //Armazena o resultado da soma do primeiro parâmetro + segundo parâmetro.
            var resultado = primeiro + segundo;
            
            //E retorna a variavel.
            return resultado;
        }
        
        alert(somaDoisNumeros(1, 3));
        alert(somaDoisNumeros(3, 3));
        alert(somaDoisNumeros(2, 2));
    </script>
</body>
...
```


## Exemplo de temporizador   

O código abaixo tem um temporizador que executa uma função anônima após 2000 μs ([microsecond](https://en.wikipedia.org/wiki/Microsecond)) (2 segundos)   


```html
...
<body>
    <script type="text/javascript">
      setTimeout(function(){
        alert("Olá mundo atrasado dois segundos"); 
      }, 2000);        
    </script>
</body>
...
```   
# Explicações Gerais


## Temos 3 formas de chamar um JavaScript (Inline, Incorporado, Importado) veja abaixo:   

### Inline [(Veja o Demo)](http://gabrieldarezzo.github.io/helpjs-ravi/exemplos/inline/)
```html
<!DOCTYPE HTML>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>JS Examples</title>
</head>
<body>
  <button onclick="alert('Hit-me');">Click-Me</button>
</body>
</html>
```  
  
### Incorporado [(Veja o Demo)](http://gabrieldarezzo.github.io/helpjs-ravi/exemplos/incorporado/)
```html
<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>JS Examples</title>
</head>
<body>
    
  <script type="text/javascript">
    alert('Olá');
  </script>
</body>
</html>
```   
  

### Importado
Basicamente seria 2 arquivos no mesmo nivel de pasta (index.html) e (my_script.js)
Conteúdo do 'index.html':
```html
<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>JS Examples</title>
</head>
<body>
  <script type="text/javascript" src="my_script.js"></script>
</body>
</html>
```   

Conteúdo do 'my_script.js':
```javascript
alert('Olá!!!');
```



# Pow eu fiz os códigos, porem não acontece nada/fiz os códigos e não ocorreu o esperado....
  **Ai meu filho você precisa aprender a *debbugar**:
  - http://www.devfuria.com.br/javascript/debugando/
  - http://www.devmedia.com.br/depurando-javascript-com-google-chrome/28367
  
# Quer mais exercicios ?!   
  - O @jcserracampos fez uma lista bem bacana para continuar a se desafiar: https://medium.com/@JCSerraCampos/diasto-sem-ideias-para-programar-hoje-e-agora-dcbeda65d223

# Ainda tem dúvida? Cria um 'Issue' tio....
  -  https://github.com/gabrieldarezzo/helpjs-ravi/issues 
  
# Gosta de Videos?
  -  https://github.com/carolcodes/youtube-br-desenvolvimento  
  

# Artigos lekais de JavaScript/HTML/CSS:  
  - http://tableless.github.io/iniciantes/  
  - https://www.youtube.com/playlist?list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc
  - http://jstherightway.org/pt-br/#js-code-style
  - http://www.codewars.com/?language=javascript
  - Ebooks gratuitos de JS -> http://jsbooks.revolunet.com/
  
# Pirou no 'Ursinho animado'?
  - (Avançado | Inglês) Curso de 'Developing Games with HTML5' https://www.youtube.com/watch?v=x2EbfsQbsLI&list=PLsrZV8shpwjMxD9LZ6qsKrtWR7xQEv192
  
# Motivos para você usar o Google Chrome:  
- [Segredos do Chrome DevTools com @zenorocha](https://www.youtube.com/watch?v=XUgfwYzv-WQ&list=PLiGzvgwA5Gmgnq5vPjJxW52hDiX3ndL53)  


Entenda o que é ['Vanilla-js'](http://pt.stackoverflow.com/questions/46983/o-que-%C3%A9-o-vanilla-js)  
Powered By:  
[![Vanilla-js](http://vanilla-js.com/assets/button.png)](http://vanilla-js.com/)  








