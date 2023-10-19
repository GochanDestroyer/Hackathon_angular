import { Component } from '@angular/core';
import { Input } from'@angular/core';
@Component({
  selector: 'app-fun-fact',
  templateUrl: './fun-fact.component.html',
  styleUrls: ['./fun-fact.component.scss']
})
export class FunFactComponent {
@Input() fact:string="ciekawostka"
}
