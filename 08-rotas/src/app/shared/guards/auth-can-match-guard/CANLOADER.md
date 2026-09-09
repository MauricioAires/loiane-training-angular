# Notes

É a última forma de guarda de rota, é uma forma de não
carregar o módulo sem permissão.

Qual a diferença entre o AuthGuard x CanLoad?

É uma forma de bloquear acesso ao código, o bundle do
módulo do componente não será carregado.

Mesmo utilizando carregamento sobre demanda.

LAZY LOADING + CAN LOAD.

Uma forma de proteger o código.

O Guard CanLoad foi removido do angular desde a
versão v14 e foi implementado o canMatch.

O novo padrão de guard é o functional guard.

CanMatch não é apenas o novo e o CanLoad é o antigo,
é mais poderoso que isso, o canLoad apenas
bloqueava o carregamento do código.

Por exemplo:

CanMatch: Essa rota pode participar do matching?
CanActivate: Posso ativar/acessar essa rota?
CanDeactivate: Posso sair dessa rota?
CanLoad(deprecated) posso carregar esse lazy module?

O CanMatch não deve ser entendido simplesmente como um
substituto do CanLoad; ele engloba a ideia de controle
que o CanLoad oferecia sobre o carregamento de rotas lazy
load, mas adiciona uma responsabilidade mais ampla: decidir
se uma determinada rota pode ou não participar do processo
de matching da URL. Assim além de poder impedir que o Angular
carregue o módulo lazu quando o usuário não possui
permissão, o CanMatch também permite configurar múltiplas
rotas com o mesmo path, direcionando o usuário para componentes ou
módulos diferentes de acordo com as condições defindas
pelo guard. A principal diferença é que quando um CanMathc
retorna false, ele não necessariamente bloqueia a navegação; ele informa ao Router que aquela rota específica não deve
ser utiliza e permite que o Angular continue procurando outras rotas que possam dar match com a URL informada. Dessa forma ,
o CanMatch não é apenas um CanLoad renomeada: ele incorpora
o controle de carregamento lazy, mas principalmente
passa atuar como parte do próprio mecanismo
de seleção de rotas.
