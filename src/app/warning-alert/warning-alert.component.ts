import { Component } from "@angular/core";

@Component({
  selector:"app-warning-alert",
  template:`
    <div class="alert alert-warning" role="alert"> 
      <p [textContent]="warningText"></p>
    </div>
  `,
  styles:[`p{font-weight: bold;}`]
})
export class WarningAlertComponent {
  warningText: string = "This is warning alert component created manually.";
}

