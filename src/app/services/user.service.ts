import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';

interface ICreateUser {
  email: string,
  password: string,
  username: string,
  name: string,
  secondName: string,
  age: number
}

interface IResponse {
  data: string,
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private registerEndpoint: string = '/api/User/add';
  constructor(private httpClient: HttpClient) { }

  public create(registerForm: FormGroup): Observable<IResponse> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('content-type', 'application/json');
    const data = {
      email: registerForm.get('email')?.value,
      password: registerForm.get('password')?.value,
      username: registerForm.get('username')?.value,
      name: registerForm.get('name')?.value,
      secondName: registerForm.get('secondName')?.value,
      age: registerForm.get('age')?.value
    };

    // send post req.
    return this.httpClient.post<ICreateUser>(this.registerEndpoint, data, { headers: httpHeaders })
    .pipe(
      map(
        (res: any) => res
      )
    );
  }
}



