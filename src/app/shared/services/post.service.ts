import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Post } from './../models/post.model';
import { ApiService } from './../services/api.service';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostService extends EntityCollectionServiceBase<Post> {
  posts$ = new BehaviorSubject(null);

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private apiService: ApiService
  ) {
    super('Posts', serviceElementsFactory);
  }

  getPosts(params?: Params, refresh?: boolean) {
    if (!refresh && this.posts$.getValue()) {
      return;
    }

    this.apiService.get<Post[]>('posts', params).subscribe((data) => {
      this.posts$.next(data);
    });
  }

  createPost(data) {
    this.apiService.post('posts', data).subscribe((res) => {
      this.posts$.next([...this.posts$.getValue(), res]);
    });
  }
}
