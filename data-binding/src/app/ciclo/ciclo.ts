import {
  type AfterContentChecked,
  type AfterContentInit,
  type AfterViewChecked,
  type AfterViewInit,
  Component,
  type DoCheck,
  type OnDestroy,
  type OnChanges,
  type OnInit,
  input,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  imports: [],
  templateUrl: './ciclo.html',
  styleUrl: './ciclo.css',
})
export class Ciclo
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  valorInicial = input<number>(10);

  constructor() {
    this.#log('construtor');
  }

  /**
   * Eu posso utilizar esse evento no lugar do evento de ngOnInit
   * principalmente quando tem property-bind
   */
  ngOnChanges(): void {
    this.#log('ngOnChanges');
  }

  ngOnInit() {
    this.#log('ngOnInit');
  }

  ngDoCheck(): void {
    this.#log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.#log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.#log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.#log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.#log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.#log('ngOnDestroy');
  }

  #log(hook: string) {
    console.log(hook);
  }
}
