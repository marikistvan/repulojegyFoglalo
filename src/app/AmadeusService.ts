import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmadeusService {
  private tokenUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token'; // Sandbox URL
  private clientId = 'r7sn7sqR0o3rrF6XHGnEbSTwsYa432wP';
  private clientSecret = 'ysp9fZeP5mp2EArE';
  private accessToken: string | null = null;

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', this.clientId);
    body.set('client_secret', this.clientSecret);

    return this.http.post(this.tokenUrl, body.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  getAccessToken() {
    return this.accessToken;
  }

  searchFlights(origin: string, destination: string, departureDate: string,max:string): Observable<any> {
    const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=1&nonStop=false`;
    return this.http.get(url, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
      },
    });
  }
  
  searchCitites(origin: string, keywords: string, countryCode: string): Observable<any> {
    const url = `https://api.amadeus.net/v1/reference-data/locations/cities/keyword=${keywords}&countryCode=${keywords}&include=AIRPORTS`;
    return this.http.get(url, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
      },
    });
  }
  
}
