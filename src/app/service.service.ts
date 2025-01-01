import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user:any[]=[]
  constructor(private http:HttpClient) { }

  resgester(user:any):Observable<any>{
    return this.http.post('http://localhost:3000/api/register',user)
  }
  resgesterConfirme(user:any):Observable<any>{
    return this.http.post('http://localhost:3000/api/registerConfrim',user)
  }
  login(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/login', user);
  }

  getUserByToken(): Observable<any> {
    const token = this.getToken();
    if (token) {
      return this.http.post('http://localhost:3000/api/getUserByToken', { token });
    } else {
      throw new Error('No token found');
    }
  }

  savetoken(token:string){
    localStorage.setItem('token',token)
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
  }
  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`http://localhost:3000/api/sendmail`, { email });
  }
  
  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`http://localhost:3000/api/users/${id}`, userData);
  }
  
  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/api/users');
  }
  
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/users/${id}`);
  }
  
}
