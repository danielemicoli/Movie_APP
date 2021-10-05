import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';


@Injectable({
  providedIn: 'root'
})
export class MovielistService {
  // APIKey =  'a083bc104e7e9ad1c28cf87ccc49a165'
  Movies!: Movie
  Movie_IMG = 'https://image.tmdb.org/t/p/w185/'
  APIKey = 'a083bc104e7e9ad1c28cf87ccc49a165'
  constructor(private http:HttpClient) { }


  getAllMovies() {
    return this.http.get(environment.urlAPI+'discover/movie?api_key='+this.APIKey);
  }
  getMainPopular(){
    return this.http.get(environment.urlAPI+'discover/movie?api_key='+this.APIKey);

  }
  getMovieInfo(id:number){
    return this.http.get<any>(environment.urlAPI+'movie/'+id+'?api_key='+this.APIKey+'&language=en-US')
  }
  // getMovieCode(){
  //   return this.http.get(this.Movie_IMG+'qPKw2w4Ya5ZoOaxUDK1czRskQBT.jpg')
    
  // }

  getCredits(id:number){
    return this.http.get<any>(environment.urlAPI+'movie/'+id+'/credits?api_key='+this.APIKey)

  }
  getTrailer(id:number){
    return this.http.get<any>(environment.urlAPI+'movie/'+id+'/videos?api_key='+this.APIKey)

  }
  getLatest(){
    return this.http.get<any>(environment.urlAPI+'movie/latest?api_key='+this.APIKey)

  }
}
