import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button'
import { MatBadgeModule} from '@angular/material/badge'
import { MatIconModule} from '@angular/material/icon'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './todolist/todolist.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { RedElDirective } from './red-el.directive';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { EInfoComponent } from './e-info/e-info.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        TodolistComponent,
        ChildComponent,
        ParentComponent,
        UsdInrPipe,
        RedElDirective,
        AboutComponent,
        HomeComponent,
        UserComponent,
        ContactComponent,
        LoginComponent,
        EInfoComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        NgbRatingModule,
        RatingComponent,
        BrowserAnimationsModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatTooltipModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
})
export class AppModule {}
