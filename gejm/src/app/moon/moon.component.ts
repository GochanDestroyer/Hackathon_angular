import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent {
  land(){
      gsap.to(".landingCraft",{duration:2, y:0})
  }
  ngOnInit() {
    gsap.set(".landingCraft",{y:-1000})
    setTimeout(this.land,1000)
   }
}
