import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl = 'https://sheet.best/api/sheets/8a11fe2f-115f-4d7a-839c-06c55d024946'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private httppClient: HttpClient
  ) { }

  getUser(id: string): Observable<User[]> {
    return this.httppClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }

  getUsers(): Observable<User[]> {
    return this.httppClient.get<User[]>(this.apiUrl)
  }

  postUser(user: User): Observable<User> {
    return this.httppClient.post<User>(this.apiUrl, user, this.httpOptions)
  }
  deleteUser(id: number): Observable<User> {
    return this.httppClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  updateUser(id: String, user: User):Observable<User> {
    return this.httppClient.put<User>(`${this.apiUrl}/id/${id}`, user , this.httpOptions)
  }
}
