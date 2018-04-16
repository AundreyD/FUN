import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server/server.component';
import { SuccessComponent } from './alert/success/success.component';
import { WarningComponent } from './alert/warning/warning.component';


@NgModule({
  declarations: [
    AppComponent,

    ServerComponent,

    SuccessComponent,

    WarningComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }