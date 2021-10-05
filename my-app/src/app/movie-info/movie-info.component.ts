import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovielistService } from '../services/movielist.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movieCredit:any;
  // page = 4;
  Movies!:any;
  movieInfo!:any;
  movieTrailer:any;
  movieLatest:any;
  constructor(private movieList:MovielistService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.movieList.getMovieInfo(params.id)
        .subscribe(params => this.movieInfo = params));
        this.route.params.subscribe(params => 
          this.movieList.getCredits(params.id)
            .subscribe(params => this.movieCredit = params));
            this.route.params.subscribe(params => 
              this.movieList.getTrailer(params.id)
                .subscribe(params => this.movieTrailer = params)
        ,)}
      


    }

  // getCredit(){
  //   this.route.params.subscribe(params => 
  //     this.movieList.getCredits(params.id)
  //       .subscribe(params => this.movieCredit = params)
  //   ,)}
  


