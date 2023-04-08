export default interface IBanner{
    user_id: Number;
    section: string;
    img: string;
    alt: string;
    link: string;
    position: Number;
    screen?: string;
    status?: string;

    getAll: (origin: string) => Object;

    
}