import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovielistService } from '../services/movielist.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  constructor(private movieList:MovielistService,
    private router:Router) { }

  ngOnInit(): void {
    this.movieList.getLatest().subscribe( resp => this.movieList =resp)

  }

}
