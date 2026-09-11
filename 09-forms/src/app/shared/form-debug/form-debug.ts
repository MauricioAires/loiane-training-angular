import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  imports: [JsonPipe],
  templateUrl: './form-debug.html',
  styleUrl: './form-debug.scss',
})
export class FormDebug {
  readonly form = input.required<any>();
}
