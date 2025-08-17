import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  private statsUrl = 'http://127.0.0.1:8001/stats';
  private spinUrl = 'http://127.0.0.1:8001/spin';

  getStats(): Observable<any> {
    console.log("stats url")
    return this.http.get<any>(this.statsUrl);
  }

  getSpin(): Observable<any> {
    console.log("spin url")
    return this.http.get<any>(this.spinUrl);
  }
}
