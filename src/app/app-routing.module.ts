import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'ambigram', loadChildren: () => import('./ambigram/ambigram.module').then(m => m.AmbigramPageModule) },


  { path: 'family', loadChildren: './family/family.module#FamilyPageModule' },
  { path: 'aeauth', loadChildren: './aeauth/aeauth.module#AeauthPageModule' },
  { path: 'aeplaces', loadChildren: './aeplaces/aeplaces.module#AeplacesPageModule' },
  { path: 'aebookings', loadChildren: './aebookings/aebookings.module#AebookingsPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
