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
            return "127.0.0.1:8080";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBRXhELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFHL0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzdCO0lBQUE7SUFHQSxDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksb0JBQUk7QUFLakI7SUFDSSxxQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRSxDQUFDO0lBRWhDLDJCQUFLLEdBQUwsVUFBTSxJQUFTO1FBQWYsaUJBb0JDO1FBbkJHLElBQU0sTUFBTSxHQUFTLElBQUksY0FBTyxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEIsR0FBRyxFQUFDLG9GQUFvRjtZQUN4RixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRTtnQkFDTCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDO1NBQ0osQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFBQyxVQUFDLENBQUM7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNPLG9DQUFjLEdBQXRCLFVBQXVCLEtBQVk7UUFBbkMsaUJBbUJDO1FBbEJHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hCLEdBQUcsRUFBQyxnREFBZ0Q7WUFDcEQsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsY0FBYyxFQUFFLGtCQUFrQjthQUN6QztTQUNKLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDMUIsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEtBQUssZ0JBQWdCLEVBQXJDLENBQXFDLENBQUMsQ0FBQztZQUNqRixNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUMsRUFDRCxVQUFDLEdBQUc7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTyw2QkFBTyxHQUFmLFVBQWdCLEdBQVUsRUFBQyxLQUFZO1FBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hCLEdBQUcsRUFBQywrQ0FBK0M7WUFDbkQsTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUM7Z0JBQ0osUUFBUSxFQUFDLEtBQUs7Z0JBQ2QsUUFBUSxFQUFDLG9CQUFvQjtnQkFDN0IsY0FBYyxFQUFDLGtCQUFrQjtnQkFDakMsZ0JBQWdCLEVBQUMsSUFBSTtnQkFDckIsT0FBTyxFQUFDLEtBQUs7YUFDaEI7WUFDRCxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsYUFBYSxFQUFFLEdBQUc7Z0JBQ2xCLE1BQU0sRUFBRSxlQUFlO2dCQUN2QixJQUFJLEVBQUUsSUFBSTthQUNiLENBQUM7U0FDTCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNOLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztZQUN4QixvQ0FBb0M7WUFDcEMsOEJBQThCO1lBQzlCLDRCQUE0QjtZQUM1QixJQUFJO1lBQ0oseURBQXlEO1lBQ3pELElBQUk7UUFDUixDQUFDLEVBQ0QsVUFBQyxHQUFHO1FBRUosQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBMUVRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFZ0IsV0FBSTtPQURwQixXQUFXLENBMkV2QjtJQUFELGtCQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9jb25jYXRcIjtcblxuY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuLi9jYXJTZXJ2aWNlL2NhclNlcnZpY2VcIlxuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7fVxuXG4gICAgbG9naW4odXNlcjpVc2VyKXtcbiAgICAgICAgY29uc3QgaGVhZGVyOkhlYWRlcnM9bmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZChcIkFjY2VwdFwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZChcImFwaWtleVwiLFwiV2VhdmVkRGVtb0tleSQyMDE1XCIpO1xuXG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOidodHRwczovL2FwaS53ZWF2ZWQuY29tL3YyMi9hcGkvdXNlci9sb2dpbi9uYXNrby5rdXJ0YWtvdkBnbWFpbC5jb20vdGduaW0xMTAxOTczNTA3JyxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdhcGlrZXknOiAnV2VhdmVkRGVtb0tleSQyMDE1J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGlzdERldmljZXMocmVzLmNvbnRlbnQudG9KU09OKCkudG9rZW4pO1xuICAgICAgICB9LChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIxIEVyb3JjaGVcIik7XG4gICAgICAgIH0pICAgICAgICAgICAgXG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TGlzdERldmljZXModG9rZW46c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBodHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOidodHRwczovL2FwaS53ZWF2ZWQuY29tL3YyMi9hcGkvZGV2aWNlL2xpc3QvYWxsJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdhcGlrZXknOiAnV2VhdmVkRGVtb0tleSQyMDE1JyxcbiAgICAgICAgICAgICAgICAgICAgJ3Rva2VuJzogdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHJlcyA9IHJlcy5jb250ZW50LnRvSlNPTigpXG4gICAgICAgICAgICBsZXQgc2VydmljZSA9IHJlc1tcImRldmljZXNcIl0uZmluZChpdGVtID0+IGl0ZW0uZGV2aWNlYWxpYXMgPT09IFwidGVzdF9odHRwXzgwODBcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KHNlcnZpY2UuZGV2aWNlYWRkcmVzcyx0b2tlbik7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgLSBFcnJvcmNoZSBcIixlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjb25uZWN0KHVpZDpzdHJpbmcsdG9rZW46c3RyaW5nKXtcblxuICAgICAgICByZXR1cm4gaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDonaHR0cHM6Ly9hcGkud2VhdmVkLmNvbS92MjIvYXBpL2RldmljZS9jb25uZWN0JyxcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOlwiKi8qXCIsXG4gICAgICAgICAgICAgICAgXCJhcGlrZXlcIjpcIldlYXZlZERlbW9LZXkkMjAxNVwiLFxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgXCJjb250ZW50LWxlbmd0aFwiOlwiODBcIixcbiAgICAgICAgICAgICAgICBcInRva2VuXCI6dG9rZW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OkpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBkZXZpY2VhZGRyZXNzOiB1aWQsXG4gICAgICAgICAgICAgICAgaG9zdGlwOiBcIjM2LjE0My4xODAuOTZcIixcbiAgICAgICAgICAgICAgICB3YWl0OiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIFwiMTI3LjAuMC4xOjgwODBcIjtcbiAgICAgICAgICAgIC8vIHJlc3BvbnNlSlNPTltcImNvbm5lY3Rpb25cIl0ucHJveHk7XG4gICAgICAgICAgICAvLyByZXMgPSByZXMuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgIC8vIGlmKHJlcy5zdGF0dXMgIT09IFwidHJ1ZVwiKVxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gZmFpbGVkIHRvIGVzdGFibGlzaFwiKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycik9PntcblxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=