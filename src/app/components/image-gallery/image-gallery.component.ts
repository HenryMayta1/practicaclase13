import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  personajes: any[] = [];

  constructor(private rmService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rmService.getPersonajes().subscribe(data => {
      this.personajes = data.results;
    });
  }
}
