# Eletrodom

 Esta é uma aplicação frontend desenvolvida para um teste técnico, o qual os requisitos 
você pode acompanhar clicando no [link](https://drive.google.com/file/d/1xY6EfiSDgJjQhrFCwiHQfL1fxTKg6S7i/view).

## Das Funcionalidades:

### CRUD
- O teste basicamente pede para desenvolver uma pequena aplicação frontend para consumir uma api
que tambem foi desenvolvida para o teste, onde se cria, atualiza, faz a leitura e deleta o produto.

### SCREENS
- O projeto contem duas Views que são a HomeView e o ProductFormView, ao clicar no botão de CADASTRAR
no canto superior esquerdo da tela você será direcionado para a tela de formulário onde irá preencher
as opções conforme a escolha de cadastro do produto, dentro do card do produto existe o icone da lixeira
que vai deletar o produto, e o botão editar que leva para o formulário preenchido com as informações do 
produto respectivo ao clique para atualizar quais sejão as informações.

## LIBS

- AXIOS (trata-se de um client Http muito utilizado em conjunto com Vue.js).
- Tailwind Css (Muito similar ao bootstrap auxilia no estilo da pagina utilizando suas classes).
- Pinia (Gerenciador de estado).
- SweetAlert2 (utlizado para emitir os alertas para o usuário).

## Ao clonar o repositorio execute o seguinte comando:
```
yarn install
```

### Em seguida entre na pasta do projeto e execute o seguinte comando:
```
yarn serve
```

### Para fazer o build da aplicação:
- caso opte por não executar o servidor do vue, você pode criar um virtual host e usar
seu servidor local (apache por exemplo) e apontar para o diretorio  dist.
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```
