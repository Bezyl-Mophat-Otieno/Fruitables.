import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  darkTheme$:BehaviorSubject<boolean> = new BehaviorSubject(false)
  
  setTheme(){
    this.darkTheme$.next(!this.darkTheme$.value)
  }

}
