import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getNames(){
    return this.http.get<any[]>('/assets/user.json')
    .pipe(
      map(response => response.map(item => item.name))
    )
  }
}
