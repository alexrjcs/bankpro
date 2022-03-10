# README #

Projeto desenvolvido como o objetivo de solucionar um desafio.
O desafio é: 
Construir um Sistema Web que ao receber uma frase digitada pelo usuário retorne a quantidade de palavras distintas e a 
quantidade de ocorrências de cada palavra encontrada na frase. O sistema deve ser composto de uma interface gráfica (renderizada em 
browser) e um backend. A interface deve permitir a entrada da frase, o disparo da análise e exibir seu resultado. A análise deve ser feita pelo 
backend. O “motor” de análise deve ser sincronizado e processar uma requisição por vez.

Técnologias 

### Tecnologias utilizadas ###

* Java 8
* Wildfly-26.0.1
* Maven
* ReactJS

### Como me configuro?###

* Executar o comando "mvn package" posicionado na raiz do projeto 
* Copiar o pacote gerado no passo 1 "target\bankpro.war" para a pasta de deploy do seu Wildfly
