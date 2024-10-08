import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBikeComponent } from './modify-bike.component';

describe('ModifyBikeComponent', () => {
  let component: ModifyBikeComponent;
  let fixture: ComponentFixture<ModifyBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
