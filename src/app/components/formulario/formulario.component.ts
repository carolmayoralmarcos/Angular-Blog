import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, } from '@angular/forms';
import { Post } from '../../interfaces/post.interfaces';
import { PostService } from '../../service/post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  posts: Post[] = [];
  private postService = inject(PostService);


  formulario: FormGroup = new FormGroup({
    titulo: new FormControl(),
    texto: new FormControl(),
    autor: new FormControl(),
    imagen: new FormControl(),
    fecha: new FormControl(),
    categoria: new FormControl()
  });
  onSubmit() {
    this.postService.create(this.formulario.value);

  };
}



