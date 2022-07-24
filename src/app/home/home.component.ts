import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Card 1',
            cols: 2,
            rows: 1,
            img: 'https://img.freepik.com/free-photo/tall-trees-forest-mountains-covered-with-fog_181624-11289.jpg?t=st=1658550096~exp=1658550696~hmac=aa8aa293018d11f5962b77e659eef886237f20b2b2dda51407a3fbcb617c8c60&w=996 ',
          },
          {
            title: 'Card 2',
            img: 'https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg?t=st=1658646511~exp=1658647111~hmac=7fbce72277fb301c1762b1c2f8f05ddc481e9cc3b0e5cf0e3f82a6b69567e51c&w=996 ',
            cols: 1,
            rows: 1,
          },
          {
            title: 'Card 3',
            img: 'https://img.freepik.com/free-photo/beautiful-shot-sunrise-country-road-netherlands_181624-29198.jpg?t=st=1658624416~exp=1658625016~hmac=8b56a1ed72537ad05d7d37d5705b83a2d26bc3701af6e7137c9747339b4564ed&w=996',
            cols: 1,
            rows: 1,
          },
        ];
      }
      return [
        {
          title: 'Card 1',
          img: 'https://img.freepik.com/free-photo/tall-trees-forest-mountains-covered-with-fog_181624-11289.jpg?t=st=1658550096~exp=1658550696~hmac=aa8aa293018d11f5962b77e659eef886237f20b2b2dda51407a3fbcb617c8c60&w=996 ',
          cols: 1,
          rows: 1,
        },
        {
          title: 'Card 2',
          img: 'https://img.freepik.com/free-photo/river-surrounded-by-forests-cloudy-sky-thuringia-germany_181624-30863.jpg?t=st=1658646511~exp=1658647111~hmac=7fbce72277fb301c1762b1c2f8f05ddc481e9cc3b0e5cf0e3f82a6b69567e51c&w=996 ',
          cols: 1,
          rows: 1,
        },
        {
          title: 'Card 3',
          img: 'https://img.freepik.com/free-photo/beautiful-shot-sunrise-country-road-netherlands_181624-29198.jpg?t=st=1658624416~exp=1658625016~hmac=8b56a1ed72537ad05d7d37d5705b83a2d26bc3701af6e7137c9747339b4564ed&w=996',
          cols: 1,
          rows: 1,
        },
      ];
    })
  );
  constructor(private breakpointObserver: BreakpointObserver) {}
}
