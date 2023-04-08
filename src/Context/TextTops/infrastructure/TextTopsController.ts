import TextTopsInterface from './TextTopsRepository';
const text_tops = require("../../../../models").text_tops;
class TextTopsController implements TextTopsInterface{
    icons = '';
    word_one = '';
    constructor()
    {

    }
    async getAll(): Promise<Object>
    {
        return await text_tops.findAll({
            where: {
                status: 'Activo'
            }
        });
    }

}

export default TextTopsController;