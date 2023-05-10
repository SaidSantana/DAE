const Tarea = require('./../models/tarea');

class ControladorTareas{
    static listar(req, res){
        Tarea.find({}).lean()
             .then(tareas =>{
                res.send('tareas');
            })
            .catch(err => {
                res.status(404).send('No se encontro las tareas');
            });
    }
    static ver(req,res){
        Tarea.findById(req.params.id).then(res =>{
            res.status(200).send('Ver la tarea' + req.params.id);
        }).catch(err =>{
            res.status(404).send('No se encontro la tarea');
        });
    }
    static postTarea(req,res){
        try{
            const tarea= new Tarea({
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                status: req.body.status
            });
            tarea.save().then(res=>{
                res.status(200).send('Se creo tarea');
            }).catch(err =>{
                res.status(400).send('Faltan datos');
            });
        }catch (err){
            res.status(404).send('No se creo la tarea');
        }
    }
    static putTarea(req,res){
        Tarea.findById(req.params.id).then(tarea =>{
            tarea.titulo= tarea.titulo || req.body.titulo;
            tarea.descripcion= tarea.descripcion || req.body.descripcion;
            tarea.status = tarea.status || req.body.status;
            tarea.save().then(res =>{
                res.status(200).send('Se actualizo la tarea');
            }).catch(err =>{
                res.status(400).send('Datos de entrada inválidos');
            });
        }).catch(error=>{
            res.status(404).send('No se encontro la tarea', error);
        });
    }
    static borrar(req,res){
        Tarea.findByIdAndDelete(req.params.id).then(tarea =>{
            if(!tarea){
                res.status(404).send('La tarea no existe');
            }
            res.status(200).send('Se elimino la tarea id: ', req.params.id);
            
        }).catch(err =>{
            res.status(400).send('Ocurrio un error');
        });
        
    }
}

module.exports  = ControladorTareas;  