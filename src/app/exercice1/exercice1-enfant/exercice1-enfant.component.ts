import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import {} from "protractor";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() public updateCompteur: EventEmitter<number> = new EventEmitter<
    number
  >();

  constructor() {}

  ngOnInit() {}

  incrementDecrement(toAdd: number): void {
    this.compteur += toAdd;
    this.updateCompteur.emit(this.compteur);
  }
}
