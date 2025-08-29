export type ProductCategory = 'gloves' | 'headgear' | 'bag';

export interface Product {
    id : string;
    name : string;
    price : number;
    isAvailable: boolean;
    category : ProductCategory;
    image : string | FileList;
}

export interface ProductQueryParams {
    search?: string;
    sort?: 'name' | 'price';
    order?: 'asc' | 'desc';
    page?: string;
    limit?: string;
    available?: string;
}