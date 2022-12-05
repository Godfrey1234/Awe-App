import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  spinnerService: any;


 
 
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {}
    /** spinner starts on init */
    showSpinner(): void {
      this.spinnerService.show();
  
      setTimeout(() => {
        this.spinnerService.hide();
      }, 1000); // 5 seconds
    }

}
