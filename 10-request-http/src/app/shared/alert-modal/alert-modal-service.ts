import { inject, Service } from '@angular/core';
import { type BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModal, type AlertType } from './alert-modal';

@Service()
export class AlertModalService {
  readonly #bsModalService = inject(BsModalService);

  private showAlert(message: string, type: AlertType, dismissTimeout?: number): void {
    const bsModalRef: BsModalRef = this.#bsModalService.show(AlertModal, {
      initialState: {
        message,
        type,
      },
      ignoreBackdropClick: true,
      keyboard: false,
    });

    if (dismissTimeout) {
      setTimeout(() => {
        bsModalRef.hide();
      }, dismissTimeout);
    }
  }

  showAlertDanger(message: string): void {
    this.showAlert(message, 'danger');
  }

  /**
   * Valores mágicos
   */
  showAlertSuccess(message: string): void {
    this.showAlert(message, 'success', 2000);
  }
}
