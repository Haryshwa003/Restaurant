import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
	
	navigate()
	{
		console.log("hi")
	  this.router.navigate(['/home'])
	}
	navigate1()
	{
		console.log("hi")
	  this.router.navigate(['/about'])
	}
	email: string = "haryshwasenthil123@gmail.com";
	phone: string = "+91********";
	val:boolean=true;
	val1:boolean=false;
	val0:boolean=true;
	val01:boolean=false;
	val9:boolean=true;
	val91:boolean=false;
	val8:boolean=true;
	val81:boolean=false;
	isAccordionOpen: boolean = false;
	closeResult = '';

	constructor(private offcanvasService: NgbOffcanvas,public router:Router) {}

	open(content:any) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
	click()
	{
		if(this.val==false)
		{
			this.val1=false
			this.val=true
		}
		else
		{
			this.val=false
			this.val1=true
		}
	}
	click1()
	{
		if(this.val0==false)
		{
			this.val01=false
			this.val0=true
		}
		else
		{
			this.val0=false
			this.val01=true
		}
	}
	click2()
	{
		if(this.val9==false)
		{
			this.val91=false
			this.val9=true
		}
		else
		{
			this.val9=false
			this.val91=true
		}
	}
	click3()
	{
		if(this.val8==false)
		{
			this.val81=false
			this.val8=true
		}
		else
		{
			this.val8=false
			this.val81=true
		}
	}
}
