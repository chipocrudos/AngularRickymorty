import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/shared/model/character';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character$!: Observable<Character>;
  
  constructor(
    private route: ActivatedRoute,
    private characterSrv: CharacterService,
    private location: Location
  ) { }

  ngOnInit(): void {

      this.route.params.pipe( take(1) ).subscribe((params) => {
        const id = params['id'];
        this.character$ = this.characterSrv.getDetails(id);
      })
  }

  onGoBack(): void {
    this.location.back();
  }

}
