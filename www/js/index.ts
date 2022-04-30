import { App } from './app/app.component';

document.addEventListener('deviceready', function() {
    
    window.customElements.define("cordova-custom-elements-starter-app", App);

    console.log("hello world???");
}, false);



