import Characteristic from './characteristic';

export default class Movie implements Characteristic {
    constructor(
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: string[],
        readonly time: number,
    ){};
};