import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { User, UserService } from "../../shared/user/user"

@Component({
    selector: "ns-app",
    providers: [UserService],
    templateUrl: "./pages/login/login.html",
    styleUrls: ["./pages/login/login-styles.css", "./pages/login/login.css"]
})
export class LoginComponent implements OnInit{
    public user:User;
    @ViewChild("container") container: ElementRef;
    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;
  
    constructor(private router: Router, private userService: UserService) {
      this.user = new User();
    }
    ngOnInit() {
    //   this.page.actionBarHidden = true;
    //   this.page.backgroundImage = "res://bg_login";
    }
    login() {
      this.userService.login(this.user)
      .then((proxy)=>{
          this.router.navigate(["/mainpage"], {
            replaceUrl: false,
            queryParams: {
                proxy: proxy
            }
        });
      })
      .catch(er=>alert(er.message)); 
    }
    toggleDisplay() {
    }
}