import { Component, inject, input } from '@angular/core';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

export type AlertType = 'success' | 'warning' | 'danger';
@Component({
  imports: [ModalModule],
  selector: 'app-alert-modal',
  styleUrl: './alert-modal.scss',
  templateUrl: './alert-modal.html',
})
export class AlertModal {
  readonly #bsModalRef = inject(BsModalRef);

  message = '';
  type: AlertType = 'success';

  protected onClose(): void {
    this.#bsModalRef.hide();
  }
}
