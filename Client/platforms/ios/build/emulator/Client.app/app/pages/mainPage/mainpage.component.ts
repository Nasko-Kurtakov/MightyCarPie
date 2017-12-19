import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User, UserService } from "../../shared/user/user"
import { CarService } from "../../shared/carService/carService";

@Component({
    selector: "ns-app",
    templateUrl: "./pages/mainPage/mainpage.html",
    styleUrls: ["./pages/mainPage/mainpage-styles.css", "./pages/mainPage/mainpage.css"],
    providers:[UserService]
})
export class MainPageComponent {
    public user:User;
    private carService:CarService;
    constructor(private route: ActivatedRoute, private userService: UserService) {
      this.user = new User();
      this.carService = new CarService(this.route.snapshot.params.proxy);
    }
    lock(){
        this.carService.lock();
    }
    unlock(){
        this.carService.unlock();
    }
}