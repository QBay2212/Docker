
import { Router } from 'express';
const router= Router()
import * as contribuyente from '../controllers/contribuyente.controller'

router.get('/', contribuyente.getContribuyente);
router.get('/:id', contribuyente.getContribuyenteId);
router.post('/', contribuyente.crearContribuyente);
router.put('/:id', contribuyente.updateContribuyente);
router.delete('/:id', contribuyente.deleteContribuyente);
export default router;
