import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule],
  template: `

  NOTE:
  <p>
  To generate new colors, go to the global_styles.scss and update input arguments as per your need.
  <br>
  <strong> $kendo-colors: map.merge($kendo-colors, k-generate-color-variations('error', #398fcd, 'default')); </strong>
  <br><br>  
  1st Argument: depends on which type of pallate you want to generate. <br>Ex: ['base', 'primary', 'secondary', 'tertiary', 'error', 'info', 'warning', 'success'];
  <br><br>
  2nd Argument: Your color
  <br><br>
  3rd Argument: Type of theme. Ex: default, bootstrap, fluent etc.
<br><br>
  
  </p>

  <button (click)="copyPalates()">Copy the Last Column Values in Same Sequence</button>

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

    base: string = '';
    color: string = '';

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
