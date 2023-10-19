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
  victoryRoyale(){
    let audio = new Audio();
    audio.src = "../../../assets/victoryRoyale.mp3";
    audio.load();
    audio.play();
  }
  land(){
      gsap.to(".lunarModule",{duration:2, y:20});
  }
  ngOnInit() {
      
      this.playAudio();
      setTimeout(this.playAudio,500);
      setTimeout(this.playAudio,1000);
      setTimeout(this.playAudio,1500);
      setTimeout(this.playAudio,2000);
      setTimeout(this.playAudio,2500);
      setTimeout(this.playAudio,3000);
    gsap.set(".lunarModule",{y:-1000});
    setTimeout(this.land,1000);
    setTimeout(this.victoryRoyale,3500);
   }
}
