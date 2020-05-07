export interface Category{
    title: string,
    image: string,
    _id: number,
    subCategory: [{type:string}],
    skills: [{type: number}],
    active: boolean
}