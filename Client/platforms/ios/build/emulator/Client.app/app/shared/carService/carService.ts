import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { concat } from "rxjs/observable/concat";

const https = require('https');

@Injectable()
export class CarService {
    // public http:Http;
    constructor(private proxy:string){

    }
    public unlock():void {
        this.request("unlock");
    }
    public lock():void {
        this.request("lock");
    }

    private request(action:string):Promise<Response>{
        return new Promise<Response>((res,rej)=>{
            return https.get(`${this.proxy}/${action}`, (res) => {
                res.on('data', (d) => {
                  console.log("data got");
                });              
              }).on('error', (e) => {
                console.error(e);
              });
        })
    }
}