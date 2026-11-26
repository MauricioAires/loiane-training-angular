# Loiane Training Angular

Este repositório reúne meus estudos práticos de Angular, organizados em projetos independentes e em ordem progressiva. Cada pasta apresenta um módulo do framework, com exemplos executáveis, exercícios e anotações sobre conceitos fundamentais e recursos usados em aplicações reais.

## Conteúdo estudado

- Criação e estruturação de projetos Angular
- Componentes, templates e estilos
- Data binding e comunicação entre componentes
- Ciclo de vida dos componentes
- Diretivas estruturais, de atributo e customizadas
- Angular CLI e integração com bibliotecas externas
- Serviços, injeção de dependência e organização da lógica
- Pipes nativos e pipes customizados
- Roteamento, lazy loading e guards
- Formulários template-driven e reativos
- Validações síncronas e assíncronas
- HTTP, RxJS, interceptação e cancelamento de requisições
- CRUD, upload de arquivos e busca reativa
- Testes unitários e e2e
- Deploy com Docker, Nginx e Docker Compose

## Projetos do repositório

| Diretório                       | Conteúdo principal                                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `data-binding/`                 | Interpolação, property binding, event binding, two-way data binding, `@Input`, `@Output`, eventos customizados e ciclo de vida |
| `04-diretivas/`                 | `ngIf`, `ngFor`, `ngSwitch`, `ngClass`, `ngStyle`, `ng-content`, operador Elvis e diretivas customizadas                       |
| `05-angular-cli-libs-externas/` | Angular CLI, geração de código, estrutura de projetos e uso do Bootstrap externo                                               |
| `06-services/`                  | Criação de serviços, providers, injeção de dependência, comunicação entre componentes e separação de responsabilidades         |
| `07-pipes/`                     | Pipes nativos, pipes puros e impuros, parâmetros e criação de pipes customizados                                               |
| `08-rotas/`                     | Rotas principais e filhas, parâmetros, lazy loading, redirecionamentos, página 404, resolvers e guards                         |
| `09-forms/`                     | Formulários template-driven e reativos, validadores, `FormGroup`, `FormArray`, campos customizados e busca assíncrona          |
| `10-request-http/`              | `HttpClient`, CRUD com REST, RxJS, async pipe, operadores, modais, upload, proxy, Docker e deploy                              |

## 1. Componentes e data binding

No módulo `data-binding/`, foram explorados os principais mecanismos de comunicação entre o componente e seu template:

- **Interpolação:** exibição de valores da classe no HTML com `{{ valor }}`.
- **Property binding:** ligação de propriedades do DOM ou de componentes com `[propriedade]="valor"`.
- **Event binding:** captura de eventos com `(evento)="metodo()"`.
- **Two-way data binding:** sincronização bidirecional com `[(ngModel)]="propriedade"`.
- **Input property:** envio de dados do componente pai para o filho com `@Input()`.
- **Output property:** comunicação do componente filho para o pai com `@Output()` e `EventEmitter`.
- **Módulos:** organização de componentes relacionados em uma unidade reutilizável.

Também foram praticados os life cycle hooks:

- `ngOnChanges`
- `ngOnInit`
- `ngDoCheck`
- `ngAfterContentInit`
- `ngAfterContentChecked`
- `ngAfterViewInit`
- `ngAfterViewChecked`
- `ngOnDestroy`

## 2. Diretivas

O módulo `04-diretivas/` demonstra diretivas estruturais e de atributo:

- **Estruturais:** alteram a estrutura da DOM, como `@if`/`ngIf`, `@for`/`ngFor` e `ngSwitch`.
- **Atributo:** modificam aparência ou comportamento, como `ngClass` e `ngStyle`.
- **Operador Elvis:** escrita segura para propriedades que podem não existir ou ser nulas.
- **`ng-content`:** criação de componentes com projeção de conteúdo.
- **Diretivas customizadas:** criação de comportamentos reutilizáveis com seletores próprios.
- **Host binding e host listening:** aplicação de classes, estilos e eventos a partir da diretiva.

## 3. Angular CLI e bibliotecas externas

O Angular CLI foi utilizado para criar projetos e gerar componentes, serviços, diretivas e pipes.

Comandos estudados:

```bash
ng new nome-do-projeto
ng serve
ng generate component nome
ng generate service nome
ng generate directive nome
ng generate pipe nome
ng build
ng test
ng e2e
```

No módulo `05-angular-cli-libs-externas/`, o Bootstrap foi integrado ao projeto para praticar estilos e componentes visuais externos.

## 4. Serviços e injeção de dependência

Os projetos `06-services/` e `10-request-http/` mostram o uso de serviços para centralizar lógica e comunicação.

- Decorador `@Injectable()`.
- Registro de providers e criação de instâncias.
- Injeção de dependência em componentes e outros serviços.
- Separação entre apresentação e regra de negócio.
- Comunicação entre componentes usando serviços e `Subject`/`Observable`.
- Reutilização de classes utilitárias e formatações.
- Uso de serviços para acesso a APIs e armazenamento temporário de dados.

A organização adotada deixa os componentes responsáveis principalmente por controlar a interface e delega processamento, dados e integrações aos serviços.

## 5. Pipes

No módulo `07-pipes/` foram praticados:

- Pipes nativos de formatação de texto, números, datas, moedas e objetos.
- Encadeamento de múltiplos pipes.
- Parâmetros em pipes.
- Pipes puros e impuros.
- Criação de pipes customizados, como filtros e transformação para CamelCase.
- Uso do pipe `async` para consumir observables diretamente no template.

## 6. Roteamento

O módulo `08-rotas/` explora navegação em aplicações SPA:

- Configuração de rotas com `Routes` e `RouterLink`.
- Rotas principais e rotas filhas.
- Parâmetros de rota e obtenção de dados por `ActivatedRoute`.
- Redirecionamento e página 404.
- Lazy loading de componentes e agrupamentos de rotas.
- Autenticação simulada e controle de acesso.
- Guards:
  - `canActivate`
  - `canActivateChild`
  - `canMatch`
  - guards de desativação
- Resolvers para carregar dados antes da ativação da rota.
- Prevenção de saída de formulários com dados não salvos.

O carregamento sob demanda melhora o tempo inicial da aplicação e permite que partes da interface sejam carregadas somente quando necessárias.

## 7. Formulários

O módulo `09-forms/` apresenta as duas estratégias de formulários do Angular:

### Template-driven

- Formulários definidos principalmente no template.
- Uso de `FormsModule` e diretivas como `ngModel` e `ngSubmit`.
- Validação e associação feitas no HTML.
- Controle de estados como válido, tocado e modificado.
- Preenchimento de endereço a partir da consulta de um CEP.

### Reactive Forms

- Formulários construídos na classe do componente.
- Uso de `FormBuilder`, `FormControl`, `FormGroup` e `FormArray`.
- Validações síncronas com `Validators`.
- Validadores customizados para CEP, confirmação de email e seleção mínima.
- Validadores assíncronos com timers e requisições HTTP.
- Escuta de `statusChanges` e `valueChanges`.
- Composição reativa com `switchMap`, `distinctUntilChanged`, `map`, `catchError` e `timer`.
- Componente base para reutilização de métodos comuns.
- Mensagens de erro e componentes de controle de campo compartilhados.

## 8. HTTP e RxJS

O módulo `10-request-http/` simula uma aplicação REST completa:

- Uso de `HttpClient` para `GET`, `POST`, `PUT` e `DELETE`.
- API local simulada com `json-server`.
- Configuração de variáveis de ambiente.
- Proxy do Angular para evitar problemas de CORS durante o desenvolvimento.
- Operadores HTTP e observables com `async pipe`.
- Estados de loading, sucesso e erro.
- Cancelamento automático com `takeUntilDestroyed`.
- Cancelamento e prevenção de vazamento de memória em subscriptions.
- Operadores RxJS como `take`, `takeUntil`, `debounceTime`, `distinctUntilChanged`, `switchMap` e `catchError`.
- Operadores RxJS customizados.
- Popup de confirmação reutilizável.
- Serviço genérico de CRUD e criação de formulários para criação e edição.
- Resolver para carregar registros antes de entrar em uma página de edição.
- Upload com `FormData`, observação de eventos HTTP e barra de progresso.
- Busca reativa baseada em parâmetros de URL com `HttpParams`.
- Modais de alerta e confirmação com ngx-bootstrap.

## Estrutura técnica

Tecnologias presentes no repositório:

- Angular 20, 21 e 22
- TypeScript
- RxJS 7
- Angular CLI
- Bootstrap 5
- ngx-bootstrap
- json-server
- Vitest ou Jasmine/Karma, dependendo do projeto
- Docker e Nginx

A combinação de versões varia entre os módulos porque cada projeto foi criado em momentos diferentes do aprendizado.

## Como executar um módulo

Cada pasta é um projeto Angular independente.

```bash
cd nome-do-projeto
npm install
npm start
```

Por padrão, o Angular estará disponível em `http://localhost:4200/`.

Para gerar o build de produção:

```bash
npm run build
```

Para executar testes unitários:

```bash
npm test
```

## Executar o projeto HTTP

O módulo `10-request-http/` utiliza uma API REST local.

Em dois terminais:

```bash
cd 10-request-http
npm install
npm run back
```

```bash
cd 10-request-http
npm start
```

O servidor local usa o arquivo `server/db.json` e o Angular inicia com o proxy configurado em `proxy.conf.js`.

## Docker

O módulo HTTP contém uma configuração multi-stage para produção:

1. Build da aplicação Angular com Node.js.
2. Publicação dos arquivos estáticos em um container Nginx.
3. Execução da aplicação na porta configurada pelo Docker Compose.

```bash
cd 10-request-http
docker compose up -d --build
```

Por padrão, o projeto estará disponível em `http://localhost:8081/`.

## Testes

Há exemplos de testes unitários gerados junto aos componentes, serviços, diretivas, pipes e guards. O módulo `04-diretivas/` também contém configuração de Playwright para testes e2e.

Comandos comuns:

```bash
ng test
npx playwright test
```

## Próximos estudos

Os estudos ainda podem evoluir para:

- Gerenciamento de estado com NgRx ou outra solução
- Interceptors HTTP
- Organização avançada em aplicações grandes
- Segurança no frontend
- Testes de integração e e2e
- Micro frontends e BFF
- Estratégias de monitoramento e observabilidade
- Arquiteturas escaláveis com módulos ou standalone APIs
