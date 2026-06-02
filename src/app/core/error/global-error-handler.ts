import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    console.error('Global error caught:', error);

    alert('Something went wrong. Please try again.');
  }

}
