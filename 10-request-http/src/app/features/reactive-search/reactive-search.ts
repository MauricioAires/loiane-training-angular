import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-reactive-search',
  styleUrl: './reactive-search.scss',
  templateUrl: './reactive-search.html',
})
export class ReactiveSearch {
  protected queryField = new FormControl();

  onSearch() {
    console.log(this.queryField.value);
  }
}
