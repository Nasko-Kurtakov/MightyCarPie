# MightyCarPie
### A IoT project targeted at unlocking and starting your car through your phone only using internet and Raspberry Pi
#### (without depending on home network and port forwarding)

The project includes:
 #### NativeScript app to be used by the client
 #### Node.JS server build with Express that should be run on the Raspberry PI
 
Core concepts:
* Login to Raspberry Pi via internet and remot3.it(https://www.remot3.it/web/index.html)
* Send Signals to Raspberry Pi via http requests
* Build NativeScript App to contact the raspberry
* Authentication to login in the app and raspberry
* Build Express Server to handle the http requests
* Make session manegment


Bonuses:
* GPS Tracking and integrated google maps on the client side app to show history
* Fingerprint Authentication
* Security finetuning
* Sign Up for remot3.it account
* Bluetooth connectivity for offline menagement
* Notification that the car has been unlocked/started
* Integrate camera on the raspberry for dashcam shooting 
* Download/preview/delete of dashcam videos through the phone app
