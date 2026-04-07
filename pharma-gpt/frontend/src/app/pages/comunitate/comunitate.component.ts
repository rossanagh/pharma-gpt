import { Component, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MesajeComponent } from '../mesaje/mesaje.component';

import { ForumComponent } from './forum/forum.component';

import { PharmaNavComponent } from '../../components/pharma-nav/pharma-nav.component';



@Component({

  selector: 'app-comunitate',

  standalone: true,

  imports: [CommonModule, PharmaNavComponent, MesajeComponent, ForumComponent],

  templateUrl: './comunitate.component.html',

  styleUrl: './comunitate.component.scss'

})

export class ComunitateComponent {

  /** Forum = implicit la intrare în Comunitate */

  tab = signal<'forum' | 'mesaje'>('forum');

}

