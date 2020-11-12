import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit {
  public valeur: string = "";
  @ViewChild("valeurRef") public element: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log(this.element);
  }

  updateValeur() {
    this.valeur = this.element.nativeElement.value;
  }
}
