import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

function isAuthLoginOrRegister(url: string): boolean {
  const path = url.split('?')[0];
  return /\/api\/auth\/(login|register)$/.test(path);
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (isAuthLoginOrRegister(req.url)) {
    return next(req);
  }
  const auth = inject(AuthService);
  const token = auth.getToken();
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
};
