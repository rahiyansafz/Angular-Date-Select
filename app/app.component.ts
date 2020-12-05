import { Component } from '@angular/core';

   @Component({
       selector: 'my-app',
       template: `
           <form #form="ngForm">
              <div class="example-config">
                   <p>The selected birth date is <strong>{{ birthDate | kendoDate: 'M/d/yyyy' }}</strong></p>
               </div>           
              <kendo-textbox-container floatingLabel="Select Birthdate">
                   <kendo-datepicker
                       placeholder=""
                       name="birthDate"
                       [(ngModel)]="birthDate"
                   ></kendo-datepicker>
              </kendo-textbox-container>
           </form>
       `
   })
export class AppComponent {
  public birthDate: Date = null;
}
