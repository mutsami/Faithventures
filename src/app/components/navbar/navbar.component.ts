import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('myNav')
  myNav!: ElementRef;
  open:any;
  closed:any;
  
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  /* Open */
 openNav() {
   this.myNav.nativeElement.style.height = "100%";
}

/* Close */
 closeNav() {
  this.myNav.nativeElement.style.height = "0%";
}

}
