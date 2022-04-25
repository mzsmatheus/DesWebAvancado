import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pessoa } from 'src/models/pessoa';
import { Produto } from 'src/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ControleService {

  URLProduto = "http://localhost:3001/produtos";
  URLPessoa = "http://localhost:3001/pessoas";

  constructor(
    private http: HttpClient
  ) { }

  criarProdutos(produto : Produto): Observable<any> {
    return this.http.post(this.URLProduto, produto);
  }

  listarProdutos(){
    return this.http.get<Produto[]>(this.URLProduto);
  }

  buscarProdutos(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.URLProduto + "/" + id);
  }

  atualizarProdutos(produto : Produto, id : number) : Observable<any> {
    return this.http.put(this.URLProduto + "/" + id, produto);
  }

  deletarProdutos(id: number) : Observable<any> {
    return this.http.delete(this.URLProduto + "/" + id);
  }

  /*--------------------PESSOAS--------------------*/
  criarPessoas(pessoa : Pessoa): Observable<any> {
    return this.http.post(this.URLPessoa, pessoa);
  }

  listarPessoas(){
    return this.http.get<Pessoa[]>(this.URLPessoa);
  }

  buscarPessoas(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.URLPessoa + "/" + id);
  }

  atualizarPessoas(pessoa : Pessoa, id: number) : Observable<any> {
    return this.http.put(this.URLPessoa + "/" + id, pessoa);
  }

  deletarPessoas(id: number) : Observable<any> {
    return this.http.delete(this.URLPessoa + "/" + id);
  }

}

