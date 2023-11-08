import ListItem from "./Listitem"

// it is like a model for mongoDB --> what should it contains
interface ListModel {
    list:ListItem[],
    load():void,
    save():void,
    clearList():void,
    addItem(itemObj:ListItem):void,
    removeItem(id:string):void,
} 

export default class FullList implements ListModel {

    // This FullList class follows the ListMode


    // Create a single instance/Fulllist when DOM is loaded .
    static instance : FullList = new FullList();


    private constructor(
        private _list :ListItem[] = []
    ) {}


    get list():ListItem[]{
        return this._list
    }

    load(): void {

        const storedList:string | null = localStorage.getItem('myList');
        if(typeof storedList !== "string") return

        const parsedData:{_id:string,_itemDescription:string,_checked:boolean}[] = JSON.parse(storedList)
        parsedData.forEach(itemObj=>{
            const newItem  = new ListItem(itemObj._id,itemObj._itemDescription,itemObj._checked)
            FullList.instance.addItem(newItem)
        })
    }

    save():void{
        localStorage.setItem('myList',JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save();
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }

}