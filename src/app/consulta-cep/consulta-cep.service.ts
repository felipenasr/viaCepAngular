import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/toPromise";


@Injectable()


export class ConsultaCepService{

	private api_url: string = "https://viacep.com.br/ws/";

	private headers = new Headers({
		'Content-Type': 'application/json', 
		'Accept': 'application/json'

	});
	
    constructor(
		private http: Http
	) { }
    
    url(path: string) {
		return this.api_url + path;
    }

	getViaCep(url) { 
		return this.http.get(url)
            .toPromise();
    }
}