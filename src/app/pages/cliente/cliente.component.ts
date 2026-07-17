import { Component, inject, signal, viewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {

  private readonly clienteService = inject(ClienteService);
  protected dataSource = signal(new MatTableDataSource<Cliente>());
  protected paginator = viewChild(MatPaginator);
  protected sort = viewChild(MatSort);

  protected displayedColumns: string[] = ['idCustomer', 'firstName', 'lastName', 'dni'];

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(data => {
      this.dataSource.set(new MatTableDataSource<Cliente>(data));
      this.dataSource().paginator = this.paginator();
      this.dataSource().sort = this.sort();
     });
   }

   //filtro y busqueda de datos en la tabla
  applyFilter(e: any){
    const filterValue = e.target.value;
    this.dataSource().filter = filterValue.trim().toLowerCase();
   }
}
