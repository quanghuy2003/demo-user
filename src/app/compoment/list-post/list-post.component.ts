import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../model/post";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: Post[]=[
    {

    }
  ];

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(result =>{
        this.posts=result;
        console.log(result);
      },error => {
        console.log(error)
      }
    )
  }

}
