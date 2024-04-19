import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Wsroles } from '../../models/wsroles';
import { WsrolesService } from '../../services/wsroles.service';
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
  selector: 'app-roleslist',
  templateUrl: './roleslist.component.html',
  styleUrl: './roleslist.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
  imports      : [NgIf, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, RouterLink,TableModule],

})
export class RoleslistComponent implements OnInit {

  wsroles:Wsroles[]=[];

  constructor(private wsrolesservice:WsrolesService) {}
  ngOnInit(): void {
    this.loadWSRoles();
  }
    loadWSRoles(): void {
      this.wsrolesservice.getAllWSRoles().subscribe( wsroles => {
        this.wsroles = wsroles;
      })
    }
  }

