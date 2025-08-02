import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path:'about/:id',component: AboutComponent},
    {path:'contact',component: ContactComponent},
    {path:'profile',component:ProfileComponent}
];
