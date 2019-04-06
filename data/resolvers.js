import mongoose from "mongoose";
import { Usuarios, Giros, FormasJuridicas, Grados } from "./db";
import { rejects } from "assert";

export const resolvers = {
  Query: {
    // Usuarios
    getUsuarios: (root, { limite, offset }) => {
      return Usuarios.find({})
        .limit(limite)
        .skip(offset);
    },
    getUsuario: (root, { id }) => {
      return new Promise((resolve, object) => {
        Usuarios.findById({ _id: id }, (error, cliente) => {
          if (error) rejects(error);
          else resolve(cliente);
        });
      });
    },
    totalUsuarios: root => {
      return new Promise((resolve, object) => {
        Usuarios.countDocuments({}, (error, count) => {
          if (error) rejects(error);
          else resolve(count);
        });
      });
    },

    //Giros
    getGiros: (root, { limite, offset }) => {
      return Giros.find({})
        .limit(limite)
        .skip(offset);
    },
    getGiro: (root, { id }) => {
      return new Promise((resolve, object) => {
        Giros.findById({ _id: id }, (error, producto) => {
          if (error) rejects(error);
          else resolve(producto);
        });
      });
    },
    totalGiros: root => {
      return new Promise((resolve, object) => {
        Giros.countDocuments({}, (error, count) => {
          if (error) rejects(error);
          else resolve(count);
        });
      });
    },

    //Formas Juridicas
    getFormasJuridicas: (root, { limite, offset }) => {
      return FormasJuridicas.find({})
        .limit(limite)
        .skip(offset);
    },
    getFormaJuridica: (root, { id }) => {
      return new Promise((resolve, object) => {
        FormasJuridicas.findById({ _id: id }, (error, producto) => {
          if (error) rejects(error);
          else resolve(producto);
        });
      });
    },
    totalFormasJuridicas: root => {
      return new Promise((resolve, object) => {
        FormasJuridicas.countDocuments({}, (error, count) => {
          if (error) rejects(error);
          else resolve(count);
        });
      });
    },

    // Grados
    getGrados: (root, { limite, offset }) => {
      return Grados.find({})
        .limit(limite)
        .skip(offset);
    },
    getGrado: (root, { id }) => {
      return new Promise((resolve, object) => {
        Grados.findById({ _id: id }, (error, producto) => {
          if (error) rejects(error);
          else resolve(producto);
        });
      });
    },
    totalGrados: root => {
      return new Promise((resolve, object) => {
        Grados.countDocuments({}, (error, count) => {
          if (error) rejects(error);
          else resolve(count);
        });
      });
    },

    //FormaJuridicas
    getAmbitoEstatales: (root, { limite, offset }) => {
      return AmbitoEstatal.find({})
        .limit(limite)
        .skip(offset);
    },
    getAmbitoEstatal: (root, { id }) => {
      return new Promise((resolve, object) => {
        AmbitoEstatal.findById({ _id: id }, (error, producto) => {
          if (error) rejects(error);
          else resolve(producto);
        });
      });
    },
    totalAmbitoEstatal: root => {
      return new Promise((resolve, object) => {
        AmbitoEstatal.countDocuments({}, (error, count) => {
          if (error) rejects(error);
          else resolve(count);
        });
      });
    }
  },
  Mutation: {
    //Mutations de Usuarios
    crearUsuario: (root, { input }) => {
      const nuevoUsuario = new Usuarios({
        nombre: input.nombre,
        usuario: input.usuario,
        password: input.password,
        tipo: input.tipo,
        status: input.status
      });

      nuevoUsuario.id = nuevoUsuario._id;

      return new Promise((resolve, object) => {
        nuevoUsuario.save(error => {
          if (error) rejects(error);
          else resolve(nuevoUsuario);
        });
      });
    },
    actualizarUsuario: (root, { input }) => {
      return new Promise((resolve, object) => {
        Usuarios.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, cliente) => {
            if (error) rejects(error);
            else resolve(cliente);
          }
        );
      });
    },
    eliminarUsuario: (root, { id }) => {
      return new Promise((resolve, object) => {
        Usuarios.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    },

    //Mutations de Giros
    crearGiro: (root, { input }) => {
      const nuevoGiro = new Giros({
        nombre: input.nombre,
        descripcion: input.descripcion
      });
      nuevoGiro.id = nuevoGiro._id;

      return new Promise((resolve, object) => {
        nuevoGiro.save(error => {
          if (error) rejects(error);
          else resolve(nuevoGiro);
        });
      });
    },
    actualizarGiro: (root, { input }) => {
      return new Promise((resolve, object) => {
        Giros.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, producto) => {
            if (error) rejects(error);
            else resolve(producto);
          }
        );
      });
    },
    eliminarGiro: (root, { id }) => {
      return new Promise((resolve, object) => {
        Giros.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    },

    //Mutations de FormaJuridicas
    crearFormaJuridica: (root, { input }) => {
      const nuevoFormaJuridica = new FormasJuridicas({
        nombre: input.nombre,
        descripcion: input.descripcion
      });
      nuevoFormaJuridica.id = nuevoFormaJuridica._id;

      return new Promise((resolve, object) => {
        nuevoFormaJuridica.save(error => {
          if (error) rejects(error);
          else resolve(nuevoFormaJuridica);
        });
      });
    },
    actualizarFormaJuridica: (root, { input }) => {
      return new Promise((resolve, object) => {
        FormasJuridicas.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, element) => {
            if (error) rejects(error);
            else resolve(element);
          }
        );
      });
    },
    eliminarFormaJuridica: (root, { id }) => {
      return new Promise((resolve, object) => {
        FormasJuridicas.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    },

    //Mutations de Grados
    crearGrado: (root, { input }) => {
      const nuevoGrado = new Grados({
        nombre: input.nombre,
        descripcion: input.descripcion
      });
      nuevoGrado.id = nuevoGrado._id;

      return new Promise((resolve, object) => {
        nuevoGrado.save(error => {
          if (error) rejects(error);
          else resolve(nuevoGrado);
        });
      });
    },
    actualizarGrado: (root, { input }) => {
      return new Promise((resolve, object) => {
        Grados.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, producto) => {
            if (error) rejects(error);
            else resolve(producto);
          }
        );
      });
    },
    eliminarGrado: (root, { id }) => {
      return new Promise((resolve, object) => {
        Grados.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    },

    //Mutations de AmbitoEstatals
    crearAmbitoEstatal: (root, { input }) => {
      const nuevoAmbitoEstatal = new AmbitoEstatals({
        nombre: input.nombre,
        descripcion: input.descripcion
      });
      nuevoAmbitoEstatal.id = nuevoAmbitoEstatal._id;

      return new Promise((resolve, object) => {
        nuevoAmbitoEstatal.save(error => {
          if (error) rejects(error);
          else resolve(nuevoAmbitoEstatal);
        });
      });
    },
    actualizarAmbitoEstatal: (root, { input }) => {
      return new Promise((resolve, object) => {
        AmbitoEstatals.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, producto) => {
            if (error) rejects(error);
            else resolve(producto);
          }
        );
      });
    },
    eliminarAmbitoEstatal: (root, { id }) => {
      return new Promise((resolve, object) => {
        AmbitoEstatals.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    },

    //Mutations de Impuestos
    crearImpuesto: (root, { input }) => {
      const nuevoImpuesto = new Impuestos({
        nombre: input.nombre,
        descripcion: input.descripcion
      });
      nuevoImpuesto.id = nuevoImpuesto._id;

      return new Promise((resolve, object) => {
        nuevoImpuesto.save(error => {
          if (error) rejects(error);
          else resolve(nuevoImpuesto);
        });
      });
    },
    actualizarImpuesto: (root, { input }) => {
      return new Promise((resolve, object) => {
        Impuestos.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, producto) => {
            if (error) rejects(error);
            else resolve(producto);
          }
        );
      });
    },
    eliminarImpuesto: (root, { id }) => {
      return new Promise((resolve, object) => {
        Impuestos.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    },

    //Mutations de Contabilidads
    crearContabilidad: (root, { input }) => {
      const nuevoContabilidad = new Contabilidads({
        nombre: input.nombre,
        descripcion: input.descripcion
      });
      nuevoContabilidad.id = nuevoContabilidad._id;

      return new Promise((resolve, object) => {
        nuevoContabilidad.save(error => {
          if (error) rejects(error);
          else resolve(nuevoContabilidad);
        });
      });
    },
    actualizarContabilidad: (root, { input }) => {
      return new Promise((resolve, object) => {
        Contabilidads.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, producto) => {
            if (error) rejects(error);
            else resolve(producto);
          }
        );
      });
    },
    eliminarContabilidad: (root, { id }) => {
      return new Promise((resolve, object) => {
        Contabilidads.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    },

    //Mutations de Tendencias
    crearTendencia: (root, { input }) => {
      const nuevoTendencia = new Tendencias({
        nombre: input.nombre,
        descripcion: input.descripcion
      });
      nuevoTendencia.id = nuevoTendencia._id;

      return new Promise((resolve, object) => {
        nuevoTendencia.save(error => {
          if (error) rejects(error);
          else resolve(nuevoTendencia);
        });
      });
    },
    actualizarTendencia: (root, { input }) => {
      return new Promise((resolve, object) => {
        Tendencias.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, producto) => {
            if (error) rejects(error);
            else resolve(producto);
          }
        );
      });
    },
    eliminarTendencia: (root, { id }) => {
      return new Promise((resolve, object) => {
        Tendencias.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    },

    //Mutations de Comercializacions
    crearComercializacion: (root, { input }) => {
      const nuevoComercializacion = new Comercializacions({
        nombre: input.nombre,
        descripcion: input.descripcion
      });
      nuevoComercializacion.id = nuevoComercializacion._id;

      return new Promise((resolve, object) => {
        nuevoComercializacion.save(error => {
          if (error) rejects(error);
          else resolve(nuevoComercializacion);
        });
      });
    },
    actualizarComercializacion: (root, { input }) => {
      return new Promise((resolve, object) => {
        Comercializacions.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, producto) => {
            if (error) rejects(error);
            else resolve(producto);
          }
        );
      });
    },
    eliminarComercializacion: (root, { id }) => {
      return new Promise((resolve, object) => {
        Comercializacions.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    },

    //Mutations de Departamentos
    crearDepartamento: (root, { input }) => {
      const nuevoDepartamento = new Departamentos({
        nombre: input.nombre,
        descripcion: input.descripcion
      });
      nuevoDepartamento.id = nuevoDepartamento._id;

      return new Promise((resolve, object) => {
        nuevoDepartamento.save(error => {
          if (error) rejects(error);
          else resolve(nuevoDepartamento);
        });
      });
    },
    actualizarDepartamento: (root, { input }) => {
      return new Promise((resolve, object) => {
        Departamentos.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (error, producto) => {
            if (error) rejects(error);
            else resolve(producto);
          }
        );
      });
    },
    eliminarDepartamento: (root, { id }) => {
      return new Promise((resolve, object) => {
        Departamentos.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("Registro eliminado correctamente");
        });
      });
    }

    // //Mutations de lols
    // crearlol: (root, { input }) => {
    //   const nuevolol = new lols({
    //     nombre: input.nombre,
    //     descripcion: input.descripcion
    //   });
    //   nuevolol.id = nuevolol._id;

    //   return new Promise((resolve, object) => {
    //     nuevolol.save(error => {
    //       if (error) rejects(error);
    //       else resolve(nuevolol);
    //     });
    //   });
    // },
    // actualizarlol: (root, { input }) => {
    //   return new Promise((resolve, object) => {
    //     lols.findOneAndUpdate(
    //       { _id: input.id },
    //       input,
    //       { new: true },
    //       (error, producto) => {
    //         if (error) rejects(error);
    //         else resolve(producto);
    //       }
    //     );
    //   });
    // },
    // eliminarlol: (root, { id }) => {
    //   return new Promise((resolve, object) => {
    //     lols.findOneAndDelete({ _id: id }, error => {
    //       if (error) rejects(error);
    //       else resolve("Registro eliminado correctamente");
    //     });
    //   });
    // },
  } //Cierre Mutation
};
