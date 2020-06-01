import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig,GoogleLoginProvider } from 'angularx-social-login';
import { CreatecandidateComponent } from './createcandidate/createcandidate.component';
import { UserserviceService } from './userservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidatetabComponent } from './candidatetab/candidatetab.component';
import { OthertabsComponent } from './othertabs/othertabs.component';
import { AddcandComponent } from './dashboard/addcand/addcand.component';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("25845705934-e8asrj7isabaicdtb9lenttqamtf5cqu.apps.googleusercontent.com")
  }
]);
export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    CreatecandidateComponent,
    SignupComponent,
    DashboardComponent,
    CandidatetabComponent,
    OthertabsComponent,
    AddcandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserserviceService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }