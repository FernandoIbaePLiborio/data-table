import { TableService } from './table.service';
import { Component, OnInit } from '@angular/core';
import { Table } from './table.model';
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { Subject } from 'rxjs';

@Component({
  selector: 'pro-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dados: any = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private tableService: TableService) { }

  /* ngOnInit(): void {//tabela simples numeral
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3
    };
  } */
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.tableService.loadData().subscribe(result => {
      this.dados = result;
      this.dtTrigger.next();
    });
  }
}
