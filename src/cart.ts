import Characteristic from './characteristic';
export default class Cart {
    private _items: Characteristic[] = [];

    add(item: Characteristic): void{
        this._items.push(item);
    };

    get items(): Characteristic[] {
        return [...this._items]
    };

}