import { HttpClient, HttpRequest } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { take } from 'rxjs';

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
    return this.#http.post(url, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  download(url: string) {
    /**
     * O retorno padrão do Angular é json
     * mas como estamos lidando com Arquivo nào é Json
     * vamos receber um blob
     * O backend precisa setar o Content-length no header
     */
    return this.#http
      .get(url, {
        responseType: 'blob' as 'json',
        // reportDownloadProgress
      })
      .pipe(take(1));
  }

  handleFile(res: any, fileName: string) {
    /**
     * instanciando um blob
     *
     * Navegadores diferentes baixa de forma diferente.
     */
    const file = new Blob([res], {
      type: res.type,
    });

    // IE (Internet Explore) (acredito  que isso não é mais necessário)
    if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
      (window.navigation as any).msSaveOrOpenBlob(file);

      return;
    }

    const blob = window.URL.createObjectURL(file);

    const link = document.createElement('a');

    link.href = blob;

    link.download = fileName;

    // link.click(); // funciona para o Firefox também
    // Firefox
    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    );

    /**
     * Para Firefox, para remover o link
     */
    setTimeout(() => {
      window.URL.revokeObjectURL(blob);

      link.remove();
    }, 100);
  }
}
