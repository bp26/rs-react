import { rest } from 'msw';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const name = req.url.searchParams.get('name');

    if (name === '') {
      return res(
        ctx.status(200),
        ctx.json({
          info: {
            count: 2,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 2,
              name: 'Morty Smith',
              status: 'Alive',
              species: 'Human',
              type: '',
              gender: 'Male',
              origin: { name: 'unknown', url: '' },
              location: {
                name: 'Citadel of Ricks',
                url: 'https://rickandmortyapi.com/api/location/3',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/51',
              ],
              url: 'https://rickandmortyapi.com/api/character/2',
              created: '2017-11-04T18:50:21.651Z',
            },
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              type: '',
              gender: 'Male',
              origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
              location: {
                name: 'Citadel of Ricks',
                url: 'https://rickandmortyapi.com/api/location/3',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/51',
              ],
              url: 'https://rickandmortyapi.com/api/character/1',
              created: '2017-11-04T18:48:46.250Z',
            },
          ],
        })
      );
    }

    if (name === 'morty') {
      return res(
        ctx.status(200),
        ctx.json({
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 2,
              name: 'Morty Smith',
              status: 'Alive',
              species: 'Human',
              type: '',
              gender: 'Male',
              origin: { name: 'unknown', url: '' },
              location: {
                name: 'Citadel of Ricks',
                url: 'https://rickandmortyapi.com/api/location/3',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/51',
              ],
              url: 'https://rickandmortyapi.com/api/character/2',
              created: '2017-11-04T18:50:21.651Z',
            },
          ],
        })
      );
    }

    if (name === 'rick') {
      return res(
        ctx.status(200),
        ctx.json({
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              type: '',
              gender: 'Male',
              origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
              location: {
                name: 'Citadel of Ricks',
                url: 'https://rickandmortyapi.com/api/location/3',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [
                'https://rickandmortyapi.com/api/episode/1',
                'https://rickandmortyapi.com/api/episode/51',
              ],
              url: 'https://rickandmortyapi.com/api/character/1',
              created: '2017-11-04T18:48:46.250Z',
            },
          ],
        })
      );
    }

    return res(ctx.status(404), ctx.json({ error: 'Nothing found' }));
  }),

  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    const id = req.url.pathname.split('/').at(-1);

    if (id === '6') {
      return res(
        ctx.status(200),
        ctx.json({
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 6,
              name: 'Abadango Cluster Princess',
              status: 'Alive',
              species: 'Alien',
              type: '',
              gender: 'Female',
              origin: { name: 'Abadango', url: 'https://rickandmortyapi.com/api/location/2' },
              location: { name: 'Abadango', url: 'https://rickandmortyapi.com/api/location/2' },
              image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
              episode: ['https://rickandmortyapi.com/api/episode/27'],
              url: 'https://rickandmortyapi.com/api/character/6',
              created: '2017-11-04T19:50:28.250Z',
            },
          ],
        })
      );
    }

    return res(ctx.status(404), ctx.json({ error: 'Nothing found' }));
  }),
];
