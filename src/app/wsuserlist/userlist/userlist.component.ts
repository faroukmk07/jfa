import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Wsuser } from '../../models/wsuser';
import { WsuserService } from '../../services/wsuser.service';
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
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
  imports      : [NgIf, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, RouterLink,TableModule],

})
export class UserlistComponent implements OnInit {
  
  wsusers:Wsuser[]=[];
 
  
  constructor(private wsuserservice:WsuserService) { }
  ngOnInit(): void {
    this.loadWsusers();
  }
  loadWsusers(): void {
    this.wsuserservice.getAllWSUsers().subscribe(wsusers => {
      this.wsusers = wsusers;
    });
    
}
}