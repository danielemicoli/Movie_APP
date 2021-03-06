import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  moviedet!:any;
  constructor(private movieList:MovielistService,
    private router:Router) { }
  

  ngOnInit(): void {
    this.movieList.getAllMovies().subscribe(resp =>{
      this.Movies = resp;
      

  })}

infoMovie(item:any){
  this.movieList.getMovieInfo(item.id)
  .subscribe(resp => this.Movies = resp)
    this.router.navigate(['home', item.id,'info'])
}



  // getMovieCode():void{
  //   this.movieList.getMovieCode().subscribe(resp =>{
  //     this.idPoster = resp
  // })
}



  
