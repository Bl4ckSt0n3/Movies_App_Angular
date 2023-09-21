import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authEndpoint: string = '/api/Authentication'
  constructor(private httpClient: HttpClient) { }

  public auth(authForm: any): Observable<IAuthResponse> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('content-type', 'application/json'); // Authorization: 'my-auth-token'
    const data = {
      email: authForm.get('email')?.value,
      password: authForm.get('password')?.value
    };
    return this.httpClient.post<any>(this.authEndpoint, data, { headers: httpHeaders })
    .pipe(
      map((res: any) => res)
    );
  }

}

export interface IAuthResponse {
  data: string,
  success: boolean,
  message: string
}

