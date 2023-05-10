const router= require('express').Router(); 

const ControladorTareas = require ('./../controllers/tareas');

router.get('',ControladorTareas.listar);
router.get('/:id',ControladorTareas.ver);
router.post('', ControladorTareas.postTarea); 
router.put('/:id',ControladorTareas.putTarea);
router.delete('/:id',ControladorTareas.borrar);

module.exports=router;
/**
 * @swagger
 * /tareas:
 *  get:
 *    description: Obtener la lista de las tareas
 *    responses: 
 *      200:
 *        description: la lista de las tareas del usuario
 *      404:
 *        description: no se encontraron las tareas 
 * 
 */

/**
 * @swagger
 * /tareas/:id:
 *  get:
 *    description: Obtener una tarea en especifico según el id
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: El id de la tarea deseada
 *        schema:
 *          type: string
 *    responses: 
 *      200:
 *        description: La tarea con ese id
 *      404:
 *        description: La tarea no fue encontrada
 */

/**
 * @swagger
 * /tareas:
 *  post:
 *    description: Crear una nueva tarea
 *    parameters: 
 *      - in: body
 *        name: tarea
 *        description: Datos de la tarea contenidos en un objeto
 *        schema:
 *          type: Object
 *          properties:
 *            titulo:
 *              type: string
 *            descripcion:
 *              type: string
 *            status:
 *              type: sritng
 *            fecha de creación:
 *              type: date
 *    responses: 
 *      200:
 *        description: La tarea fue creada
 *      400:
 *        description: La tare no fue creada
 *      404:
 *        description: Faltaron datos para crea una tarea
 */

/**
 * @swagger
 * /tareas/:id:
 *  put:
 *    description: Actualizar los datos de una tarea existente
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: el id de la tarea a actualizar
 *      - in : body
 *        name: tarea  
 *        description: Datos de la tarea a actualizar contenidos en un objet o
 *        schema:
 *          type: Object
 *          properties:
 *            titulo:
 *              type: string
 *            descripcion:
 *              type: string
 *            status:
 *              type: sritng
 *    responses: 
 *      200:
 *        description: La tarea fue actualizada
 *      400: 
 *        description: Los datos de entrada no son correctos
 *      404:
 *        description: No se encontro la tarea para actualizar
 */
/**
 * @swagger
 * /tareas/:id:
 *  delete:
 *    description: Borrar una tarea según el id
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: El id de la tarea a eliminar
 *        schema:
 *          type: string
 *    responses: 
 *      200:
 *        description: Se elimino la tarea con ese id
 *      400: 
 *        description: Ocurrio un problema con la petición
 *      404:
 *        description: La tarea no fue encontrada
 */

