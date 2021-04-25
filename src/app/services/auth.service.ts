import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  open = '100%';
  
  closed = '0%';
  constructor() { }
}
