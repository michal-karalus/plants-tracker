import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PlotsComponent } from './plots.component';

describe('PlotsComponent', () => {
  let component: PlotsComponent;
  let fixture: ComponentFixture<PlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlotsComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
