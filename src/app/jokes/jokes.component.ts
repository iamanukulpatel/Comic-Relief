import { Component, OnInit } from '@angular/core';
import { JokesApiService } from '../services/jockes-api.service';
import { JokesData } from './jokes-data';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {
  allJokes: any = {}; //all jokes key and value.

  iconAndValue: JokesData[] = []; //data which we want to display like img and jokes value.

  typesOfJokes: string = ''; //this is for filter jokes using string.

  jokesError: string = ''; // if api error then this message to html

  filterText: string = ''; //binding this string to input in html using ngModal.

  filteredJokesType: string[] = []; //this is the categories we have to use in html using *ngFor.

  //random value to bind on html code for generate random gif.

  randomValue: number = 0;

  //this jokesTpe data is array of all the category which api use.

  jokesType: string[] = [
    'animal',
    'career',
    'celebrity',
    'dev',
    'explicit',
    'fashion',
    'food',
    'history',
    'money',
    'movie',
    'music',
    'political',
    'religion',
    'science',
    'sport',
    'travel',
  ];

  constructor(private jokes: JokesApiService) {} //services of api .

  ngOnInit(): void {
    this.filteredJokesType = this.jokesType; // Assigning  jokes type to  filteredJokesType to filter using input.

    this.randomJoke(); //show random jokes default.
  }

  //filtered jokes function.
  joke(): void {
    try {
      this.jokes.getFilterJoke(this.typesOfJokes).subscribe((data: string) => {
        this.allJokes = data;
        this.iconAndValue = [this.allJokes]; //assigning the object to array only that type of data which we want to display.
      });
    } catch (error) {
      this.jokesError = JSON.stringify(error);
    }
    this.getRandomGif();
  }

  //filtering on search value

  filterCategoryUsingInput() {
    this.filteredJokesType = this.jokesType.filter((type) =>
      type.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  //filter buttons

  filterTypesOfJokes(types: string) {
    this.typesOfJokes = types;
    this.joke(); //calling filtered joke function.
  }

  //randomJokes function

  randomJoke() {
    try {
      this.jokes.getRandomJoke().subscribe((data: string) => {
        this.allJokes = data;
        this.iconAndValue = [this.allJokes];

        // console.log(this.iconAndValue[0].icon_url);
      });
    } catch (error) {
      this.jokesError = JSON.stringify(error);
    }
    this.getRandomGif();
  }

  //this function is for getting random gif  based on random number generated by math. random

  getRandomGif() {
    this.randomValue = Math.trunc(Math.random() * 10) + 1;
  }
}
