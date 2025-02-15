import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css'],
  imports: [FormsModule, DatePipe],
})
export class EventsPageComponent {
  items = [
    {
      title: 'SUPER EVENTO',
      description:
        'Um evento muito maneiro cheio de atrações e surpresas. Um evento muito maneiro cheio de atrações e surpresas. Um evento muito maneiro cheio de atrações e surpresas.',
      imageUrl:
        'https://redacao.rhpravoce.com.br/wp-content/uploads/2022/10/Brasil-devera-completar-quase-600-mil-eventos-realizados-em-2022-1.png',
      startIn: '2025-03-15T18:00:00',
      endsIn: '2025-03-15T23:59:00',
      editing: false,
    },
    {
      title: 'FESTIVAL DAS CORES',
      description: 'Venha celebrar a vida com música, dança e cores vibrantes.',
      imageUrl:
        'https://cdn0.casamientos.com.ar/vendor/1785/3_2/640/png/20_7_151785-169863348457644.webp',
      startIn: '2025-04-20T14:00:00',
      endsIn: '2025-04-20T22:00:00',
      editing: false,
    },
    {
      title: 'ENCONTRO GEEK 2025',
      description:
        'Um evento imperdível para fãs de tecnologia, games e cultura pop.',
      imageUrl:
        'https://cdn0.casamientos.com.ar/vendor/5046/3_2/640/jpg/22894272-844306239063150-7635569560313280080-n_7_115046.webp',
      startIn: '2025-05-10T10:00:00',
      endsIn: '2025-05-12T20:00:00',
      editing: false,
    },
    {
      title: 'CONFERÊNCIA DE NEGÓCIOS',
      description:
        'Networking, palestras e oportunidades para impulsionar sua carreira.',
      imageUrl: 'https://www.conferenceimage.com/business-conference.jpg',
      startIn: '2025-06-05T09:00:00',
      endsIn: '2025-06-06T17:00:00',
      editing: false,
    },
    {
      title: 'SHOW AO VIVO - ARTISTA X',
      description:
        'Uma noite inesquecível com um dos maiores artistas do momento.',
      imageUrl: 'https://www.showimagem.com/artist-live.jpg',
      startIn: '2025-07-18T19:30:00',
      endsIn: '2025-07-18T23:30:00',
      editing: false,
    },
    {
      title: 'CORRIDA SOLIDÁRIA',
      description: 'Uma corrida beneficente para apoiar causas sociais.',
      imageUrl: 'https://www.sportseventimage.com/race.jpg',
      startIn: '2025-08-22T07:00:00',
      endsIn: '2025-08-22T12:00:00',
      editing: false,
    },
  ];

  addNewItem = () => {
    this.items.unshift({
      title: '',
      description: '',
      imageUrl:
        'https://redacao.rhpravoce.com.br/wp-content/uploads/2022/10/Brasil-devera-completar-quase-600-mil-eventos-realizados-em-2022-1.png',
      startIn: '',
      endsIn: '',
      editing: true,
    });
  };
}
