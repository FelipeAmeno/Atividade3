import { Component, OnInit } from '@angular/core';
import { pessoas } from './pessoas.model'; //importando o model
import { PessoasService } from '../pessoas.service';
@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {




  constructor(private pessoasService: PessoasService) {
  }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas();
    console.log(this.pessoasArray);
  }


  pessoasArray: pessoas[] = [];
  pessoa: pessoas;
  detalhePessoa: boolean = false;

  alterarPessoas(_pessoas) {
    this.pessoasService.alterarPessoas(_pessoas);
  }


  detalheDaPessoa(pessoa) {
    console.log(pessoa);
    this.detalhePessoa = true;
    this.pessoa = pessoa;
  }

  getPessoas(id) {
    this.pessoasArray.forEach(pessoas => {
      if (pessoas.id == id) {
        return pessoas;
      }
    })
  }


}
