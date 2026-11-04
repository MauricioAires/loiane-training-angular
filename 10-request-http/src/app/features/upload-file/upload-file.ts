import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-upload-file',
  styleUrl: './upload-file.scss',
  templateUrl: './upload-file.html',
})
export class UploadFile {
  protected onChange(e: Event): void {
    const selectedFiles = (e.target as HTMLInputElement).files;

    if (!selectedFiles) return;
    if (selectedFiles.length === 0) return;

    const fileNames = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
    }

    console.log(fileNames.join(', '));
  }
}
