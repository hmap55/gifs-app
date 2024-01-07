import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService: GifsService){}

  get tags(): string []{
    return this.gifService.tagsHistory;
  }

   getGifs(tag:string): void{

    this.gifService.searchTag(tag);

  }

}
