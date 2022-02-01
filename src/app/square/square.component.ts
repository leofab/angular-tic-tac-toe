import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button nbButton style="width:200px;height:200px;font-size:40px">{{ value }}</button>
  `,
  styles: [
    
  ]
})
export class SquareComponent {

    @Input() value: 'X' | 'O';

}
