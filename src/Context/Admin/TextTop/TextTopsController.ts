import { Request, Response } from "express";
const textTops = require("./../../../../models").text_tops;
import ITextTops from "./ITextTops";

class TextTopsController {
   save(form: ITextTops) {
    const result = textTops.create({
      icons: form.icons,
      word_one: form.word_one,
    });
    if ( result) {
      return {
        status: "success",
        message: "Se ha Creado Correctamente",
      };
    } else {
      return {
        status: "error",
        message: "Error al Insertar",
      };
    }
  }

   delete(idText: number) {
    const result = textTops.destroy({
      where: {
        id: idText,
      },
    });

    if ( result) {
      return {
        status: "success",
        message: "Se ha Elimiando Correctamente",
      };
    } else {
      return {
        status: "error",
        message: "Error al Eliminar",
      };
    }

    
  }
}

export default TextTopsController;
