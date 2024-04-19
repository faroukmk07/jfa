import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplistComponent } from './iplist.component';

describe('IplistComponent', () => {
  let component: IplistComponent;
  let fixture: ComponentFixture<IplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IplistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
