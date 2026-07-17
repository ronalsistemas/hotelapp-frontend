import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Cliente } from "../model/cliente";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  private url: string = `${environment.HOST}/v1/clientes`;
  private readonly http = inject(HttpClient);

  findAll(){
    return this.http.get<Cliente[]>(this.url);
  }
}
