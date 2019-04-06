import mongoose from "mongoose";

mongoose.Promise = global.Promise;
const URI =
  "mongodb+srv://AdminAV:soporte123$@clusterav-qx4cd.mongodb.net/SISDE?retryWrites=true";
const local = "mongodb://localhost/SISDE";
mongoose.connect(URI, { useNewUrlParser: true });
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

//Definir schema de Formas Juridicas
const formaJuridicasSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String
});

//Definir schema de Grado
const gradosSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String
});

const ambitoEstatalSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String
});

//Modelo de Usuarios
const Usuarios = mongoose.model("usuarios", usuariosSchema);
//Modelo de Giros
const Giros = mongoose.model("giros", girosSchema);
//Modelo de Formas Juridica
const FormasJuridicas = mongoose.model("formasJuridicas", formaJuridicasSchema);
//Modelo de Grados
const Grados = mongoose.model("grados", gradosSchema);
//Modelo de AmbitoEstatal
const AmbitoEstatal = mongoose.model("ambitoEstatal", ambitoEstatalSchema);

export { Usuarios, Giros, FormasJuridicas, Grados, AmbitoEstatal };
