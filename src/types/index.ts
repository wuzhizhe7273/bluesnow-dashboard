export interface MenuItemType{
    label:string,
    href:string,
    icon:string
}

export interface TaxonomyTree{
    item:Taxonomy,
    children?:Taxonomy[]
}
export interface Taxonomy{
    tid:string,
    name:string,
    path:string,
    desc:string,
    created:string,
    changed:string
}