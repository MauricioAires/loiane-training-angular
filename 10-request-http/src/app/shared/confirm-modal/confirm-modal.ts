import { Component, inject, input, OnInit } from '@angular/core';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  imports: [ModalModule],
  selector: 'app-confirm-modal',
  styleUrl: './confirm-modal.scss',
  templateUrl: './confirm-modal.html',
})
export class ConfirmModal {
  readonly #bsModalRef = inject(BsModalRef);

  /**
   * Não da para utilizar um output nessa situação porque
   * não é o componente pai que utiliza direto.
   */
  public title = '';
  public message = '';
  public cancelTxt = 'Cancelar';
  public confirmTxt = 'Sim';

  public confirmResult: Subject<boolean> = new Subject();

  protected onClose(): void {
    this.#confirmAndClose(false);
  }

  protected onConfirm(): void {
    this.#confirmAndClose(true);
  }

  #confirmAndClose(status: boolean): void {
    this.confirmResult.next(status);
    this.#bsModalRef.hide();
  }
}
