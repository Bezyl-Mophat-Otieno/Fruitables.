import { Component , OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../../services/theme/theme.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,CommonModule],                                                                                                                                                                                                                                     
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnDestroy {

  darkTheme!: boolean;
  themeSubscription:Subscription
  
  constructor(private themeservice:ThemeService){
    this.themeSubscription = themeservice.darkTheme$.subscribe(theme=>{
    this.darkTheme = theme
    })
   
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  toggleTheme(){
    this.themeservice.setTheme();
  }

}
