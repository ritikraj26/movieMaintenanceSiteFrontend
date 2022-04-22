import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-actor',
  templateUrl: './show-actor.component.html',
  styleUrls: ['./show-actor.component.css']
})
export class ShowActorComponent implements OnInit {

  constructor(private service:SharedService) { }

  actorList:any=[];

  ngOnInit(): void {
    this.refreshActorList();
  }

  refreshActorList(){
    this.service.getActorList().subscribe(data=>{
      this.actorList=data;
    });
  }

}

