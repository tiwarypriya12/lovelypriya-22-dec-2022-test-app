import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  private _messageSubject = new Subject<boolean>();
  messageObservable$ = this._messageSubject.asObservable();

  constructor() { }

  setData(message: boolean) {
    this._messageSubject.next(message);
  }
}
