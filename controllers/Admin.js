import { Products }  from '../models/products.js'


export const AdminIndex= ( req , res) =>{

    res.render('Admin')
   
}

 
// Assuming you have already set up Express and included necessary middleware

export const Post_Product = async (req, res) => {
    if (req.method !== "POST") {
     
        res.render('Admin' , {errors:     "Only Post method is allowed"} )
    } 


    const {category , title, price, description , sales} = req.body


    if (!category || !title || !price || !description || !sales ) {
        res.render('Admin' , {errors: "All fields are required"})
    }
    
    else{
    let product_image = req.imgname
     await Products.create({category  , title , description , price , sales , product_image })

    res.render("Admin" , {message: "Product uploaded"})

    }

};
