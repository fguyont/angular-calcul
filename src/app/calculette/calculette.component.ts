import { Component, OnInit } from '@angular/core';
import { Calculette } from '../calculette';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  calculette: Calculette = {
    premier: '0',
    operateur: 'addition',
    deuxieme: '0',
    resultat: '0'
  };

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  calculer(): void {
    let nombre1, nombre2, resu;
    nombre1=parseInt(this.calculette.premier);
    nombre2=parseInt(this.calculette.deuxieme);
    var newDate = new Date();
    var datetime = newDate.getDate() + "/" + (newDate.getMonth()+1) + "/" + newDate.getFullYear() + " à " +newDate.getHours()+ "h"+newDate.getMinutes();
    
    if (isNaN(nombre1) || isNaN(nombre2)) {
      alert("opération impossible");
      this.messageService.add(datetime+ ' Opération impossible : nombres inconnus');
      return;
    }
    if (this.calculette.operateur == 'addition') {
      resu=nombre1+nombre2;
      this.calculette.resultat=resu.toString();
      this.messageService.add(datetime+ ' Addition entre ' +nombre1+ ' et ' +nombre2+ ' Résultat : ' +resu);
      return;
    }
    if (this.calculette.operateur == 'soustraction') {
      resu=nombre1-nombre2;
      this.calculette.resultat=resu.toString();
      this.messageService.add(datetime+ ' Soustraction entre ' +nombre1+ ' et ' +nombre2+ ' Résultat : ' +resu);
      return;
    }
    if (this.calculette.operateur == 'multiplication') {
      resu=nombre1*nombre2;
      this.calculette.resultat=resu.toString();
      this.messageService.add(datetime+ ' Multiplication entre ' +nombre1+ ' et ' +nombre2+ ' Résultat : ' +resu);
      return;
    }
    if (this.calculette.operateur == 'division') {
      if (nombre2 == 0) {
        alert("opération impossible");
        this.messageService.add(datetime+ ' Opération impossible : division par zéro');
        return;
      }
      resu=nombre1/nombre2;
      this.calculette.resultat=resu.toString();
      this.messageService.add(datetime+ ' Division entre ' +nombre1+ ' et ' +nombre2+ ' Résultat : ' +resu);
      return;
    }
  }
}
