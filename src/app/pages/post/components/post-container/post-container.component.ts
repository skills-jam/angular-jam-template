import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Post } from './../../../../shared/models/post.model';
import { PostService } from './../../../../shared/services/post.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
  providers: []
})
export class PostContainerComponent implements OnInit {
  loading$: Observable<boolean>;
  // posts$: Observable<Post[]>;

  posts$ = new BehaviorSubject(null);

  constructor(public postService: PostService) {
    // this.posts$ = postService.entities$;
    this.loading$ = postService.loading$;
  }

  ngOnInit(): void {
    this.postService.getPosts({ title: 'New test POST title' }, false);

    this.postService.createPost({ title: 'New test POST title' });
    // this.getPosts();
  }

  getPosts() {
    this.postService.getAll();
  }

  add(post: Post) {
    this.postService.add(post);
  }

  update() {
    this.postService.update({ id: '5', title: 'New updated title' });
  }
}
