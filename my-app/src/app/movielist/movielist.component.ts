import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interfaces/movie';
import { MovielistService } from '../services/movielist.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  IMG_URL = 'https://image.tmdb.org/t/p/w185/';
  Movies:any;
  idPoster:any;
  constructor(private movieList:MovielistService) { }
  

  ngOnInit(): void {
    this.movieList.getAllMovies().subscribe(resp =>{
      this.Movies = resp;
      

      

  })}


  // getMovieCode():void{
  //   this.movieList.getMovieCode().subscribe(resp =>{
  //     this.idPoster = resp
  // })
}



  
