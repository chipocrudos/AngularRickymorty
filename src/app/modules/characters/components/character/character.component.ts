import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/shared/model/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character:Partial<Character> = {};
  @Input() detail: boolean = false;

  public genderIcon: string = 'question-lg.svg'
  public speciesIcon: string = 'question-lg.svg'
  public statusIcon: string = 'question-lg.svg'
  public locationIcon: string = 'question-lg.svg'


  constructor() {
    
   }

  ngOnInit(): void {
    this.getGender();
    this.getSpecies();
    this.getStatus();
    this.getLocation();
    console.log(this.character);
    
  }

  getGender(): void {
    if (this.character?.gender == "Male") {
      this.genderIcon = 'gender-male.svg';
    }
   else if (this.character?.gender == "Female") {
      this.genderIcon = 'gender-female.svg';
    }
   else if (this.character?.gender == "Genderless") {
      this.genderIcon = 'genderless.svg';
    }
  }
  getSpecies(): void {
    
    if (this.character?.species == "Human") {
      this.speciesIcon = 'human-head.svg'
    }
    else if (this.character?.species == "Robot") {
      this.speciesIcon = 'robot.svg';
    }
    else if (this.character?.species == "Alien") {
      this.speciesIcon = 'alien-icon.svg';
    } else if (this.character?.species == "Animal") {
      this.speciesIcon = 'axolotl.svg';
    }
  }
  
  getStatus(): void {
    if (this.character?.status == "Alive") {
      this.statusIcon = 'health.svg';
    }
    else if (this.character?.status == "Dead") {
      this.statusIcon = 'dead.svg';
    }
  }

  getLocation(): void {
    if (this.character?.location?.name == "Earth (Replacement Dimension)") {
      this.locationIcon = 'globe.svg';
    } 
    else if (this.character?.location?.name == "Citadel of Ricks") {
      this.locationIcon = 'rick-morty.svg';
    
    }
    else if (this.character?.location?.name != "unknown") {
      this.locationIcon = 'geo-alt.svg';
    }

  }
}
