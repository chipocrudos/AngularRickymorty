import { Location } from "./location";
import { Origin } from "./origin";

export interface Character {
    id: number;
    name: string;
    species: string;
    gender: string;
    created: string;
    status: string;
    image: string;
    origin: Origin;
    location: Location;
}
