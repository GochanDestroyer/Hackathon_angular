import { Component } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-meteor-shooting',
  templateUrl: './meteor-shooting.component.html',
  styleUrls: ['./meteor-shooting.component.scss']
})
export class MeteorShootingComponent {
  points:number=0;
  src:string="../../assets/meteor.png";
  one:string="../../assets/meteor.png";
  two:string="../../assets/explode.png";
  


  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/explosion.wav";
    audio.load();
    audio.play();
  }
  shoot():void{
    this.points++;
    this.playAudio();
    this.src=this.two;
    if(this.points > 19) {
        
    }
    gsap.set(".meteor",{y:-1000});
    gsap.to(".meteor",{duration:1,x:window.innerWidth/2,y:1000})
        
        gsap.to(".meteor",{duration:1,x:window.innerWidth/2,y:100})
  }
  
  ngOnInit(){
  

  

  }

  }
