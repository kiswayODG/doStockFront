import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavAccordionDirective } from './sidemenu/nav-accordion.directive';
import { NavAccordionItemDirective } from './sidemenu/nav-accordion-item.directive';
import { NavAccordionToggleDirective } from './sidemenu/nav-accordion-toggle.directive';

import { TopmenuComponent } from './topmenu/topmenu.component';
import { TopmenuPanelComponent } from './topmenu/topmenu-panel.component';

import { HeaderComponent } from './header/header.component';

import { BrandingComponent } from './widgets/branding.component';
import { GithubButtonComponent } from './widgets/github.component';
import { TranslateComponent } from './widgets/translate.component';
import { UserComponent } from './widgets/user.component';

import { CustomizerComponent } from './customizer/customizer.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    SidemenuComponent,
    NavAccordionDirective,
    NavAccordionItemDirective,
    NavAccordionToggleDirective,
    TopmenuComponent,
    TopmenuPanelComponent,
    HeaderComponent,
    BrandingComponent,
    GithubButtonComponent,
    TranslateComponent,
    UserComponent,
    CustomizerComponent,
  ],
  imports: [SharedModule],
})
export class ThemeModule {}
