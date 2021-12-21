import { Component, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-dd-stepper',
  templateUrl: './dd-stepper.component.html',
  styleUrls: ['./dd-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: DdStepperComponent }],
})
export class DdStepperComponent extends CdkStepper {

  @Input() activeClass = 'active';

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }

}
