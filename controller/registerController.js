const {validationResult} = require('express-validator'); /*Destructuring de los rtdos. de las validaciones, requiriendo Ex-validator*/ 

module.exports = {
    register : (req,res) =>{
        res.render("register");
    },

    Processregister : (req,res) =>{
        const errors= validationResult(req) /* La constante almacena el resultado de las validaciones de lo que viene a través de req. */
        if(errors.isEmpty()){
            res.render('register',{
                persona: req.body
            })
        }else{
            res.render('register',{
                 errors : errors.mapped(),
                 old : req.body
            }) /* Renderizo la vista del formulario junto con los errores. El mapped() convierte el array en un objeto para poder acceder a c/u de sus atributos */
    
        }
       

    }
}