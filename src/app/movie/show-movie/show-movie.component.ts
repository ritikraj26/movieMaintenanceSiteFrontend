import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  constructor(private service:SharedService) { }

  movieList:any=[];

  ngOnInit(): void {
    this.refreshMovieList();
  }

  refreshMovieList(){
    this.service.getMovieList().subscribe(data=>{
      this.movieList=data;
    });
  }

}
