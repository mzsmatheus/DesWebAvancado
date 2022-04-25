import { ControleService } from './../../../../../services/controle.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto';

@Component({
  selector: 'app-read-produto',
  templateUrl: './read-produto.component.html',
  styleUrls: ['./read-produto.component.css']
})
export class ReadProdutoComponent implements OnInit {

  produto : Produto[] = [];

  colunas : string[] = ['id','nome', 'desc', 'valor' ,'funcoes'];

  constructor(
    private controle: ControleService
  ) { }

  ngOnInit(): void {
    this.controle.listarProdutos().subscribe(produto =>{
      console.log(produto);
      this.produto = produto;
    });
  }

}
