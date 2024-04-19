import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Wsip } from '../../models/wsip';
import { WsipService } from '../../services/wsip.service';
import { NgIf } from '@angular/common';
import { FuseAlertComponent } from '@fuse/components/alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {  TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-iplist',
  templateUrl: './iplist.component.html',
  styleUrl: './iplist.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
  imports      : [NgIf, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, RouterLink,TableModule],

})
export class IplistComponent implements OnInit{
wsips: Wsip[]=[];


constructor(private wsipservice:WsipService){}
ngOnInit(): void {
  this.loadWsips();
}
loadWsips(): void {
  this.wsipservice.getAllWSIPs().subscribe(wsips => {
    this.wsips = wsips;
  });


}
}
