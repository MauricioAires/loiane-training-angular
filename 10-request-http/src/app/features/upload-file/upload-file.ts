import { Component, computed, inject, signal } from '@angular/core';
import { UploadFileService } from './services/upload-file/upload-file-service';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { filterResponse, uploadProgress } from '../../shared/utils/rxjs-operators';

@Component({
  imports: [],
  selector: 'app-upload-file',
  styleUrl: './upload-file.scss',
  templateUrl: './upload-file.html',
})
export class UploadFile {
  readonly #uploadFileService = inject(UploadFileService);
  /**
   * Evitar itens duplicados dessa forma
   * utilizasse new Set()
   */
  protected readonly progress = signal(0);
  protected readonly files = signal<Set<File>>(new Set());
  protected readonly hasSelectFiles = computed(() => {
    return Array.from(this.files()).length > 0;
  });

  protected onChange(e: Event): void {
    const selectedFiles = (e.target as HTMLInputElement).files;

    if (!selectedFiles) return;
    if (selectedFiles.length === 0) return;

    const fileNames = [];

    const files = new Set<File>();

    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      files.add(selectedFiles[i]);
    }

    this.progress.set(0);
    this.files.set(files);

    // console.log(fileNames.join(', '));
  }

  protected onUpload(): void {
    if (!this.hasSelectFiles()) return;

    /**
     * Esse tipo de requisição não pode trabalhar
     * com take 1 porque o CORS faz uma chamada de teste
     */

    /**
     * template literal
     */
    this.#uploadFileService
      .upload(this.files(), `${environment.BASE_URL}/upload`)
      .pipe(
        uploadProgress((progress) => {
          console.log({
            progress,
          });
          this.progress.set(progress);
        }),
        filterResponse(),
      )
      .subscribe((res) => {
        console.log(res);

        console.log('Upload concluído');
      });
    // .subscribe({
    //   next: (event: HttpEvent<object>) => {
    //     /**
    //      * Funciona apenas para upload e download de arquivos
    //      */
    //     // HttpEventType();
    //     // console.log(event);

    //     // console.log(event.type);

    //     if (event.type === HttpEventType.Response) {
    //       // console.log('Upload concluído');
    //     } else if (event.type === HttpEventType.UploadProgress) {
    //       const percentDone = Math.round((event.loaded * 100) / (event.total || 100));

    //       console.log(`Progress: ${percentDone}`);

    //       this.progress.set(percentDone);
    //     }
    //   },
    //   error: () => {
    //     console.error('Error ao tentar fazer o upload');
    //   },
    //   complete: () => {
    //     console.log('Upload concluído');
    //   },
    // });
  }

  /**
   * O Angular não lida por a parte de download de arquivo,
   * o responsável é o navegador.
   *
   * O Código será em JavaScript puro e pode ser que seja
   * necessário fazer modificações de acordo com o navegador IE, Firefox or Chrome.
   */

  protected onDownloadExcel(): void {
    this.#uploadFileService
      .download(`${environment.BASE_URL}/download-excel`)
      .subscribe((res: any) => {
        this.#uploadFileService.handleFile(res, 'report-excel.xlsx');
      });
  }

  protected onDownloadPDF(): void {
    this.#uploadFileService
      .download(`${environment.BASE_URL}/download-pdf`)
      .subscribe((res: any) => {
        this.#uploadFileService.handleFile(res, 'report-pdf.pdf');
      });
  }
}
