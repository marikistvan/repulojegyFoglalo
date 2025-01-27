import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'browse',
    loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule),
  },
  {
    path: 'search',
    loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'featured',
    loadChildren: () => import('~/app/featured/featured.module').then((m) => m.FeaturedModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'aichat',
    loadChildren: () => import('~/app/aichat/aichat.module').then((m) => m.AiChatModule),
  },
  {
    path: 'basket',
    loadChildren: () => import('~/app/basket/basket.module').then((m) => m.BasketModule),
  },
  {
    path: 'shopping',
    loadChildren: () => import('~/app/shopping/shopping.module').then((m) => m.ShoppingModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('~/app/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'login',
    loadChildren: () =>
    import('~/app/login/login.module').then(m => m.LoginModule)
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
