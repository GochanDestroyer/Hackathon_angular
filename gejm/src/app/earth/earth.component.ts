import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent {
  altitude = Number(110 / 10000).toFixed(4);
  mouseMoveAltitude = 0;
  velovity = 500;
  vel2 = 0.0001;
  started = false;
  instruction = 'Wciśnij spację, aby wystartować';
  backgroundImage = '../../assets/sky.jpg';

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit() {
    gsap.set(".rocket",{y:window.innerHeight / 2, x: window.innerWidth / 2})
    document.addEventListener('keypress', (e) => {
      if (e.key === ' ') {
        this.instruction = '';
        this.started = true;
        
        let tmp: Function | null = () => {
            this.altitude = Number(Number(this.altitude) + this.vel2).toFixed(4)
            this.velovity = this.velovity - 10 > 0 ? this.velovity - 10 : 1;
            setTimeout(tmp!, this.velovity);
          }
          setTimeout(tmp, this.velovity);

          let crow = document.createElement('img');
          crow.src = '../../assets/crow.png';
          crow.style.position = 'absolute';
          crow.style.width = '100px';
          crow.style.height = '100px';
          crow.style.top = '0px';
          crow.style.left = '0px';
          document.body.appendChild(crow);

          gsap.fromTo(
            crow, 
            {x: (Math.random() - 0.1)*window.innerWidth, y: 0, overwrite: 'auto'},
            {duration: Math.random()*3 + 2, x: Math.random()*window.innerWidth + 100, y: window.innerHeight + 100, overwrite: 'auto'}
            );

          setInterval(() => {
            gsap.fromTo(
              crow, 
              {x: (Math.random() - 0.1)*window.innerWidth, y: 0, overwrite: 'auto'},
              {duration: Math.random()*3 + 2, x: Math.random()*window.innerWidth + 100, y: window.innerHeight + 100, overwrite: 'auto'}
              );
          }, 1000 * 5)
          setTimeout(() => {
            this.started = false;
            this.instruction = 'Wkraczas na orbitę!';
            this.vel2 = 0.01;
            setTimeout(() => {
              this.instruction = '';
              this.started = true;
              this.backgroundImage = '../../assets/cosmos-sky.jpg';
              crow.src = '../../assets/meteor.png';
            }, 4*1000);

            setTimeout(() => {
              tmp = null;
              setTimeout(() => { 
                this.router.navigate(['/landing']);
              }, 1000);
            }, 30*1000);

          }, 30 * 1000);
      };
    });
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

  
