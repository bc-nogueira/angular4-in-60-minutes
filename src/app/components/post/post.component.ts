import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Since dataService.getPosts() returns an Observable I need to use subscribe
    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

}
