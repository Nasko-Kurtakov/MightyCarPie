import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { concat } from "rxjs/observable/concat";

const http = require("http");
import { CarService } from "../carService/carService"

export class User {
    email: string;
    password: string;
}
@Injectable()
export class UserService {
    constructor(private http:Http){}

    login(user:User){
        const header:Headers=new Headers();
        header.append("Accept","application/json");
        header.append("Content-Type","application/json");
        header.append("apikey","WeavedDemoKey$2015");

        return http.request({
            url:'https://api.weaved.com/v22/api/user/login/nasko.kurtakov@gmail.com/tgnim1101973507',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'apikey': 'WeavedDemoKey$2015'
            }
        })
        .then((res)=>{
            return this.getListDevices(res.content.toJSON().token);
        },(e)=>{
            console.log("1 Erorche");
        })            
    }
    private getListDevices(token:string) {
        return http.request({
            url:'https://api.weaved.com/v22/api/device/list/all',
            method: 'GET',
            headers: {
                    'Accept': 'application/json',
                    'apikey': 'WeavedDemoKey$2015',
                    'token': token,
                    'Content-Type': 'application/json'
            }
        })
        .then(res => {
            res = res.content.toJSON()
            let service = res["devices"].find(item => item.devicealias === "test_http_8080");
            return this.connect(service.deviceaddress,token);
        },
        (err)=>{
            console.log("2 - Errorche ",err);
        });
    }
    private connect(uid:string,token:string){

        return http.request({
            url:'https://api.weaved.com/v22/api/device/connect',
            method:'POST',
            headers:{
                "Accept":"*/*",
                "apikey":"WeavedDemoKey$2015",
                "Content-Type":"application/json",
                "content-length":"80",
                "token":token
            },
            content:JSON.stringify({
                deviceaddress: uid,
                hostip: "36.143.180.96",
                wait: true
            })
        })
        .then((res)=>{
            return "127.0.0.1:8080";
            // responseJSON["connection"].proxy;
            // res = res.content.toJSON();
            // if(res.status !== "true")
            // {
            //     throw new Error("Connection failed to establish");
            // }
        },
        (err)=>{

        });
    }
}
