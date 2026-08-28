# Services

O ideal é que toda a lógica de negócio esteja em @Services e não nos componentes.

O Componente deve ser responsável apenas por pegar o dado é exibir na tela.

DRY.

Classes utilitárias, formatação, tradução.

O Ideal é que que a regra de negócio fique nos @Services porque dessa forma fica mais
fácil de migrar para outro Framework, porque geralmente a parte mais diferente entre os
Frameworks é a parte dos templates.

Services para funções e manipulações de array e @Services para comunicação com o banco de dados.
