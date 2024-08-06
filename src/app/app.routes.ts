
import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

export const routes: Routes = [
    { path: 'posts', component: ListaPostsComponent },
    { path: 'new', component: FormularioComponent },
    { path: '', component: ListaPostsComponent }
]
