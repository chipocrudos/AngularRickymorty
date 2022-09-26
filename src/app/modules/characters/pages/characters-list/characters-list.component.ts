import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Character } from '@shared/model/character';
import { CharacterService } from '@shared/services/character.service';
import { filter, take } from 'rxjs/operators';

type RequestInfo = {
  next: string|undefined;
}

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [];

  info: RequestInfo = {
    next: undefined,
  }
  private pageNum:number=1;
  private query:string|null = null;
  private hideScrollHeight:number = 200;
  private showScrollHeigth:number = 500;

  showGoUpButton = false;

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router,
    ) { 

      this.onUrlChange();
    }

  ngOnInit(): void {

    // this.getCharactersByQuery();
  }
  
  private onUrlChange(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe( () => {
      this.characters = [];
      this.pageNum = 1;
      this.getCharactersByQuery();
    })
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params)=> {
        console.log('Params -->', params);
        this.query = params['q'];
        this.getDataFromService();
    }
    );
  }

  private getDataFromService(): void {
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe((res:any )=> {
      if (res?.results?.length){
        console.log('Response -->', res);
        const {info, results} = res;
        this.characters = [...this.characters, ...results];
        this.info = info;

      } else {
        this.characters = [];
      }
    });
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', [])
  onWindoesScroll(): void {
    const yOffSet = window.pageYOffset;
    if((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop > this.showScrollHeigth)) {
            this.showGoUpButton = true;

    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }


  onScrollDown(): void {
    if(this.info.next){
      this.pageNum++;
      this.getDataFromService();
    }


  }

}
