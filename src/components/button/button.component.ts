import {
  Component,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color, 'color': 'white'}">{{label}}</button>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!: string;
  @Input() label!: string;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change ->', changes);
  }
  ngOnInit(): void {
    console.log('OnInit ->');
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }
}
