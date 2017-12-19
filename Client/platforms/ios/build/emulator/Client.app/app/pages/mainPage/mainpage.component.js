"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var carService_1 = require("../../shared/carService/carService");
var MainPageComponent = (function () {
    function MainPageComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.user = new user_1.User();
        this.carService = new carService_1.CarService(this.route.snapshot.params.proxy);
    }
    MainPageComponent.prototype.lock = function () {
        this.carService.lock();
    };
    MainPageComponent.prototype.unlock = function () {
        this.carService.unlock();
    };
    MainPageComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "./pages/mainPage/mainpage.html",
            styleUrls: ["./pages/mainPage/mainpage-styles.css", "./pages/mainPage/mainpage.css"],
            providers: [user_1.UserService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, user_1.UserService])
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5RDtBQUN6RCwrQ0FBMEQ7QUFDMUQsaUVBQWdFO0FBUWhFO0lBR0ksMkJBQW9CLEtBQXFCLEVBQVUsV0FBd0I7UUFBdkQsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN6RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxnQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsa0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQVpRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSwrQkFBK0IsQ0FBQztZQUNwRixTQUFTLEVBQUMsQ0FBQyxrQkFBVyxDQUFDO1NBQzFCLENBQUM7eUNBSTZCLHVCQUFjLEVBQXVCLGtCQUFXO09BSGxFLGlCQUFpQixDQWE3QjtJQUFELHdCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiXG5pbXBvcnQgeyBDYXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jYXJTZXJ2aWNlL2NhclNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9tYWluUGFnZS9tYWlucGFnZS5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL21haW5QYWdlL21haW5wYWdlLXN0eWxlcy5jc3NcIiwgXCIuL3BhZ2VzL21haW5QYWdlL21haW5wYWdlLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluUGFnZUNvbXBvbmVudCB7XG4gICAgcHVibGljIHVzZXI6VXNlcjtcbiAgICBwcml2YXRlIGNhclNlcnZpY2U6Q2FyU2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICB0aGlzLmNhclNlcnZpY2UgPSBuZXcgQ2FyU2VydmljZSh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5wcm94eSk7XG4gICAgfVxuICAgIGxvY2soKXtcbiAgICAgICAgdGhpcy5jYXJTZXJ2aWNlLmxvY2soKTtcbiAgICB9XG4gICAgdW5sb2NrKCl7XG4gICAgICAgIHRoaXMuY2FyU2VydmljZS51bmxvY2soKTtcbiAgICB9XG59Il19