import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user:any[]=[]
  private baseUrl = 'http://localhost:3000/api'; // Adjust the base URL if needed

  constructor(private http: HttpClient) {}

  // ----- Airline Routes -----

  // Get all airlines
  getAllAirlines(): Observable<any> {
    return this.http.get(`${this.baseUrl}/airlines`);
  }

  // Search airlines by name
  searchAirlinesByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/airlines/search`, { params: { name } });
  }

  // Add new airline
  addAirline(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/airlines`, data);
  }

  // Update airline by ID
  updateAirline(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/airlines/${id}`, data);
  }

  // Delete airline by ID
  deleteAirline(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/airlines/${id}`);
  }

  // ----- Airport Routes -----

  // Get all airports
  getAllAirports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/airports`);
  }

  // Search airports by name
  searchAirportsByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/airports/search`, { params: { name } });
  }

  // Add new airport
  addAirport(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/airports`, data);
  }

  // Update airport by ID
  updateAirport(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/airports/${id}`, data);
  }

  // Delete airport by ID
  deleteAirport(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/airports/${id}`);
  }

  // ----- Vol Routes -----

  // Get all vols
  getAllVols(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vols`);
  }

  // Get vol by ID
  getVolById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/vols/${id}`);
  }

  // Add new vol
  addVol(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/vols`, data);
  }

  // Update vol by ID
  updateVol(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/vols/${id}`, data);
  }

  // Delete vol by ID
  deleteVol(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/vols/${id}`);
  }

  // Search vols with filters
  searchVols(filters: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/vols/search`, { params: filters });
  }

  // Check vol availability by ID
  checkVolAvailability(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/vols/${id}/availability`);
  }

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
