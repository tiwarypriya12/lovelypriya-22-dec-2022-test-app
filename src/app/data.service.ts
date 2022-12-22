import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { List, UsersList, CommentList } from './list.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _messageSubject = new Subject<boolean>();
  messageObservable$ = this._messageSubject.asObservable();

  constructor(private http: HttpClient) { }
  setData(message: boolean) {
    this._messageSubject.next(message);
  }

  getUserData() {
    return this.http.get<UsersList[]>("./assets/json/usersList.json");
  }

  getCommentData() {
    return this.http.get<CommentList[]>("./assets/json/commentList.json");
  }

  getList() {
    return this.http.get<List[]>("./assets/json/productsList.json");
  }

  
}
