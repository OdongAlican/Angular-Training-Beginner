export class FoodLayout {
    id:number;
    title:string
    image:any;
    cost:number;

    constructor(id:number, title:string, image:any, cost:number){
        this.id = id
        this.title = title
        this.image = image
        this.cost = cost
    }
}