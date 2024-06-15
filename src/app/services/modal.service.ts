import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  isModal = new BehaviorSubject<boolean>(false);
  isModal$ = this.isModal.asObservable();

  openModal() {
    this.isModal.next(true);
  }

  closeModal() {
    this.isModal.next(false);
  }

  

  constructor() {}
}
