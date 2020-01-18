import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css']
})
export class ModalImageComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() id: string;
	@Input() url: string;
	@Input() alttext: string;

	@ViewChild('modalimage') el: ElementRef;

	constructor() { }

	ngOnInit() {

    let main = this.el.nativeElement;
    let body = document.getElementsByTagName('body')[0];

    let dw = document || window;

		dw.addEventListener("click", function (event) {

			if (event.target == main.nextSibling) {

				main.nextSibling.style.display = "none";
				body.style.overflow = '';

			}

    });
    
  }
  
  open(){

    let main = this.el.nativeElement;
		let body = document.getElementsByTagName('body')[0];
    
    main.nextSibling.style.display = "block";
    body.style.overflow = "hidden";

  }
  
  close(){
    
    let main = this.el.nativeElement;
		let body = document.getElementsByTagName('body')[0];
    
    main.nextSibling.style.display = "none";
    body.style.overflow = "";

  }

}
