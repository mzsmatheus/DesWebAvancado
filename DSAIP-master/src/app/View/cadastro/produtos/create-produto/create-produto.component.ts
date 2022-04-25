import { ControleService } from './../../../../../services/controle.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})


export class CreateProdutoComponent implements OnInit {

  produto : Produto = new Produto();

  constructor(
    private router: Router,
    private controle: ControleService
  ) { }

  ngOnInit(): void {
  }

  novoProduto(): void{
    this.controle.criarProdutos(this.produto).subscribe(() => {
      this.router.navigate(['/cadastro/produtos']);
    });
  }


}
