export default class Section{
    constructor({items, renderer}, containerSelector){
        this.items = Array.isArray(items) ? items : [];
        this.renderer = renderer;
        this.container = document.querySelector(containerSelector);
    }

    renderItems(){
        this.items.forEach((item) => {
            this.renderer(item);
          });
    }
   

    addCard(element){
        this.container.prepend(element);
    }
}

