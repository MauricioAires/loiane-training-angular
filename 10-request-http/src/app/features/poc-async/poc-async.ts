import { Component, OnInit, input } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-poc-async',
  styleUrl: './poc-async.scss',
  templateUrl: './poc-async.html',
})
export class PocAsync implements OnInit {
  readonly nome = input.required<string>();
  readonly valor = input.required<string>();
  readonly estilo = input.required<string>();

  ngOnInit() {}
}
