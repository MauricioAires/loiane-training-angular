# Notes

Porque Angular tem duas formas de formulário?

Template Driven x Data Driven (Reativo)

## Template Drive: Formulário criado e configurado no HTML

Validações são feitas no template HTML.

Angular criado/deduz um FormGroup para código HTML.

Utilizamos diretivas.

Valores do Form são submetidos com ngSubmit.

## Data Drive (Reativo)

Formulário é criado e configurado no Componente/Classe.

Validações são feitas no componentes, no template tem apenas uma
referência.

Angular usa o FormGroup criado no componente

Form já esta no componente não precisa de um ngSubmit

Podemos usar um click mas também podemos usar o ngSubmit.

Não tem uma forma certa ou errado, podemos usar qualquer uma
o que for mais interessante para resolver o seu problema.
