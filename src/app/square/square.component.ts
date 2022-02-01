import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button width="200px">{{ value }}</button>
  `,
  styles: [
    
  ]
})
export class SquareComponent {

    @Input() value: 'X' | 'O';

}
