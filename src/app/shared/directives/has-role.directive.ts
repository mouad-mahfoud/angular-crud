import { AuthService } from './../../core/services/auth.service';
import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authService: AuthService
  ) {}

  @Input() set appHasRole(role: string) {
    if (this.authService.hasRole(role)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else this.viewContainerRef.clear();
  }
}
