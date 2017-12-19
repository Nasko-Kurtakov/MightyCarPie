import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";

import { CarService } from "../../shared/carService/carService";

export interface CarLockerSettings{
isLocked:boolean;
carService:CarService;
}

export class CarLocker{
    public isLockedObs:Observable;
    private carService:CarService=null;
    public message:string;
    constructor(settings:CarLockerSettings){
        this.isLockedObs = new Observable();
        
        this.carService = settings.carService;
        this.isLockedObs.addEventListener(Observable.propertyChangeEvent,(data:PropertyChangeData)=>{
            if(data.value){
                this.message="Unlock";
            }
            else{
                this.message = "Lock";
            }
        });
        this.isLockedObs.set("isLocked",settings.isLocked);
    }
    lock(){
        this.carService.lock();
        this.isLockedObs.set("isLocked",true);
    }
    unlock(){
        this.carService.unlock();
        this.isLockedObs.set("isLocked",false);
    }
}