import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageModule} from './routes/home-page/home-page.module';
import {AppRoutingModule} from './routes/app-routing.module';
import {DashboardModule} from './routes/dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HomePageModule,
        AppRoutingModule,
        DashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
