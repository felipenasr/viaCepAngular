import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/toPromise";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()


export class ConsultaCepService{

	private api_url: string = "https://viacep.com.br/ws/";
	private url_caue: string = "http://192.168.1.138:3000/api/bilhetes-aereos"
	private headers_caue = new Headers ({
		"Content-Type": "application/json",
		"Accept": "application/json",
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNTExMjg4OTIzLCJleHAiOjE1MTEyODkyMjMsIm5iZiI6MTUxMTI4ODkyMywianRpIjoiS1lhOXFVM3ZVN0lQWGVtaSIsInN1YiI6NywicHJ2IjoiMWViNjA1NzEyZjgyNDhhNTNhM2I0N2IzMjYyNzdiYmU4NGFlOTJlNCJ9.u_lA3UV723Fn5Tmr02h33yzwFUZPehurM4fl0_X3EY0"
	})
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
	
	getGenteBoa(): Promise<any>{
		return this.http.get(this.url_caue, {headers: this.headers_caue}).toPromise();
	}
	
	getViaCep(url) { 
		return this.http.get(url)
            .toPromise();
    }
}