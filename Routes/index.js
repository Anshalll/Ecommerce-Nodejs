import express from 'express'
import { Index , ProductPage }  from '../controllers/index.js'
import { AdminIndex, Post_Product } from '../controllers/Admin.js'
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  path.resolve() + "/uploads")
      
    },
    filename: function (req, file, cb) {
        const string_data = "abcdefghijklmnopqrstuvwxyz1234567890"
        let len_string = string_data.length
  

        let i  = 0
        let filename = ""
        while(i < len_string){

            let random_value= Math.floor(Math.random() * i)
 
            filename += string_data.charAt(random_value)
            i = i + 1
        }

        const get_extension = file.originalname.split('.')[1]
  
        let extension_arr = ['jpg' , 'jpeg' , 'png']
        if (extension_arr.includes(get_extension)) {
            const Img_name = filename + '.' + get_extension
            req.imgname = Img_name
            cb(null , Img_name )
        }
        else{

            cb(new Error("Unsupprted file format"))
        }
       

    }
  })

export const Router = express.Router()
export const Admin_Router = express.Router()
const upload = multer({ storage: storage })


Router.get('/' , Index)
Router.get('/product/:id' , ProductPage)

Admin_Router.route('/').get(AdminIndex).post(upload.single('product_image') , Post_Product)
 
