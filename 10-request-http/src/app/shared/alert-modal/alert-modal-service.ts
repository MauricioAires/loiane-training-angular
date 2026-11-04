import { inject, Service } from '@angular/core';
import { type BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModal, type AlertType } from './alert-modal';
import { ConfirmModal } from '../confirm-modal/confirm-modal';

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

  showConfirm(title: string, message: string, confirmTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.#bsModalService.show(ConfirmModal, {
      initialState: {
        message,
        title,
        cancelTxt,
        confirmTxt,
      },
      ignoreBackdropClick: false,
      keyboard: true,
    });

    return (<ConfirmModal>bsModalRef.content).confirmResult;
  }
}
