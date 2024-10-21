import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [MainComponent, LoaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgOptimizedImage],
})
export class MainModule {}
