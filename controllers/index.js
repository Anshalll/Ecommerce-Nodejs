import { Products } from "../models/products.js"


export const Index = async (req, res) => {
    const Product_data = await Products.find({})
    let userLoggedState = true

    if (!req.cookies.logged) {
       userLoggedState = false

    }
   
console.log(userLoggedState)
    res.render('index', { Data: Product_data, Loggeduser: userLoggedState })
}


export const ProductPage = async (req, res) => {
    let category = req.query.category
    const productid = req.params.id
    
    const findCategory = await Products.findOne({ category: category })
    
    if (findCategory) {

        const related_products = await Products.find({ category: category})
        console.log(related_products)
        const Product_data = await Products.findOne({ _id: productid })
        
        if (Product_data){ 
            let userLoggedState = true

            if (!req.cookies.logged) {
               userLoggedState = false
        
            }
            
            category = category.charAt(0).toUpperCase()  + category.slice(1)
            res.render('Product' , {category:  category,  Data: related_products,  ProductData: Product_data , Loggeduser: userLoggedState }) }
        else {res.send("Unable to find product")}

    }
    else {
        res.send("Unable to find product")
    }
   
}