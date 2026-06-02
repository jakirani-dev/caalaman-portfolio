import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  const isLoggedIn = false; // stub for now

  /**const auth = inject(Auth);
return auth.currentUser ? true : router.parseUrl('/');
 */

  if (!isLoggedIn) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
