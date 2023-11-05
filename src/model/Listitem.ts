export interface Item {
    id:string,
    itemDescription:string,
    checked:boolean,
}

export default class ListItem implements Item {
    constructor(
        private _id:string = '',
        private _itemDescription = '',
        private _checked = false,
    ) {}


    //Getters    
    get id():string{
        return this._id
    }

    get itemDescription():string{
        return this._itemDescription
    }

    get checked():boolean{
        return this._checked
    }

    //Setters
    set id(id:string){
        this._id = id
    }

    set itemDescription(itemDescription:string){
        this._itemDescription = itemDescription
    }

    set checked(checked:boolean){
        this._checked = checked
    }
}