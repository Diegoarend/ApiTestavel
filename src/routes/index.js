import express from 'express';
import productsRoute from './products';

const router=express.Router();

router.use('/products',productsRoute);
router.get('/', (req,res) => res.send({hi:'ola'}));






export default router