import './css/style.css';
import FullList from './model/FullList';
import ListItem from './model/Listitem';
import ListTemplate from './templates/ListTemplate';

const initApp = () : void => {

    const fullList = FullList.instance
    const template = ListTemplate.instance

    // listener to add new items
    const itemEntry = document.getElementById('itemEntryForm') as HTMLFormElement
    itemEntry.addEventListener('submit',(event:SubmitEvent):void=>{
        event.preventDefault()

        // Get item details
        const input = document.getElementById('newItem') as HTMLInputElement
        const newEntryText : string = input.value.trim();
        if(!newEntryText.length) return

        // calculate item ID
        // console.log('first -> '+fullList.list.length);
        
        const itemId:number = fullList.list.length
        ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
        : 1

        // create new item
        const newItem = new ListItem(itemId.toString(),newEntryText)
        console.log(newItem)
        
        // Add item to fullList Local Storage
        fullList.addItem(newItem)

        // re render to update UI
        template.render(fullList)
        
        

    })


    const clrItem = document.getElementById('clearItemsButton') as HTMLButtonElement
    clrItem.addEventListener('click',():void=>{
        fullList.clearList(); // to clear in localStorage
        template.clear(); // to clear the UI
    })

    fullList.load()
    template.render(fullList)
}

document.addEventListener('DOMContentLoaded',initApp);
