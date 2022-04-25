import { DeletePessoaComponent } from './View/cadastro/pessoas/delete-pessoa/delete-pessoa.component';
import { UpdatePessoaComponent } from './View/cadastro/pessoas/update-pessoa/update-pessoa.component';
import { CreatePessoaComponent } from './View/cadastro/pessoas/create-pessoa/create-pessoa.component';
import { ReadPessoaComponent } from './View/cadastro/pessoas/read-pessoa/read-pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeleteProdutoComponent } from './View/cadastro/produtos/delete-produto/delete-produto.component';
import { UpdateProdutoComponent } from './View/cadastro/produtos/update-produto/update-produto.component';
import { CreateProdutoComponent } from './View/cadastro/produtos/create-produto/create-produto.component';
import { ReadProdutoComponent } from './View/cadastro/produtos/read-produto/read-produto.component';

import { AdmComponent } from './View/adm/adm.component';
import { HomeComponent } from './View/home/home.component';
import { CadastroComponent } from './View/cadastro/cadastro.component';

const routes: Routes = [

  { path: '' , component: HomeComponent },
  { path: 'adm' , component: AdmComponent },
  { path: "adm/cadastro" , component: CadastroComponent },
  { path: "cadastro/produtos" , component: ReadProdutoComponent },
  { path: "produtos/incluir" , component: CreateProdutoComponent },
  { path: "produtos/editar/:id" , component: UpdateProdutoComponent },
  { path: "produtos/excluir/:id" , component: DeleteProdutoComponent },
  { path: "cadastro/pessoas" , component: ReadPessoaComponent },
  { path: "pessoas/incluir" , component: CreatePessoaComponent },
  { path: "pessoas/editar/:id" , component: UpdatePessoaComponent },
  { path: "pessoas/excluir/:id" , component: DeletePessoaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
