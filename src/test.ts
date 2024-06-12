import Movie from './movie';
import Cart from './cart';

test('add movie', ()=>{
    const cart = new Cart();
    const movie = new Movie(2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентази', 'приключения'], 136);
    cart.add(movie);
expect(cart.items).toEqual([{
        year: 2012,
        country: 'США',
        tagline: 'Avengers Assemble!',
        genre: ['фантастика', 'боевик', 'фентази', 'приключения'],
        time: 136,
    }]);
})

