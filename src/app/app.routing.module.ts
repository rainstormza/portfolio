// import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';


const appRoutes: Routes = [
	{path : '', redirectTo: '/', pathMatch:'full'},
	// {path : 'project',component : ProjectComponent},
	{path : '**', redirectTo: '/', pathMatch:'full'},
];


// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
