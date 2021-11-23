const {body}= require('express-validator');

module.exports=[

body('name').notEmpty().withMessage('Debes ingresar un nombre'),

body('theme').notEmpty().withMessage('Debes seleccionar un color'),

body('email').notEmpty().withMessage('Debes ingresar un email ')
            .isEmail().withMessage('Debes ingresar un email válido'),

body('age').isInt() .withMessage('El valor ingresado debe ser un número'),          
]

