"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var carService_1 = require("../../shared/carService/carService");
var carLocker_1 = require("../../shared/carLocker/carLocker");
var MainPageComponent = (function () {
    function MainPageComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.user = new user_1.User();
        this.carLocker = new carLocker_1.CarLocker({ isLocked: false, carService: new carService_1.CarService(this.route.snapshot.queryParams.proxy) });
    }
    MainPageComponent.prototype.carLockUnlock = function (event) {
        if (this.carLocker.isLockedObs.get("isLocked"))
            this.carLocker.unlock();
        else
            this.carLocker.lock();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbnBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5RDtBQUN6RCwrQ0FBMEQ7QUFDMUQsaUVBQWdFO0FBQ2hFLDhEQUE2RDtBQVE3RDtJQUlJLDJCQUFvQixLQUFxQixFQUFVLFdBQXdCO1FBQXZELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUUsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsSUFBSTtZQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQWRRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSwrQkFBK0IsQ0FBQztZQUNwRixTQUFTLEVBQUMsQ0FBQyxrQkFBVyxDQUFDO1NBQzFCLENBQUM7eUNBSzZCLHVCQUFjLEVBQXVCLGtCQUFXO09BSmxFLGlCQUFpQixDQWU3QjtJQUFELHdCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiXG5pbXBvcnQgeyBDYXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jYXJTZXJ2aWNlL2NhclNlcnZpY2VcIjtcbmltcG9ydCB7IENhckxvY2tlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY2FyTG9ja2VyL2NhckxvY2tlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL21haW5QYWdlL21haW5wYWdlLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvbWFpblBhZ2UvbWFpbnBhZ2Utc3R5bGVzLmNzc1wiLCBcIi4vcGFnZXMvbWFpblBhZ2UvbWFpbnBhZ2UuY3NzXCJdLFxuICAgIHByb3ZpZGVyczpbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE1haW5QYWdlQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgdXNlcjpVc2VyO1xuICAgIHB1YmxpYyBjYXJMb2NrZXI6Q2FyTG9ja2VyO1xuICAgIHB1YmxpYyBpc0xvY2tlZDpib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB0aGlzLmNhckxvY2tlciA9IG5ldyBDYXJMb2NrZXIoe2lzTG9ja2VkOmZhbHNlLGNhclNlcnZpY2U6IG5ldyBDYXJTZXJ2aWNlKHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXMucHJveHkpfSk7XG4gICAgfVxuICAgIFxuICAgIGNhckxvY2tVbmxvY2soZXZlbnQpe1xuICAgICAgICBpZih0aGlzLmNhckxvY2tlci5pc0xvY2tlZE9icy5nZXQoXCJpc0xvY2tlZFwiKSlcbiAgICAgICAgICAgIHRoaXMuY2FyTG9ja2VyLnVubG9jaygpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmNhckxvY2tlci5sb2NrKCk7XG4gICAgfVxufVxuIl19