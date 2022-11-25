import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult{
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {  }
 
 getTopRatedGames(page = 1 ): Observable<ApiResult> {
   return this.http.get<ApiResult>(`${environment.baseUrl}/games/popular?api_key=${environment.apiKey}&page=${page}`);

 } 
 getGameDetails(id: string ) {
  return this.http.get(`${environment.baseUrl}/games/popular?api_key=${environment.apiKey}`);
 }
  
}

