import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detailed-character',
  templateUrl: './detailed-character.component.html',
  styleUrls: ['./detailed-character.component.css']
})
export class DetailedCharacterComponent implements OnInit {

  name!: string;
  weight!: string;
  height!: string;
  eyeColor!: string;
  hairColor!: string;
  birthYear!: string;
  gender!: string;
  films: any[] = [];
  filmsTitle: any[] = [];
  id: any;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.http.getOneCharacter(this.id).subscribe((data: any) => {
      this.name = data.name;
      this.weight = data.mass;
      this.height = data.height;
      this.eyeColor = data.eye_color;
      this.hairColor = data.hair_color;
      this.birthYear = data.birth_year;
      this.gender = data.gender;
      this.films = data.films;
      for (let i = 0; i < this.films.length; i++) {
        this.http.getFilm(this.films[i]).subscribe((dat: any) => {
          this.filmsTitle.push(dat.title);
          console.log(dat);
        });
      }
      console.log(this.filmsTitle);
    });

  }

}
