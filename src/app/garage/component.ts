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
import { GarageApi } from "../garage/garage-api.service";
