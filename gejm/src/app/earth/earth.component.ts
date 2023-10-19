import { Component } from '@angular/core';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent {
  ngOnInit() {
    gsap.set(".rocket",{y:window.innerHeight / 2, x: window.innerWidth / 2})
  }

  rocketMove(e: MouseEvent) {
    const rocket = document.querySelector('.rocket')!;
    const rocketHeight = rocket.clientHeight;
    const rocketWidth = rocket.clientWidth;
    gsap.to('.rocket', {duration:1, x:e.clientX - rocketWidth / 2, y:e.clientY - rocketHeight / 2, overwrite:'auto'});
  }
}
