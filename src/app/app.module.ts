import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from '../components/button/button.component';
import { FormNewItemComponent } from '../components/form-new-item/form-new-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    FormNewItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
