const {Schema, model}= require('mongoose');
const tareaSchema= new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    status:{type: String, default: 'new'},
    fecha_creacion: {type: Date, default: Date.now}
}); 

module.exports= model('tareas', tareaSchema);