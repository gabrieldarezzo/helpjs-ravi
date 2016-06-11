# Exercicios em JavaScript (Para ajudar meu primo)

## Previa leitura antes de tudo: (não precisa entender só ler ta valendo...)  
[http://tableless.com.br/tenha-o-dom/](http://tableless.com.br/tenha-o-dom/)
 
## Just.... DO IT:

  - Faça uma mensagem de 'Olá Mundo'....
  - Faça essa mensagem em um arquivo externo e chame ela...
  - (agora pode voltar para o arquivo inicial) Neste alert faça a soma de um tipo inteiro, 2 + 2 .
  - Coloque um campo do tipo text chamado 'Click-Me' no seu HTML e exiba ele dentro do alert ao clicar o botão (necessário saber evento 'click')
  - exiba a quantidade de letras que possuem o texto inserido ao clicar no botão
  - Na pasta 'images' exiba a 'lampada.jpg' -> [Link](https://github.com/gabrieldarezzo/helpjs-ravi/tree/master/images)
  -Agora que você já sabe utilizar o evento 'click', aprenda a usar o 'mouseover', ao passar o mouse em cima da 'lampada.jpg' altere ela para 'lampada-on.jpg'
  - no campo texto do exercício anterior, preencha um CPF (com pontuação e exiba o mesmo sem pontuação)  
  - no campo texto do exercício anterior, preencha um CPF (sem pontuação e exiba o mesmo sem pontuação)  
  - declare 2 variáveis (valor1,valor2)  com valores 2 ,  6 crie uma terceira variável com o resultado sendo a soma de (valor1,valor2), exiba o mesmo.
  - faça 1 botão, 3 campos texto no html.E passe dinamicamente o primeiro campo valor1, segundo campo valor2, e no terceiro campo ao clicar no botão exiba a soma
@Dica: trabalhe com id="", e no html utiliza a tag <button id="btn-acao">Click-Me</button>
  -Faça um comentário de uma linha no JavaScript
  -Faça um comentário de varias linhas no JavaScript
  - Crie uma div com o id 'resultado' no html (vazia) e insira via JavaScript no ato do 'Load' da página o trecho : 'Esse html veio do JavaScript...'
  - Agora crie um botão que ao clicar faça a mesma coisa que o exercício acima.
  - crie uma função que recebe 2 parâmetros e retorna a soma deles.
  - crie uma função que recebe 2 parâmetros e retorna a soma deles, porem caso seja passado um parâmetro vazio ela retorne zero.
  - Exiba o 'resto' da seguinte divisão: (5 / 2)
  - crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.
  - Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles. 
  - Crie uma função que calcula 5% de desconto retornando o valor do desconto.
  - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
  - Dentro da div com o id 'resultado', escreva 1x ('Repetição').
  - Dentro da div com o id 'resultado', escreva 2x ('Repetição').
  - Dentro da div com o id 'resultado', escreva 20x ('Repetição'). (use o for pelo amor de deus)
  - Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com forEach)
  - Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while)
  - Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while) 
  - Dentro da div com o id 'resultado', os números de 0 ~ 10
  - Dentro da div com o id 'resultado', os números pares até 20... (ex 2,4,6...)
  - Ok... chega de for, mentira... faça a tabuada do 1 até o 10 (for dentro de for?) (caso você escreva a tabuada eu vou te bater HSUAHASHUAS)
  - Crie uma função que informa se tem 'dota' no parâmetro informado.
  - Exiba aleatoriamente um número pelo alert()
  - Agora faça um botão que ao clicar nele informa se a pessoa acertou o número.
  - Exiba a data atual pelo JavaScript no seguinte formato: dia/mês/Ano
  - Exiba o proximo mês (dinamicamente obviamente)

## Topicos futuros:
- Arrays/Matrizes/Vetores? 
- Classes/Prototype?
- JSON?
- Manipulação de CSS pelo JavaScript?
- Explicação do que Jquery


Isto é um alert...
```javascript
	alert('Olá Mundo!');
```
Isto tambem pode ser considera um 'exibir':
```javascript
	alert(2 + 2);
```

Isto monitora o evento 'click'
```javascript
	document.getElementById('proximo-quadro').addEventListener('click', function() {
		alert('Click');
	});
```

Isto monitora o evento 'click' no html
```html
	<button onclick="alert('Hit-me');">Click-Me</button>
```

Isto pega o elemento pelo DOM (id="doto"), e altera o src dele....
```javascript
	document.getElementById("foto").src = 'foto-diferente.jpg';
```







