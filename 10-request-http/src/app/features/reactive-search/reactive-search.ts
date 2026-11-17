import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { map, Observable, tap } from 'rxjs';

@Component({
  imports: [ReactiveFormsModule, FormsModule, AsyncPipe],
  selector: 'app-reactive-search',
  styleUrl: './reactive-search.scss',
  templateUrl: './reactive-search.html',
})
export class ReactiveSearch {
  readonly #http = inject(HttpClient);

  protected queryField = new FormControl();
  readonly #SEARCH_URL = 'http://api.cdnjs.com/libraries';
  protected results$!: Observable<any>;
  protected total = signal(0);

  onSearch() {
    const fields = 'name,description,version,homepage';

    let value = this.queryField.value;

    if (!value) return;
    if (value.trim() === '') return;

    value = value.trim();

    /**
     * ECAMScripts
     */
    const params_ = {
      search: value,
      fields,
    };

    let params = new HttpParams();

    /**
     * Mais elegante do que concatenar as strings
     */
    params = params.set('search', value);
    // params = params.append('search', value);
    // params = params.append('search', value2);
    params = params.set('fields', fields);

    this.results$ = this.#http
      .get(`${this.#SEARCH_URL}`, {
        params,
      })
      .pipe(
        tap((res: any) => this.total.set(res.total)),
        map((res: any) => res.results),
      );
  }
}
