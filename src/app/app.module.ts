import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ComposeMesComponent } from './compose-mes/compose-mes.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { HerosModule } from './heroes/heros.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    ComposeMesComponent,
  ],
  imports: [
    BrowserModule,
    HerosModule,
    FormsModule,
    AdminModule,
    AuthModule,
    CrisisCenterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
