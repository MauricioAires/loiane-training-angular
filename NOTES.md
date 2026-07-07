# Angular

## Blocos principais

- Componentes
- Diretivas
- Roteamento
- Serviços
- Template
- Metadata
- Data binding
- Injeção de dependências

## Ambiente

- Node.JS
- Typescript (Superset do JavaScript)
- Angular CLI

## Módulos

- Admin
- Produtos
- Clientes
- Shared/Common
- Raiz
- Vendas
- Relatórios

## Templates

- View/Template
- Seletor vira a tag html (web componentes)
- Atributo

## Services

- Componente -> Serviço (Service) -> Backend (Node.js, Java, etc)
- ng g s service-name
- decorator @Injectable()
- DI (Injeção de dependências) + Providers (fornecedores)
-

## Dicas plugins Angular para Atom e VS Code

- Já utilizo

## Property Binding and Interpolação

- A classe chamamos de componente o HTML de template
- Property biding
- Interpolation
- (event)="fn()"
- two way data bind (banana na caixa) [(ngModel)]="prop"
- ng2-bootstrap

## Two-way data binding

- Valor do Template para o Componente e vice-versa
- Usa-se binding de ventos + propriedades

## Como estudar

- Definir o que estudar (roadmap.sh)
- Planear estudo (notion)
- Cursos: pago é melhor
- Construa seu segundo cérebro (whimsical como usar)
- Pratique com a sua voz (chatGPT fazer uma entrevista)
- Projetos pessoais (pequenos)
- Fazer resumo (whimsical / notion)
- Sair do modo focado e alterar o conteúdo
- Começar com os mais dificíes + dormir
- Revisar rápido, temporizador, praticar
- Recordar ativamente
- Criar sempre um conteúdo no whimsical e criar uma tabela de revisão que sempre que eu visitar o
  conteúdo eu vou adicionar a data.
- Mapa mental, ler em vóz alta e explicar (criar apresentação)
- Rubber Duck Debugging.
- Se divertir enquanto estuda.
- Como reter informação
- Como saber o que é util? Vou utilizar primeiro
- Nas escolas ensina BOTTOM UP
- Aprender o que eu sei que eu preciso aprender (gerenciamento de estado angular Nx NgRx, Test)
- Aprender o que eu não sei eu eu preciso (segurança no frontend)
- Saber onde está o que sai ser util mas não agora (W3C, Micro Frontend, BFF)
- Livro, documentação e curso.
- Documentar os aprendizados (whimsical, LeetCode, system design frontend)
- Eu estou o pleno "Estagnado"
  - Desenvolvimento orientado a currículo
  - A maioria leu apenas clean code (dev médio) ler mais vai me colocar a frente
  - Estudos sobre demanda (estudar o que eu preciso nessa task)
  - FOMO

## Life Cycle Hooks

- ngOnChanges: antes #2 e quando o valor property-binding é atualizado
- ngOnInit: quando Component é iniciado
- ngDoCheck: a cada ciclo de verificação de mudanças
- ngAfterContentInit: depois de inserir conteúdo externo na view
- ngAfterContextChecked: a cada verificação de conteúdo inserido
- ngAfterViewChecked: a cada verificação de conteúdo / conteúdo filho
- ngOnDestroy: antes da diretiva/component ser destruído
