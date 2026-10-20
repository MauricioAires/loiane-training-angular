import { Component, Input, OnInit } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-poc-async',
  styleUrl: './poc-async.scss',
  templateUrl: './poc-async.html',
})
export class PocAsync implements OnInit {
  @Input() nome!: string;
  @Input() valor!: string;
  @Input() estilo!: string;

  ngOnInit() {}
}
