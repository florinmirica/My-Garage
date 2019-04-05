import {
	Component,
	OnInit,
	Output,
	Input,
	EventEmitter,
	Inject
} from "@angular/core";

import { DatePipe } from "@angular/common";

import { CarObject } from "../car-object.model";

@Component({
	selector: "app-garage",
	templateUrl: "./garage.component.html",
	styleUrls: ["./garage.component.css"]
})
export class GarageComponent implements OnInit {
	@Input() cars: CarObject[];
	@Output() updateEvent = new EventEmitter();

	allowEdit: boolean[] = [];

	constructor(private garageApi: GarageApi) {}

	ngOnInit() {
		this.allowEdit = new Array(this.cars.length);
		for (let i: number = 0; i < this.cars.length; i++) {
			this.allowEdit[i] = false;
		}
	}
