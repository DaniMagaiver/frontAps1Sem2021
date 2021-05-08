import { Component } from "@angular/core";
import { MainService } from "src/app/services/mainpage.service";

@Component({
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent{
    conversas = [];
    conversasFiltradas = [];
    valorDigitado:string;
    constructor(private service:MainService){
    }

    ngOnInit(){
      this.getConversas();
    }
    receberContatoOuConversaPesquisado(valorDigitado:string){
        this.valorDigitado = valorDigitado;
    }

    getConversas():void{
        this.service.getContatos().subscribe((res)=>{
            // this.conversas = res
         })
    }
}