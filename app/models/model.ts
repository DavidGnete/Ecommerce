import mongoose,{Schema,Document,Model} from "mongoose";


export interface Product extends Document{
    sku:string,
    name:string,
    description: string,
    category:string,
    image:string,
    price:string
}

const Products = new Schema<Product>(
    {
        sku: {type:String, required:true},
        name: {type:String, required:true},
        description: {type:String, required:true},
        category: {type: String, required: true},
        image: {type: String, required: true},
        price: {type:String, required: true}
    }
)

const Store: Model<Product>=(mongoose.models.Store as Model<Product>) || mongoose.model<Product>('Store', Products);

export default Store;