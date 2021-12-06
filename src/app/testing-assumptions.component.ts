import { Component } from '@angular/core';

@Component({
  selector: 'rs-testing-assumptions',
  template: `
    <div class="rs-card">
      <div class="rs-card__content">
        <h6></h6>
        <h1>Testing Assumptions</h1>
        <textarea></textarea>
      </div>
    </div>
  `,
  styles: [`


    textarea {
      background: #222;
      border-radius: 4px;
      padding: 4px 12px;
      width: 100%;
      box-sizing: border-box;
    }
  `]
})
export class TestingAssumptionsComponent {

}