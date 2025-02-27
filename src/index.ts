import { Destination, } from "./Destination";
import { Cargo, } from "./Cargo";
import { TrackingMap } from "./TrackingMap";

const destination = new Destination();
console.log(destination);

const cargo = new Cargo();
console.log(cargo);

const trackingtap = new TrackingMap('g-map');
trackingtap.attachMarker(destination);
trackingtap.attachMarker(cargo);