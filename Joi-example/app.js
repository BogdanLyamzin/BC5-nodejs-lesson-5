const Joi = require("joi");

const product = {
    name: "iPhone X",
    price: 34000
};

const productSchema = Joi.object({
    name: Joi.string().min(2).max(200).required(),
    price: Joi.number().min(0).required()
});

const {error} = productSchema.validate(product);

const {error: error2} = productSchema.validate({});
// console.log(error2);

(async ()=> {
    try {
        await productSchema.validateAsync({});
    }
    catch(error){
        console.log(error)
    } 
  })()

// (async function (){
//     try {
//         await productSchema.validateAsync({});
//     }
//     catch(error){
//         // console.log(error)
//     }
// }());