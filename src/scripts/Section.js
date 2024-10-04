export default class Section{
    constructor({items, renderer}, containerSelector){
        this.items = items;
        this.renderer = renderer;
        this.container = containerSelector;
    }

    renderItems(){
        this.items.forEach(item => {
            this.renderer(item);
          });
    }

    addItem(element){
        this.container.append(element);
    }

    addCard(element){
        this.container.prepend(element);
    }
}

