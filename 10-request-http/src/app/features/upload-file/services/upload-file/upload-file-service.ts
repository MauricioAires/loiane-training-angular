import { HttpClient, HttpRequest } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class UploadFileService {
  readonly #http = inject(HttpClient);

  upload(files: Set<File>, url: string) {
    const formData = new FormData();

    files.forEach((file) => {
      /**
       * 1. valor que o backend espera pegar o aquivo
       * 2. o arquivo Blob
       * 3. nome do arquivo
       */
      formData.append('file', file, file.name);
    });

    // const request = new HttpRequest('POST', url, formData);

    // return this.#http.request(request);
    return this.#http.post(url, formData);
  }
}
