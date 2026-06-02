import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {

  const modifiedReq = req.clone({
    setHeaders: {
      'X-App-Name': 'PublicServicesPH'
    }
  });

  return next(modifiedReq);
};
