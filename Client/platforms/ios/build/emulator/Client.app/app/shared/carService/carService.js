"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var https = require('https');
var CarService = (function () {
    // public http:Http;
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
        var _this = this;
        return new Promise(function (res, rej) {
            return https.get(_this.proxy + "/" + action, function (res) {
                res.on('data', function (d) {
                    console.log("data got");
                });
            }).on('error', function (e) {
                console.error(e);
            });
        });
    };
    CarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [String])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFFM0MsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHL0I7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBRWhDLENBQUM7SUFDTSwyQkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ00seUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLDRCQUFPLEdBQWYsVUFBZ0IsTUFBYTtRQUE3QixpQkFVQztRQVRHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBVyxVQUFDLEdBQUcsRUFBQyxHQUFHO1lBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxLQUFLLFNBQUksTUFBUSxFQUFFLFVBQUMsR0FBRztnQkFDNUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDO29CQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXRCUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7O09BQ0EsVUFBVSxDQXVCdEI7SUFBRCxpQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IGNvbmNhdCB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvY29uY2F0XCI7XG5cbmNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhclNlcnZpY2Uge1xuICAgIC8vIHB1YmxpYyBodHRwOkh0dHA7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm94eTpzdHJpbmcpe1xuXG4gICAgfVxuICAgIHB1YmxpYyB1bmxvY2soKTp2b2lkIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KFwidW5sb2NrXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgbG9jaygpOnZvaWQge1xuICAgICAgICB0aGlzLnJlcXVlc3QoXCJsb2NrXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVxdWVzdChhY3Rpb246c3RyaW5nKTpQcm9taXNlPFJlc3BvbnNlPntcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlPigocmVzLHJlaik9PntcbiAgICAgICAgICAgIHJldHVybiBodHRwcy5nZXQoYCR7dGhpcy5wcm94eX0vJHthY3Rpb259YCwgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHJlcy5vbignZGF0YScsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgZ290XCIpO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pLm9uKCdlcnJvcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==