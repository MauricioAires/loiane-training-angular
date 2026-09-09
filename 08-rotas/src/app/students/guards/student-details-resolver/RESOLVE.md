# Notes

O guarda de rota resolve, responsável por carregar
dados antes da rota ser ativada.

O mais comum é que o carregamento dos dados
só inicie depois que o componente é carregamento
utilizando principalmente o @ngOnInit

O tempo de carregamento de uma página pode ser
bem sensível para o projeto, para projetos internos
normalmente não tem muito problema enquanto em um site
de notícias qualquer mile segundo importa.

O principal problema é quando tem requisição Ajax
que demora alguns segundos.
