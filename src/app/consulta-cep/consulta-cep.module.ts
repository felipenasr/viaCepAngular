import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConsultaCepCompent } from "./consulta-cep.component";
import { ConsultaCepService } from "./consulta-cep.service";

@NgModule({
    declarations: [ConsultaCepCompent],
    imports: [
        FormsModule
    ],
    exports: [ConsultaCepCompent],
    providers: [ConsultaCepService]
})

export class ConsultaCepModule {}