"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http = require('http');
var CarService = (function () {
    function CarService(proxy) {
        this.proxy = proxy;
    }
    CarService.prototype.unlock = function () {
        this.request("unlock");
    };
    CarService.prototype.lock = function () {
        this.request("lock");
    };
    CarService.prototype.request = function (action) {
        var url = "http://" + this.proxy + "/" + action;
        return http.request({ url: url, method: "GET" })
            .then(function (res) {
            console.log("asd");
        }, function (err) {
            console.log("ERROR");
        });
    };
    CarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [String])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFFM0MsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHN0I7SUFHSSxvQkFBWSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDTSwyQkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ00seUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLDRCQUFPLEdBQWYsVUFBZ0IsTUFBYTtRQUN6QixJQUFJLEdBQUcsR0FBRyxZQUFVLElBQUksQ0FBQyxLQUFLLFNBQUksTUFBUSxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDL0MsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUNELFVBQUMsR0FBRztZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBdEJRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTs7T0FDQSxVQUFVLENBdUJ0QjtJQUFELGlCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9jb25jYXRcIjtcblxuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhclNlcnZpY2Uge1xuICAgIC8vIHB1YmxpYyBodHRwOkh0dHA7XG4gICAgcHJpdmF0ZSBwcm94eTpzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJveHk6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5wcm94eSA9IHByb3h5O1xuICAgIH1cbiAgICBwdWJsaWMgdW5sb2NrKCk6dm9pZCB7XG4gICAgICAgIHRoaXMucmVxdWVzdChcInVubG9ja1wiKTtcbiAgICB9XG4gICAgcHVibGljIGxvY2soKTp2b2lkIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KFwibG9ja1wiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlcXVlc3QoYWN0aW9uOnN0cmluZyk6UHJvbWlzZTxSZXNwb25zZT57XG4gICAgICAgIGxldCB1cmwgPSBgaHR0cDovLyR7dGhpcy5wcm94eX0vJHthY3Rpb259YDtcbiAgICAgICAgcmV0dXJuIGh0dHAucmVxdWVzdCh7IHVybDogdXJsLCBtZXRob2Q6IFwiR0VUXCIgfSlcbiAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXNkXCIpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19