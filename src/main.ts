import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule],
  template: `

  <div style="font-family: Roboto, sans-serif; font-size: 14px; line-height: 1.6; color: #333;">
  <p style="margin-bottom: 1rem;">
    <strong>NOTE:</strong><br><br>
    To generate new colors, go to the 
    <strong style="color: #2D73F5;">global_styles.scss</strong> 
    and update input arguments as per your need:
  </p>

  <div style="background: #f4f8fc; border-left: 4px solid #2D73F5; padding: 0.5rem; margin-bottom: 1rem;">
    <code style="font-size: 13px; color: #c7254e; background-color: #f9f2f4; padding: 0.2rem 0.4rem; display: inline-block;">
      $kendo-colors: map.merge($kendo-colors, k-generate-color-variations('error', #398fcd, 'default'));
    </code>
  </div>

  <ul style="padding-left: 1.2rem; margin-bottom: 1.5rem;">
    <li><strong>1st Argument:</strong> Palette type you want to generate. <br>
      Example: <code>['base', 'primary', 'secondary', 'tertiary', 'error', 'info', 'warning', 'success']</code>
    </li>
    <li style="margin-top: 0.5rem;"><strong>2nd Argument:</strong> Your main color.</li>
    <li style="margin-top: 0.5rem;"><strong>3rd Argument:</strong> Theme type. Example: <code>'default'</code>, <code>'bootstrap'</code>, <code>'fluent'</code>, etc.</li>
  </ul>

  <p style="margin-bottom: 1rem;">
    To change light/dark mode, in 
    <strong style="color: #2D73F5;">global_styles.scss</strong>, update:
  </p>

  <div style="background: #fff8e1; border-left: 4px solid #f9a825; padding: 0.5rem; margin-bottom: 1rem;">
    <code style="font-size: 13px; color: #8a6d3b; background-color: #fcf8e3; padding: 0.2rem 0.4rem; display: inline-block;">
      $kendo-is-dark-theme: false; // Update this flag as per your need
    </code>
  </div>

  <p style="margin-bottom: 1rem;">
    Lastly, update the following variables in 
    <strong style="color: #2D73F5;">main.ts</strong> as per your need:
  </p>

  <div style="background: #e8f5e9; border-left: 4px solid #43a047; padding: 0.5rem;">
    <code style="font-size: 13px; color: #2e7d32; background-color: #f1f8e9; padding: 0.2rem 0.4rem; display: block; margin-bottom: 0.5rem;">
      base: string = 'primary'; // Type of palette name
    </code>
    <code style="font-size: 13px; color: #2e7d32; background-color: #f1f8e9; padding: 0.2rem 0.4rem; display: block;">
      color: string = '#2D73F5'; // Your main color
    </code>
  </div>
</div>

<br>
  <br>

  <button 
  (click)="copyPalates()" 
  style="
    background-color: #2D73F5;
    color: white;
    border: none;
    padding: 10px 16px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    transition: background-color 0.3s ease;
  "
  onmouseover="this.style.backgroundColor='#1b5edb'"
  onmouseout="this.style.backgroundColor='#2D73F5'"
>
  Copy the Last Column Values in Same Sequence
</button>

  <br>
  <br>
  
  <table>
      <tr>
          <td id="c0">{{ base }}-subtle</td>
          <td *ngIf="colors[0].length > 0">{{ colors[0] }}</td>
          <td>{{ base }}-subtle : {{ colors[0] }},</td>
      </tr>
      <tr>
          <td id="c1">{{ base }}-subtle-hover</td>
          <td *ngIf="colors[1].length > 0">{{ colors[1] }}</td>
          <td>{{ base }}-subtle-hover: {{ colors[1] }},</td>
      </tr>
      <tr>
          <td id="c2">{{ base }}-subtle-active</td>
          <td *ngIf="colors[2].length > 0">{{ colors[2] }}</td>
          <td>{{ base }}-subtle-active: {{ colors[2] }},</td>
      </tr>
      <tr>
          <td id="c3">{{ base }}</td>
          <td *ngIf="colors[3].length > 0">{{ colors[3] }}</td>
          <td>{{ base }}:{{ colors[3] }},</td>
      </tr>
      <tr>
          <td id="c4">{{ base }}-hover</td>
          <td *ngIf="colors[4].length > 0">{{ colors[4] }}</td>
          <td>{{ base }}-hover:{{ colors[4] }},</td>
      </tr>
      <tr>
          <td id="c5">{{ base }}-active</td>
          <td *ngIf="colors[5].length > 0">{{ colors[5] }}</td>
          <td>{{ base }}-active:{{ colors[5] }},</td>
      </tr>
      <tr>
          <td id="c6">{{ base }}-emphasis</td>
          <td *ngIf="colors[6].length > 0">{{ colors[6] }}</td>
          <td>{{ base }}-emphasis:{{ colors[6] }},</td>
      </tr>
      <tr>
          <td id="c7">{{ base }}-on-subtle</td>
          <td *ngIf="colors[7].length > 0">{{ colors[7] }}</td>
          <td>{{ base }}-on-subtle:{{ colors[7] }},</td>
      </tr>
      <tr>
          <td id="c8">on-{{ base }}</td>
          <td *ngIf="colors[8].length > 0">{{ colors[8] }}</td>
          <td>on-{{ base }}:{{ colors[8] }},</td>
      </tr>
      <tr>
          <td id="c9">{{ base }}-on-surface</td>
          <td *ngIf="colors[9].length > 0">{{ colors[9] }}</td>
          <td>{{ base }}-on-surface:{{ colors[9] }},</td>
      </tr>
  </table>
  
  `,
})
export class App {
  name = 'Angular';
  title = 'kendo-angular-styling-sequence';
    colors: string [] = ['', '', '', '', '', '', '', '', '', ''];

    base: string = 'primary';
    color: string = '#2D73F5';

    constructor(public element: ElementRef) {
      setTimeout(() => this.setFontColor());
  }

  setFontColor() {
      for (let i = 0; i < 10; i++) {
          const id = 'c' + i;
          this.colors[i] = this.rgbToHex(getComputedStyle(document.getElementById(id)!).color);
      }
  }

  rgbToHex(rgb: string): string {
      const rgbValues = rgb.match(/\d+/g);
      if (!rgbValues) return rgb; // return original value if parsing fails
      const [r, g, b] = rgbValues.map(Number);
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }

  copyVals: string = '';

  copyPalates(): void {
      for (let i = 0; i < 10; i++) {
          const id = 'c' + i;
          const thirdTd = document.getElementById(id)!.nextElementSibling?.nextElementSibling;
          this.copyVals += thirdTd?.textContent + '\n';
      }

      navigator.clipboard.writeText(this.copyVals).then(() => {
          console.log('Content copied to clipboard:\n\n');
          console.log(this.copyVals);
      }).catch(err => {
          console.error('Failed to copy text:', err);
      });

  }
}

bootstrapApplication(App);
