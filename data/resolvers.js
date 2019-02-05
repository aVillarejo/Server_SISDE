import mongoose from "mongoose";
import { Usuarios, Giros } from "./db";
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

    //Mutations de Usuarios

    nuevoGiro: (root, { input }) => {
      const nuevoGiro = new Giros({
        nombre: input.nombre,
        precio: input.precio,
        stock: input.stock
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
    }
  }
};
