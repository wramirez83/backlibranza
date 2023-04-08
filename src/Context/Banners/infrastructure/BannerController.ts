import IBanner from "./IBanner";
const carouses = require("../../../../models").carouses;

class BannerController implements IBanner{
    user_id = 1;
    section = 'home';
    img = '';
    alt = '';
    link = '#';
    position = 1;
    screen ?:  'desktop' | undefined;
    status?: 'Activo' | undefined;
    
    async getAll(origin: string){
        return await carouses.findAll({
            where:{
                section: origin,
            }
        });
    }
    
}

export default BannerController;