import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  starWars: any[] = [];
  people: any[] = [];
  name: any;
  pagesRequired = 9;

  constructor(private http: HttpService) {
    this.Search = _.debounce(this.Search, 1000);
  }

  ngOnInit(): void {
    for (let i = this.pagesRequired; i > 0; i--) {
      // console.log(this.http.getStarWars1(i));
      this.http.getStarWars1(i).subscribe((data: any) => {
        for (let i = 0; i < data.results.length; i++) {
          this.starWars.push(data.results[i]);
        }
      });
    }
  }

  extractId(person: any) {
    const url = person.url;
    const extracted = url.replace('http://swapi.dev/api/people/', '');
    const extractedId = extracted.replace('/', '');
    return extractedId;
  }

  // tslint:disable-next-line:typedef
  Search() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.starWars = this.starWars.filter(character => {
        return character.name.toLocaleLowerCase().match(this.name.toLowerCase());
      });
    }
  }

}
