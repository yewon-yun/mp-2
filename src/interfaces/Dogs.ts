export interface Dog{
    id: string;
    attributes: {
        name: string;
        description: string;
        images: {
            url: string;
        }[]; //searched on Google how to deal with a list in this case
    };

}