import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulaire-vert',
  templateUrl: './formulaire-vert.component.html',
  styleUrls: ['./formulaire-vert.component.css']
})
export class FormulaireVertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// declaration des variables taher + emine ngclass
public taher = true;
public emine = false;

public styleClass = {
  "form-control": this.taher,
  "bg-success": this.emine
}
onclick_envoyer() {
  this.styleClass["bg-success"] = true
}
onclick_annuler() {
  this.styleClass["bg-success"] = false
}

  // stoker les donnees dans localstorage avec recuperation des données with ngmodel

  public mail = "";
  public pass = "";
  public name ="";
  public lastName ="";
  public users = [];
  public user;
  onClick_ajouter(){

    this.users = JSON.parse(localStorage.getItem('users')) || [];
    
    // if (this.users === null) {
    //   this.users = [];
    // }
   this.user = {
      email: this.mail,
      password : this.pass,
      name : this.name,
      lastName : this.lastName
  }
  this.users.push(this.user);
  localStorage.setItem('users', JSON.stringify(this.users));

  this.mail = "";
  this.pass = "";
  this.name ="";
  this.lastName ="";
}

// Debut Sauvegarder mes données dans un tableau avec ngFor

public tab = JSON.parse(localStorage.getItem('users'));

// supprimer ligne du tableau avec ngIf

supp(index){
  this.tab.splice(index,1);
  localStorage.setItem('users', JSON.stringify(this.tab));

}


}
