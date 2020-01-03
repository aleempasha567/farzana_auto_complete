import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  data: []
}

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData[]>('https://my-json-server.typicode.com/typicode/demo/posts');
  }

}
