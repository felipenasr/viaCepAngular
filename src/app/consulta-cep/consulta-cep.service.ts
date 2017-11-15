import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/toPromise";


@Injectable()


export class ConsultaCepService{

	private api_url: string = "https://viacep.com.br/ws/";
	
    constructor(
		private http: Http
	) { }
    
    url(path: string) {
		return this.api_url + path;
    }
    
    headers() {
		let headersParams = { 'Content-Type': 'application/json' };
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
    	return options;
	}

	getViaCep(url) { 
		return this.http.get(url)
            .toPromise().then(response => response.json());
    }
}