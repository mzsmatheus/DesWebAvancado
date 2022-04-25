import { ControleService } from 'src/services/controle.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/models/pessoa';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.css']
})
export class CreatePessoaComponent implements OnInit {

  pessoa : Pessoa = new Pessoa();

  constructor(
    private router: Router,
    private controle: ControleService
  ) { }

  ngOnInit(): void {
  }

  novaPessoa(): void{
    this.controle.criarPessoas(this.pessoa).subscribe(() => {
      this.router.navigate(['/cadastro/pessoas']);
    });
  }

}
