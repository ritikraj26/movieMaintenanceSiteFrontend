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

  onLike(item:any){
    item.upvote=item.upvote +1;
    this.service.addLikes(item).subscribe({});
  }

  onDislike(item:any){
    item.downvote=item.downvote+1;
    this.service.addDislikes(item).subscribe({});
  }

  sortMovies(){
    this.service.getMovieList().subscribe(data=>{
      this.movieList=data;
    });

  }
  refreshMovieList(){
    this.service.getMovieList().subscribe(data=>{
      this.movieList=data;
    });
  }

  sortResult(item:any,asc:boolean){
    this.movieList = this.movieList.sort(function(a:any,b:any){
      if(asc){
        return (a[item]>b[item])?1:((a[item]<b[item])?-1:0);
      }
      else{
        return (a[item]<b[item])?1:((a[item]>b[item])?-1:0);
      }
    })
  }

}
