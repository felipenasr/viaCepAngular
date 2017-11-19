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

    constructor(
        private service: ConsultaCepService        
    ){
    }
    
    consutalCep(e, zip){
        event.preventDefault();
        let path = this.service.url(zip) + "/json/";
        let data = this.service.getViaCep(path)
        .then(cepData => {
              let data = cepData;
              console.log("data");
              console.log(data);
              console.log("data._body");
              console.log(data._body);
        });
        
        console.log(data);
    }
    ngOnInit(){
        this.cep = new zipCode("");

    }