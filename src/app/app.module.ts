import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig,GoogleLoginProvider } from 'angularx-social-login';
import { UserserviceService } from './userservice.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OthertabsComponent } from './othertabs/othertabs.component';
import { AddcandComponent } from './dashboard/addcand/addcand.component';
import { ViewcandComponent } from './dashboard/viewcand/viewcand.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { UpdatecandComponent } from './dashboard/viewcand/updatecand/updatecand.component';
import { SearchComponent } from './dashboard/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendsComponent } from './dashboard/trends/trends.component';
import { NgbModule,NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SidebarModule } from 'ng-sidebar';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';





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
    DashboardComponent,
    OthertabsComponent,
    AddcandComponent,
    ViewcandComponent,
    UpdatecandComponent,
    SearchComponent,
    TrendsComponent,
    AboutusComponent,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgxChartsModule,
    SidebarModule.forRoot()
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