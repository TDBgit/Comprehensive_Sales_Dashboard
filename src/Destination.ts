import faker from '@faker-js/faker';

export class Destination {
    
    receiver: string;
    
    location: {
        lat: number;
        lon: number;
    };

    constructor() {
        this.receiver = faker.name.firstName();
        this.location = {
            lat: +faker.address.lat(),
            lon: +faker.address.lon(),
        };
    }
}