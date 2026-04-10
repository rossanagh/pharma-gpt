import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PharmaNavComponent } from '../../components/pharma-nav/pharma-nav.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterLink, PharmaNavComponent, TranslatePipe],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss', '../dashboard/dashboard.component.scss']
})
export class StudentsComponent {}
