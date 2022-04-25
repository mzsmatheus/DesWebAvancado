import { ControleService } from 'src/services/controle.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/models/pessoa';

@Component({
  selector: 'app-read-pessoa',
  templateUrl: './read-pessoa.component.html',
  styleUrls: ['./read-pessoa.component.css']
})
export class ReadPessoaComponent implements OnInit {

  pessoa : Pessoa[] = [];

  colunas : string[] = ['id', 'nome' ,'email','atalho', 'funcoes'];

  constructor(
    private controle: ControleService
  ) { }

  ngOnInit(): void {
    this.controle.listarPessoas().subscribe(pessoa => {
      console.log(pessoa);
      this.pessoa = pessoa;
    })
  }

}
