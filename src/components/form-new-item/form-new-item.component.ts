import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
})
export class FormNewItemComponent implements OnInit {
  @Input() label!: string;

  constructor() {}

  ngOnInit() {}

  onAddNewItem(newItem) {}
}
