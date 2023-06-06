import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public router:Router){}
  navigate()
  {
    this.router.navigate(['/about'])
  }
  navigate1()
  {
    this.router.navigate(['/home'])
  }
}
