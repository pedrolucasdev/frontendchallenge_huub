import { LoginDTO } from './../../model/auth/login-dto';
import { LoginResult } from './../../model/auth/login-result';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpOptions } from '../../model/http/http-options';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = environment.apiUrl;
  private currentTokenSubject: BehaviorSubject<string>;
  public currentToken: Observable<string>;

  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<string>(localStorage.getItem('jwt'));
    this.currentToken = this.currentTokenSubject.asObservable();
  }

  public get currentUserValue(): string {
    return this.currentTokenSubject.value;
  }

  login(data: LoginDTO) {
    const url = `${this.apiUrl}authenticate`;

    return this.http.post<LoginResult>(url, data, HttpOptions)
      .pipe(map((result) => {
        if (result) {
          localStorage.setItem('jwt', result.data.jwt);
          this.currentTokenSubject.next(result.data.jwt);
        }

        return result;
      }));
  }

  logout() {
    localStorage.removeItem('jwt');
    this.currentTokenSubject.next(null);
  }
}
