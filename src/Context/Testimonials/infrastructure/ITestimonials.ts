export default interface ITestimonials {
    user_id: Number;
    testimony: string;
    status?: string;

    getAll:(status: string) => Object
}