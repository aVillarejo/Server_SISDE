import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/SISDE", { useNewUrlParser: true });
mongoose.set("findAndModify", false);

//Definir schema de Usuarios
const usuariosSchema = new mongoose.Schema({
  nombre: String,
  usuario: String,
  password: String,
  tipo: String, // Alumno, Consultor, Administrador
  status: Boolean
});

//Definir schema de Giros
const girosSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String
});

//Modelo de Usuarios
const Usuarios = mongoose.model("usuarios", usuariosSchema);

//Modelo de Giros
const Giros = mongoose.model("giros", girosSchema);

export { Usuarios, Giros };
