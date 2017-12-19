"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var http = require("http");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        var header = new http_1.Headers();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/json");
        header.append("apikey", "WeavedDemoKey$2015");
        return http.request({
            url: 'https://api.weaved.com/v22/api/user/login/nasko.kurtakov@gmail.com/tgnim1101973507',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'apikey': 'WeavedDemoKey$2015'
            }
        })
            .then(function (res) {
            return _this.getListDevices(res.content.toJSON().token);
        }, function (e) {
            console.log("1 Erorche");
        });
    };
    UserService.prototype.getListDevices = function (token) {
        var _this = this;
        return http.request({
            url: 'https://api.weaved.com/v22/api/device/list/all',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'apikey': 'WeavedDemoKey$2015',
                'token': token,
                'Content-Type': 'application/json'
            }
        })
            .then(function (res) {
            res = res.content.toJSON();
            var service = res["devices"].find(function (item) { return item.devicealias === "test_http_8080"; });
            return _this.connect(service.deviceaddress, token);
        }, function (err) {
            console.log("2 - Errorche ", err);
        });
    };
    UserService.prototype.connect = function (uid, token) {
        return http.request({
            url: 'https://api.weaved.com/v22/api/device/connect',
            method: 'POST',
            headers: {
                "Accept": "*/*",
                "apikey": "WeavedDemoKey$2015",
                "Content-Type": "application/json",
                "content-length": "80",
                "token": token
            },
            content: JSON.stringify({
                deviceaddress: uid,
                hostip: "36.143.180.96",
                wait: true
            })
        })
            .then(function (res) {
            return "127.0.0.1";
            // responseJSON["connection"].proxy;
            // res = res.content.toJSON();
            // if(res.status !== "true")
            // {
            //     throw new Error("Connection failed to establish");
            // }
        }, function (err) {
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBRXhELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFHL0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzdCO0lBQUE7SUFHQSxDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksb0JBQUk7QUFLakI7SUFDSSxxQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRSxDQUFDO0lBRWhDLDJCQUFLLEdBQUwsVUFBTSxJQUFTO1FBQWYsaUJBb0JDO1FBbkJHLElBQU0sTUFBTSxHQUFTLElBQUksY0FBTyxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEIsR0FBRyxFQUFDLG9GQUFvRjtZQUN4RixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRTtnQkFDTCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDO1NBQ0osQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFBQyxVQUFDLENBQUM7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNPLG9DQUFjLEdBQXRCLFVBQXVCLEtBQVk7UUFBbkMsaUJBbUJDO1FBbEJHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hCLEdBQUcsRUFBQyxnREFBZ0Q7WUFDcEQsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsY0FBYyxFQUFFLGtCQUFrQjthQUN6QztTQUNKLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDMUIsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEtBQUssZ0JBQWdCLEVBQXJDLENBQXFDLENBQUMsQ0FBQztZQUNqRixNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUMsRUFDRCxVQUFDLEdBQUc7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTyw2QkFBTyxHQUFmLFVBQWdCLEdBQVUsRUFBQyxLQUFZO1FBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hCLEdBQUcsRUFBQywrQ0FBK0M7WUFDbkQsTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUM7Z0JBQ0osUUFBUSxFQUFDLEtBQUs7Z0JBQ2QsUUFBUSxFQUFDLG9CQUFvQjtnQkFDN0IsY0FBYyxFQUFDLGtCQUFrQjtnQkFDakMsZ0JBQWdCLEVBQUMsSUFBSTtnQkFDckIsT0FBTyxFQUFDLEtBQUs7YUFDaEI7WUFDRCxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsYUFBYSxFQUFFLEdBQUc7Z0JBQ2xCLE1BQU0sRUFBRSxlQUFlO2dCQUN2QixJQUFJLEVBQUUsSUFBSTthQUNiLENBQUM7U0FDTCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNOLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDbkIsb0NBQW9DO1lBQ3BDLDhCQUE4QjtZQUM5Qiw0QkFBNEI7WUFDNUIsSUFBSTtZQUNKLHlEQUF5RDtZQUN6RCxJQUFJO1FBQ1IsQ0FBQyxFQUNELFVBQUMsR0FBRztRQUVKLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTFFUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBRWdCLFdBQUk7T0FEcEIsV0FBVyxDQTJFdkI7SUFBRCxrQkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IGNvbmNhdCB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvY29uY2F0XCI7XG5cbmNvbnN0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tIFwiLi4vY2FyU2VydmljZS9jYXJTZXJ2aWNlXCJcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbn1cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe31cblxuICAgIGxvZ2luKHVzZXI6VXNlcil7XG4gICAgICAgIGNvbnN0IGhlYWRlcjpIZWFkZXJzPW5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlci5hcHBlbmQoXCJBY2NlcHRcIixcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIGhlYWRlci5hcHBlbmQoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIGhlYWRlci5hcHBlbmQoXCJhcGlrZXlcIixcIldlYXZlZERlbW9LZXkkMjAxNVwiKTtcblxuICAgICAgICByZXR1cm4gaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDonaHR0cHM6Ly9hcGkud2VhdmVkLmNvbS92MjIvYXBpL3VzZXIvbG9naW4vbmFza28ua3VydGFrb3ZAZ21haWwuY29tL3RnbmltMTEwMTk3MzUwNycsXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnYXBpa2V5JzogJ1dlYXZlZERlbW9LZXkkMjAxNSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExpc3REZXZpY2VzKHJlcy5jb250ZW50LnRvSlNPTigpLnRva2VuKTtcbiAgICAgICAgfSwoZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSBFcm9yY2hlXCIpO1xuICAgICAgICB9KSAgICAgICAgICAgIFxuICAgIH1cbiAgICBwcml2YXRlIGdldExpc3REZXZpY2VzKHRva2VuOnN0cmluZykge1xuICAgICAgICByZXR1cm4gaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDonaHR0cHM6Ly9hcGkud2VhdmVkLmNvbS92MjIvYXBpL2RldmljZS9saXN0L2FsbCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnYXBpa2V5JzogJ1dlYXZlZERlbW9LZXkkMjAxNScsXG4gICAgICAgICAgICAgICAgICAgICd0b2tlbic6IHRva2VuLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICByZXMgPSByZXMuY29udGVudC50b0pTT04oKVxuICAgICAgICAgICAgbGV0IHNlcnZpY2UgPSByZXNbXCJkZXZpY2VzXCJdLmZpbmQoaXRlbSA9PiBpdGVtLmRldmljZWFsaWFzID09PSBcInRlc3RfaHR0cF84MDgwXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdChzZXJ2aWNlLmRldmljZWFkZHJlc3MsdG9rZW4pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIyIC0gRXJyb3JjaGUgXCIsZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgY29ubmVjdCh1aWQ6c3RyaW5nLHRva2VuOnN0cmluZyl7XG5cbiAgICAgICAgcmV0dXJuIGh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6J2h0dHBzOi8vYXBpLndlYXZlZC5jb20vdjIyL2FwaS9kZXZpY2UvY29ubmVjdCcsXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIjpcIiovKlwiLFxuICAgICAgICAgICAgICAgIFwiYXBpa2V5XCI6XCJXZWF2ZWREZW1vS2V5JDIwMTVcIixcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiY29udGVudC1sZW5ndGhcIjpcIjgwXCIsXG4gICAgICAgICAgICAgICAgXCJ0b2tlblwiOnRva2VuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDpKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZGV2aWNlYWRkcmVzczogdWlkLFxuICAgICAgICAgICAgICAgIGhvc3RpcDogXCIzNi4xNDMuMTgwLjk2XCIsXG4gICAgICAgICAgICAgICAgd2FpdDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIHJldHVybiBcIjEyNy4wLjAuMVwiO1xuICAgICAgICAgICAgLy8gcmVzcG9uc2VKU09OW1wiY29ubmVjdGlvblwiXS5wcm94eTtcbiAgICAgICAgICAgIC8vIHJlcyA9IHJlcy5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgLy8gaWYocmVzLnN0YXR1cyAhPT0gXCJ0cnVlXCIpXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29ubmVjdGlvbiBmYWlsZWQgdG8gZXN0YWJsaXNoXCIpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyKT0+e1xuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==