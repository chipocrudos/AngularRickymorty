import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Character } from '@shared/model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  searchCharacters(query:string|null = '', page:number = 1) {
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;

    return this.http.get<Character[]>(filter)
  }
  
  getDetails(id:number) {
    return this.http.get<Character>(`${environment.baseUrlAPI}/${id}`)
  }

}
