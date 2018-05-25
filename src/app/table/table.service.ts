import { Table } from './table.model';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
    constructor(private http: HttpClient) { }
   
    
    tables: Table[] = [
        {
        "id": 860,
        "firstName": "Superman",
        "lastName": "Yoda"
        },
        {
        "id": 870,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
        },
        {
        "id": 590,
        "firstName": "Toto",
        "lastName": "Titi"
        }
    ]
    dados(): Table[] {
        return this.tables;
    }

    loadData(){
        const URL = 'http://localhost:3000/data';
        return this.http.get(URL);
    }
}