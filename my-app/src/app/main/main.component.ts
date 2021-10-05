import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../services/movielist.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://image.tmdb.org/t/p/w185/${n}`);

images:any;
  constructor(private movieList:MovielistService) { }

  ngOnInit(): void {
    this.movieList.getAllMovies().subscribe(resp => {
      this.images = resp;
    })
  }

}
