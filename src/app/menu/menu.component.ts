import { Component, OnInit } from '@angular/core';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public miToken: number;

  public nombreUsuario: string | null;
  

  constructor(private tokenService: TokenService) {
    this.nombreUsuario = localStorage.getItem('nombreUsuario');
    this.miToken = 0;
  }

  ngOnInit(): void {
    this.tokenService.token$.subscribe((token: number)=>{
      this.miToken = token;
    });    
  }

}
