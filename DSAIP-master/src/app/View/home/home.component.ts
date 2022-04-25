import { Produto } from './../../../models/produto';
import { Component, OnInit } from '@angular/core';
import { ControleService } from 'src/services/controle.service';



// const LIST_LANCHONETE = [

//   {
//     id: 1,
//     nome: "Cachorro Quente",
//     valor: 9.90,
//     desc: "pão de leite, salsicha, tomate, cebola, pimentões (verde, vermelho, amarelo)",
//     foto: "/assets/img/hotdog.jpg",
//   },
//   {
//     id: 2,
//     nome: "Hamburguer",
//     valor: 11.90,
//     desc: "hamburguer bovino, queijo, alface, tomate, cebola, picles, maionese",
//     foto: "/assets/img/hamburguer.jpg",
//   },
//   {
//     id: 3,
//     nome: "Pão de Queijo",
//     valor: 3.90,
//     desc: "pão de queijo tradicional, pão de queijo com goiabada",
//     foto: "/assets/img/paoqueijo.jpeg",
//   },
//   {
//     id: 4,
//     nome: "Sanduiche Natural",
//     valor: 7.90,
//     desc: "frango, atum, pate de ricota",
//     foto: "/assets/img/sanduichenatural.jpeg",
//   },
//   {
//     id: 5,
//     nome: "Pastel Assado",
//     valor: 6.90,
//     desc: "frango, frango e palmito, carne, ricota",
//     foto: "/assets/img/pastelassado.jpg",
//   },
//   {
//     id: 6,
//     nome: "Quiche",
//     valor: 9.90,
//     desc: "queijo com palmito",
//     foto: "/assets/img/quiches.jpg",
//   },
//   {
//     id: 7,
//     nome: "Pastel de Belem",
//     valor: 8.90,
//     desc: "creme de confeiteiro",
//     foto: "/assets/img/pastelbelem.jpg",
//   },
//   {
//     id: 8,
//     nome: "Mini Pizza",
//     valor: 8.90,
//     desc: "queijo, presunto, tomate, azeitonas",
//     foto: "/assets/img/minipizza.jpg",
//   },
// ];



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //listaDelanchonete = LIST_LANCHONETE;

  produtos : Produto[] = [];

  constructor(
    private controle: ControleService
  ) { }

  ngOnInit(): void {
    this.controle.listarProdutos().subscribe(produtos =>{
      console.log(produtos);
      this.produtos = produtos;
    });
  }


}
