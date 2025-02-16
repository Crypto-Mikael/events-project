import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Event, EventsService } from '../../../services/events.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css'],
  imports: [CommonModule, FormsModule, DatePipe],
})
export class EventsPageComponent implements OnInit {
  constructor(public eventsService: EventsService) {}
  async ngOnInit() {
    const events = await firstValueFrom(this.eventsService.get());
    this.items = events.map((event) => ({ ...event, editing: false }));
  }

  logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  items: (Event & { editing: boolean })[] = [];

  deleteItem = async (id: number) => {
    await firstValueFrom(this.eventsService.delete(id));
    this.items = this.items.filter((v) => v.id !== id);
  };

  addNewItem = () => {
    this.items.unshift({
      title: 'SUPER EVENTO',
      description:
        'Um evento muito maneiro cheio de atrações e surpresas. Um evento muito maneiro cheio de atrações e surpresas. Um evento muito maneiro cheio de atrações e surpresas.',
      imageUrl:
        'https://redacao.rhpravoce.com.br/wp-content/uploads/2022/10/Brasil-devera-completar-quase-600-mil-eventos-realizados-em-2022-1.png',
      startIn: '2025-03-15T18:00:00',
      endsIn: '2025-03-15T23:59:00',
      editing: true,
    });
  };

  changeItemOrCreate = async (event: Event & { editing: boolean }) => {
    if (event.id) {
      await firstValueFrom(this.eventsService.put(event));
    } else {
      const id = await firstValueFrom(this.eventsService.post(event));
      this.items[0].id = id;
    }
    event.editing = false;
  };
}
