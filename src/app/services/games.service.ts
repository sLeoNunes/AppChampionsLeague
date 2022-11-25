import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {  }
 
 getTopRatedGames( ): Observable<any> {
  return this.http.get('');

 } 
 getGameDetails( ) {}
  
}

