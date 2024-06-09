import express from 'express'
import { Register,Login, Auth } from '../controllers/userController.js';
const router  = express.Router();
import { body } from 'express-validator';
import { VerifyUser } from '../middleware/VerifyUser.js';
import { createContact, getContact, getContacts, updateContact, deleteContact } from '../controllers/contactController.js';

//user routes

router.post('/register',[
    body('name').trim().notEmpty().withMessage("Name Should not be Empty"),
    body('email').trim().notEmpty().withMessage("Email Should not be Empty").isEmail().withMessage("Invalid Email!!"),
    body('password').trim().notEmpty().withMessage("Password Should not be Empty").isLength({min:5,max:300}).withMessage("Password length be 5-300")
    ],Register);

router.post('/login',[
        body('email').trim().notEmpty().withMessage("Email Should not be Empty").isEmail().withMessage("Invalid Email!!"),
        body('password').trim().notEmpty().withMessage("Password Should not be Empty").isLength({min:5,max:300}).withMessage("Password length be 5-300")
        ],Login);

router.get('/verify',VerifyUser,Auth);


//contact routes

router.post('/add-contact',VerifyUser,createContact)
router.get('/contacts',VerifyUser,getContacts)
router.get('/contact/:id',VerifyUser,getContact)
router.put('/update-contact/:id',VerifyUser,updateContact)
router.delete('/contact/:id',VerifyUser,deleteContact)

export {router as Router};