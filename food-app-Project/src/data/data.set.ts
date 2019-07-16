export const Categories: any = [
    {
        id: 1,
        description: "HOME",
    },{
        id: 2,
        description: "NEW PRODUCTS",
    },{
        id: 3,
        description: "SPECIALS",
    },{
        id: 4,
        description: "ALL PRODUCTS",
    },{
        id: 5,
        description: "SNACKS",
    },{
        id: 6,
        description: "CONTACT",
    }
];


export function findCourseById(CategoryId:number) {
    return Categories.find(Category => Category.id === CategoryId);
}