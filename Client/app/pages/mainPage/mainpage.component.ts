import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User, UserService } from "../../shared/user/user"
import { CarService } from "../../shared/carService/carService";
import { CarLocker } from "../../shared/carLocker/carLocker";

@Component({
    selector: "ns-app",
    templateUrl: "./pages/mainPage/mainpage.html",
    styleUrls: ["./pages/mainPage/mainpage-styles.css", "./pages/mainPage/mainpage.css"],
    providers:[UserService]
})
export class MainPageComponent {
    public user:User;
    public carLocker:CarLocker;
    public isLocked:boolean;
    constructor(private route: ActivatedRoute, private userService: UserService) {
        this.user = new User();
        this.carLocker = new CarLocker({isLocked:false,carService: new CarService(this.route.snapshot.queryParams.proxy)});
    }
    
    carLockUnlock(event){
        if(this.carLocker.isLockedObs.get("isLocked"))
            this.carLocker.unlock();
        else
            this.carLocker.lock();
    }
}
