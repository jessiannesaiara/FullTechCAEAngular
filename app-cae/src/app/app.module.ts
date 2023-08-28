import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartamentoNovoComponent } from './components/apartamentos/apartamento-novo/apartamento-novo.component';
import { ApartamentosListaComponent } from './components/apartamentos/apartamentos-lista/apartamentos-lista.component';
import { ApartamentosComponent } from './components/apartamentos/apartamentos/apartamentos.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VeiculosListaComponent } from './components/veiculos/veiculos-lista/veiculos-lista.component';
import { VeiculosNovoComponent } from './components/veiculos/veiculos-novo/veiculos-novo.component';
import { VeiculosComponent } from './components/veiculos/veiculos/veiculos.component';
import { ApartamentoService } from './services/apartamento.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ApresentacaoComponent,
    NotFoundComponent,
    ApartamentosComponent,
    ApartamentoNovoComponent,
    ApartamentosListaComponent,
    VeiculosComponent,
    VeiculosNovoComponent,
    VeiculosListaComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApartamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
