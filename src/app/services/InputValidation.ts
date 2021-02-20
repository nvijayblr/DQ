import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class InputValidation {

    numericOnly(event): boolean {
        let patt = /^([0-9])$/;
        let result = patt.test(event.key);
        return result;
    }

    numericSpaceOnly(event): boolean {
        let patt = /^([0-9 ])$/;
        let result = patt.test(event.key);
        return result;
    }

    numericDotOnly(event): boolean {
        let patt = /^([0-9.])$/;
        let result = patt.test(event.key);
        return result;
    }

    alphaNumericOnly(event): boolean {
        let patt = /^\w+$/;
        let result = patt.test(event.key);
        return result;
    }

    alphaNumericAndSpecialCharOnly(event): boolean {
        let patt = /^[a-zA-Z0-9()&#-', ]*$/;
        let result = patt.test(event.key);
        return result;
    }

    alphabetsAndSpaceOnly(event): boolean {
        let patt = /^[a-zA-Z ]*$/;
        let result = patt.test(event.key);
        return result;
    }

    emailValidator(email:string): boolean {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!EMAIL_REGEXP.test(email)) {
            return false;
        }
        return true; 
    }

}