"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_1 = require("./movie");
var cart_1 = require("./cart");
test('add movie', function () {
    var cart = new cart_1.default();
    var movie = new movie_1.default(2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентази', 'приключения'], 136);
    cart.add(movie);
    expect(cart.items).toEqual([{
            year: 2012,
            country: 'США',
            tagline: 'Avengers Assemble!',
            genre: ['фантастика', 'боевик', 'фентази', 'приключения'],
            time: 136,
        }]);
});
//# sourceMappingURL=test.js.map