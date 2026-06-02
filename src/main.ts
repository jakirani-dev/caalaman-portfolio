import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './app/core/error/global-error-handler';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './app/core/interceptors/api.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//deleted appConfig in bootsrap function

bootstrapApplication(AppComponent,{
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }, provideAnimationsAsync()
  ]
})
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([apiInterceptor]))
  ]
});