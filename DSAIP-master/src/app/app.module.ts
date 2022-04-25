import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './View/home/home.component';
import { AdmComponent } from './View/adm/adm.component';
import { MainComponent } from './template/main/main.component';

import { CadastroComponent } from './View/cadastro/cadastro.component';
import { CreateProdutoComponent } from './View/cadastro/produtos/create-produto/create-produto.component';
import { ReadProdutoComponent } from './View/cadastro/produtos/read-produto/read-produto.component';
import { UpdateProdutoComponent } from './View/cadastro/produtos/update-produto/update-produto.component';
import { DeleteProdutoComponent } from './View/cadastro/produtos/delete-produto/delete-produto.component';
import { CreatePessoaComponent } from './View/cadastro/pessoas/create-pessoa/create-pessoa.component';
import { ReadPessoaComponent } from './View/cadastro/pessoas/read-pessoa/read-pessoa.component';
import { UpdatePessoaComponent } from './View/cadastro/pessoas/update-pessoa/update-pessoa.component';
import { DeletePessoaComponent } from './View/cadastro/pessoas/delete-pessoa/delete-pessoa.component';



import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AdmComponent,
    MainComponent,
    CadastroComponent,
    CreateProdutoComponent,
    ReadProdutoComponent,
    UpdateProdutoComponent,
    DeleteProdutoComponent,
    CreatePessoaComponent,
    ReadPessoaComponent,
    UpdatePessoaComponent,
    DeletePessoaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
