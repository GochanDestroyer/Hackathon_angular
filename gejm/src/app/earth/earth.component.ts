import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent {
  altitude = Number(110 / 10000).toFixed(4);
  mouseMoveAltitude = 0;
  velovity = 400;

  ngOnInit() {
    gsap.set(".rocket",{y:window.innerHeight / 2, x: window.innerWidth / 2})
    const tmp = () => {
      this.altitude = Number(Number(this.altitude) + 0.0001).toFixed(4)
      this.velovity = this.velovity - 1 > 0 ? this.velovity - 1 : 1;
      setTimeout(tmp, this.velovity);
    }
    setTimeout(tmp, this.velovity);
  }

  rocketMove(e: MouseEvent) {
    const rocket = document.querySelector('.rocket')!;
    const rocketHeight = rocket.clientHeight;
    const rocketWidth = rocket.clientWidth;
    const oldmouseMoveAltitude = this.mouseMoveAltitude;

    gsap.to('.rocket', {
      duration: 1, 
      x: Math.min(Math.max(e.clientX - rocketWidth / 2, 0), window.innerWidth - rocketWidth),
      y: Math.min(Math.max(e.clientY - rocketHeight / 2, window.innerHeight / 20 + 20), window.innerHeight - rocketHeight),
      overwrite: 'auto'});

      this.mouseMoveAltitude = (-(Math.min(Math.max(e.clientY - rocketHeight / 2, window.innerHeight / 20 + 20), window.innerHeight - rocketHeight)) + rocketHeight) / 10000;

      this.altitude = Number(Number(this.altitude) + this.mouseMoveAltitude - oldmouseMoveAltitude).toFixed(4);
  }
}

  
