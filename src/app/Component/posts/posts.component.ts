import { Component, OnInit } from '@angular/core';

// model
import { Post } from 'src/app/Models/Post';

// service
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts
    });
  }
}
