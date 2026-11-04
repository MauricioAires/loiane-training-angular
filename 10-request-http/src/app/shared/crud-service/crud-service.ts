import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { delay, take } from 'rxjs';
import { API_URL } from './api-url.token';

interface BaseRecord {
  id: string;
}

@Service({
  autoProvided: true,
})
export class CrudService<T> {
  protected readonly http = inject(HttpClient);
  protected readonly API_URL!: string;

  list() {
    return this.http.get<T[]>(this.API_URL).pipe(delay(500));
  }

  loadById(recordId: string) {
    return this.http.get<T>(`${this.API_URL}/${recordId}`).pipe(take(1));
  }

  #create<T extends BaseRecord>(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  #update<T extends BaseRecord>(record: T) {
    return this.http.put(`${this.API_URL}/${record.id}`, record).pipe(take(1));
  }

  save<T extends BaseRecord>(record: T) {
    if (record.id) {
      return this.#update(record);
    }

    return this.#create(record);
  }

  remove(recordId: string) {
    /**
     * Eu tivesse idea de adicionar um take no service em quanto
     * eu ainda trabalhava na Brisanet e agora Loiane está utilizando
     * o mesmo padrão.
     */
    return this.http.delete(`${this.API_URL}/${recordId}`).pipe(take(1));
  }
}
