import { Component, OnInit } from "@angular/core";
import { FormGroup, FormsModule, FormBuilder, FormControl } from "@angular/forms";
import { HttpModule,Http } from "@angular/http";
import { ConsultaCepService } from "./consulta-cep.service";
import { zipCode } from "./zipcode.model";
@Component({
    moduleId: module.id,
    selector: "consultacep",
    templateUrl: "./consulta-cep.component.html"
})

export class ConsultaCepCompent implements OnInit{
    
    consultaCepForm: FormGroup;
    cep: zipCode;
    caue: {};
    
    constructor(
        private service: ConsultaCepService        
    ){
    }
    
    consutalCep(e, zip){
        event.preventDefault();
        let path = this.service.url(zip) + "/json/";
        this.service.getViaCep(path)
        .then(cepData => {
              this.cep = cepData.json();
              console.log(this.cep);
            });
            

        
    }

    cauezeraGB(){
        this.service.getGenteBoa().then((res)=>{
         return res;

        })
    }
    ngOnInit(){
        this.cep = new zipCode("");

    }
}