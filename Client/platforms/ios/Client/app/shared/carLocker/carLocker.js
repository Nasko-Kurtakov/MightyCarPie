"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var CarLocker = (function () {
    function CarLocker(settings) {
        var _this = this;
        this.carService = null;
        this.isLockedObs = new observable_1.Observable();
        this.carService = settings.carService;
        this.isLockedObs.addEventListener(observable_1.Observable.propertyChangeEvent, function (data) {
            if (data.value) {
                _this.message = "Unlock";
            }
            else {
                _this.message = "Lock";
            }
        });
        this.isLockedObs.set("isLocked", settings.isLocked);
    }
    CarLocker.prototype.lock = function () {
        this.carService.lock();
        this.isLockedObs.set("isLocked", true);
    };
    CarLocker.prototype.unlock = function () {
        this.carService.unlock();
        this.isLockedObs.set("isLocked", false);
    };
    return CarLocker;
}());
exports.CarLocker = CarLocker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyTG9ja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyTG9ja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQTRJO0FBUzVJO0lBSUksbUJBQVksUUFBMEI7UUFBdEMsaUJBYUM7UUFmTyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsdUJBQVUsQ0FBQyxtQkFBbUIsRUFBQyxVQUFDLElBQXVCO1lBQ3JGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNYLEtBQUksQ0FBQyxPQUFPLEdBQUMsUUFBUSxDQUFDO1lBQzFCLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDRCxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUMxQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCx3QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbU9iamVjdCwgZnJvbU9iamVjdFJlY3Vyc2l2ZSwgUHJvcGVydHlDaGFuZ2VEYXRhLCBFdmVudERhdGEsIFdyYXBwZWRWYWx1ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQgeyBDYXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jYXJTZXJ2aWNlL2NhclNlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDYXJMb2NrZXJTZXR0aW5nc3tcbmlzTG9ja2VkOmJvb2xlYW47XG5jYXJTZXJ2aWNlOkNhclNlcnZpY2U7XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJMb2NrZXJ7XG4gICAgcHVibGljIGlzTG9ja2VkT2JzOk9ic2VydmFibGU7XG4gICAgcHJpdmF0ZSBjYXJTZXJ2aWNlOkNhclNlcnZpY2U9bnVsbDtcbiAgICBwdWJsaWMgbWVzc2FnZTpzdHJpbmc7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3M6Q2FyTG9ja2VyU2V0dGluZ3Mpe1xuICAgICAgICB0aGlzLmlzTG9ja2VkT2JzID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FyU2VydmljZSA9IHNldHRpbmdzLmNhclNlcnZpY2U7XG4gICAgICAgIHRoaXMuaXNMb2NrZWRPYnMuYWRkRXZlbnRMaXN0ZW5lcihPYnNlcnZhYmxlLnByb3BlcnR5Q2hhbmdlRXZlbnQsKGRhdGE6UHJvcGVydHlDaGFuZ2VEYXRhKT0+e1xuICAgICAgICAgICAgaWYoZGF0YS52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlPVwiVW5sb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiTG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0xvY2tlZE9icy5zZXQoXCJpc0xvY2tlZFwiLHNldHRpbmdzLmlzTG9ja2VkKTtcbiAgICB9XG4gICAgbG9jaygpe1xuICAgICAgICB0aGlzLmNhclNlcnZpY2UubG9jaygpO1xuICAgICAgICB0aGlzLmlzTG9ja2VkT2JzLnNldChcImlzTG9ja2VkXCIsdHJ1ZSk7XG4gICAgfVxuICAgIHVubG9jaygpe1xuICAgICAgICB0aGlzLmNhclNlcnZpY2UudW5sb2NrKCk7XG4gICAgICAgIHRoaXMuaXNMb2NrZWRPYnMuc2V0KFwiaXNMb2NrZWRcIixmYWxzZSk7XG4gICAgfVxufSJdfQ==