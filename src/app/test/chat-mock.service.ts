import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ContactsMockService {
  private talks = [
    {
      talkId: 1,
      messages: [
        {
          userId: 1,
          message: 'Lorem ipsum dolor sit amet...',
          dateTime: Date.now() + 1,
        },
        {
          userId: 2,
          message: 'Lorem ipsum dolor sit amet...',
          dateTime: Date.now() + 2,
        },
        {
          userId: 1,
          message: 'Lorem ipsum dolor sit amet...',
          dateTime: Date.now() + 3,
        },
      ],
    },
    {
      talkId: 2,
      messages: [
        {
          userId: 1,
          message: 'Lorem ipsum dolor sit amet...',
          dateTime: Date.now() + 1,
        },
        {
          userId: 3,
          message: 'Lorem ipsum dolor sit amet...',
          dateTime: Date.now() + 2,
        },
        {
          userId: 1,
          message: 'Lorem ipsum dolor sit amet...',
          dateTime: Date.now() + 3,
        },
      ],
    },
  ];

  private users = [
    {
      id: 1,
      name: 'Lourenço',
      office: 'Gerente de projetos',
      email: 'lourenco.aguiar@gmail.com',
      phone: '+55 (11) 9 9999-1543',
      filial: 'Ribeirão Pires',
      standardScrap: 'Se sempre inovador, blablabla',
    },
    {
      id: 2,
      name: 'Maria',
      office: 'Gerente de RH',
      email: 'maria.costa@gmail.com',
      phone: '+55 (11) 9 9999-1256',
      filial: 'Ribeirão Pires',
      standardScrap: 'Se sempre inovador, blablabla',
    },
    {
      id: 3,
      name: 'João',
      office: 'Fiscal',
      email: 'joao.costa@gmail.com',
      phone: '+55 (11) 9 9999-1290',
      filial: 'Ribeirão Pires',
      standardScrap: 'Se sempre inovador, blablabla',
    },
  ];

  getTalks() {
    return this.talks;
  }

  getTalk(id) {
    return this.talks.find(({ talkId }) => id === talkId);
  }

  getUserInfo(userId) {
    return this.users.find(({ id }) => id === userId);
  }

  sendMessage(message, id) {
    const index = this.talks.findIndex(({ talkId }) => id === talkId);
    this.talks[index].messages.push({
      dateTime: Date.now(),
      message,
      userId: 1,
    });
    return this.talks;
  }

  findTalk(searchTerm){
  }
}
