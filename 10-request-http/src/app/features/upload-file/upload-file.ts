import { Component, inject, signal } from '@angular/core';
import { UploadFileService } from './services/upload-file/upload-file-service';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';

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
  protected readonly files = signal<Set<File>>(new Set());

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

    this.files.set(files);

    // console.log(fileNames.join(', '));
  }

  protected onUpload(): void {
    if (Array.from(this.files()).length === 0) return;

    /**
     * Esse tipo de requisição não pode trabalhar
     * com take 1 porque o CORS faz uma chamada de teste
     */

    /**
     * template literal
     */
    this.#uploadFileService.upload(this.files(), `${environment.BASE_URL}/upload`).subscribe({
      next: () => {
        console.log('Upload concluído');
      },
      error: () => {
        console.error('Error ao tentar fazer o upload');
      },
    });
  }
}
