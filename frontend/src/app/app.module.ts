import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatInputModule} from "@angular/material/input";
import { MatCardModule} from "@angular/material/card";
import { MatButtonModule} from "@angular/material/button";
import { MatDialogModule} from "@angular/material/dialog";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatExpansionModule} from "@angular/material/expansion";
import { AppComponent } from "./app.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { HeaderComponent } from "./header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { AppRoutingModule } from "./app-routing.module";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { ReactiveFormsModule } from "@angular/forms";
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { authinterceptor } from "./authentication/authinterceptor";
import { errorinterceptor } from "./error.interceptor";
import { ErrordialogComponent } from './errordialog/errordialog.component';
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    ErrordialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:authinterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:errorinterceptor,multi:true}
  ],
  entryComponents:[ErrordialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
