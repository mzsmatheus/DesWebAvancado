import { ControleService } from 'src/services/controle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/models/pessoa';

@Component({
  selector: 'app-delete-pessoa',
  templateUrl: './delete-pessoa.component.html',
  styleUrls: ['./delete-pessoa.component.css']
})
export class DeletePessoaComponent implements OnInit {

  pessoa : Pessoa = new Pessoa();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private controle: ControleService
  ) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.controle.buscarPessoas(Number(str)).subscribe((pessoa) => {
      this.pessoa = pessoa;
    })
  }

  excluirPessoa(){
    this.controle.deletarPessoas(this.pessoa.id).subscribe(() => {
      this.router.navigate(['/cadastro/pessoas/'])
    })
  }

}

