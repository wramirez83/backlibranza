"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const textTops = require("./../../../../models").text_tops;
class TextTopsController {
    save(form) {
        const result = textTops.create({
            icons: form.icons,
            word_one: form.word_one,
        });
        if (result) {
            return {
                status: "success",
                message: "Se ha Creado Correctamente",
            };
        }
        else {
            return {
                status: "error",
                message: "Error al Insertar",
            };
        }
    }
    delete(idText) {
        const result = textTops.destroy({
            where: {
                id: idText,
            },
        });
        if (result) {
            return {
                status: "success",
                message: "Se ha Elimiando Correctamente",
            };
        }
        else {
            return {
                status: "error",
                message: "Error al Eliminar",
            };
        }
    }
}
exports.default = TextTopsController;
//# sourceMappingURL=TextTopsController.js.map