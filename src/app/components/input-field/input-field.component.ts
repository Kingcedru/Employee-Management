import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent {
  @Input() placeholder!: string;
  @Input() inputType!: string;

  value: string = '';

  onInputChange(event: any) {
    const target = event.target as HTMLInputElement;
    this.value = event.target.value;
  }
}
