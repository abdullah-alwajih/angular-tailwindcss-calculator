import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = '';

  buttons = [
    {  value: 'C', action: ()=>this.reset(), class: 'clear' },
    {  value: '/', action: ()=>this.getAction('/'),  class: '' },
    {  value: '*', action: ()=>this.getAction('*'),  class: '' },
    {  value: '7', action: ()=>this.getAction('7'),  class: '' },
    {  value: '8', action: ()=>this.getAction('8'),  class: '' },
    {  value: '9', action: ()=>this.getAction('9'),  class: '' },
    {  value: '-', action: ()=>this.getAction('-'),  class: '' },
    {  value: '4', action: ()=>this.getAction('4'),  class: '' },
    {  value: '5', action: ()=>this.getAction('5'),  class: '' },
    {  value: '6', action: ()=>this.getAction('6'),  class: '' },
    {  value: '+', action: ()=>this.getAction('+'),  class: 'plus' },
    {  value: '1', action: ()=>this.getAction('1'),  class: '' },
    {  value: '2', action: ()=>this.getAction('2'),  class: '' },
    {  value: '3', action: ()=>this.getAction('3'),  class: '' },
    {  value: '0', action: ()=>this.getAction('0'),  class: '' },
    {  value: '00', action: ()=>this.getAction('00'),  class: '' },
    {  value: '.', action: ()=>this.getAction('.'),  class: '' },
    {  value: '=', action: ()=>this.equal(), class: 'equal' }
  ];


   getAction(item: any): void {
    this.result += item
  }

  equal(): void {
    this.result = eval(this.result)
  }

  reset(): void {
    this.result = ''
  }
}
