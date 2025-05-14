import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images: any[] = [];
  isLoanding: boolean = true;
  selectedImage: any = null;
  error: string | null = null;

  // configuración de la galería
  itemsPerPage: number = 10;
  currentPage: number = 1;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.loadImages();
  }
  loadImages(): void {
    this.isLoanding = true;
    this.error = null;

    this.imageService.getImages(this.itemsPerPage).subscribe({
      next: (data): void => {
        this.images = data;
        this.isLoanding = false;
      },
      error: (error): void => {
        this.error = 'Error loading images';
        this.isLoanding = false;
        console.error('Error loading images', error);
      }
    });
  }

  showImageDetails(id: string): void {
  this.imageService.getImageDetails(id).subscribe({
    next: (details): void => {
      this.selectedImage = details;
    },
    error: (err): void => {
      console.error(err);
    }
  });
}
closemodal(): void {
  this.selectedImage = null;
}

}
