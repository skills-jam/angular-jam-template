import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PostContainerComponent } from './components/post-container/post-container.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [PostContainerComponent],
  imports: [CommonModule, PostRoutingModule, SharedModule],
})
export class PostModule {}
