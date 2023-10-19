import { Component } from '@angular/core';
import {gsap} from 'gsap';

@Component({
  
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent {
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/explosion.wav";
    audio.load();
    audio.play();
  }
  
  land(){
      gsap.to(".landingCraft",{duration:2, y:0});
  }
  ngOnInit() {
      alert(1);
      this.playAudio();
      setTimeout(this.playAudio,500);
      setTimeout(this.playAudio,1000);
      setTimeout(this.playAudio,1500);
      setTimeout(this.playAudio,2000);
      setTimeout(this.playAudio,2500);
      setTimeout(this.playAudio,3000);
    gsap.set(".landingCraft",{y:-1000});
    setTimeout(this.land,1000);
   }
}
