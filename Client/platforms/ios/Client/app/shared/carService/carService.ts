import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { concat } from "rxjs/observable/concat";

const http = require('http');

@Injectable()
export class CarService {
    // public http:Http;
    private proxy:string;
    constructor(proxy:string){
        this.proxy = proxy;
    }
    public unlock():void {
        this.request("unlock");
    }
    public lock():void {
        this.request("lock");
    }

    private request(action:string):Promise<Response>{
        let url = `http://${this.proxy}/${action}`;
        return http.request({ url: url, method: "GET" })
        .then((res)=>{
            console.log("asd");
        },
        (err)=>{
            console.log("ERROR");
        })
    }
}