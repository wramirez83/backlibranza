import ITestimonials from "./ITestimonials";
const testimonials = require("../../../../models").testimonials;

class TestimonialsController implements ITestimonials{
    user_id = 0;
    testimony = '';
    status = '';

    constructor(status: string){
        this.status = status;
    }


    async getAll (status = 'Activo'){
        return await testimonials.findAll({
            order:[['id', 'DESC']],
            where:{
                status: status,
            },
            limit: 3
        }); 
    }
    
}

export default TestimonialsController;