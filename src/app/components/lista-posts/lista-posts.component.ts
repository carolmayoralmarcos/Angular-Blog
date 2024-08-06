import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interfaces';
import { PostService } from '../../service/post.service';
import { FormularioComponent } from '../formulario/formulario.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [FormularioComponent, RouterLink],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {
  posts: Post[] = [];
  private postService = inject(PostService);
  ngOnInit() {
    this.posts = this.postService.getAll();
  }
  categories: string[] = ["Viajes por Europa", "Viajes por África", "Viajes por Asia"];

  filterByCategory(cat: string) {
    this.posts = this.postService.getByCategoria(cat);
  }

}