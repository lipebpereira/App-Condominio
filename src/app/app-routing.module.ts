import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicial',
    loadChildren: () => import('./pages/inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'features',
    loadChildren: () => import('./pages/features/features.module').then( m => m.FeaturesPageModule)
  },
  {
    path: 'feature-reserva',
    loadChildren: () => import('./pages/feature-reserva/feature-reserva.module').then( m => m.FeatureReservaPageModule)
  },
  {
    path: 'feature-reserva-churrasqueira',
    loadChildren: () => import('./pages/feature-reserva-churrasqueira/feature-reserva-churrasqueira.module').then( m => m.FeatureReservaChurrasqueiraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
