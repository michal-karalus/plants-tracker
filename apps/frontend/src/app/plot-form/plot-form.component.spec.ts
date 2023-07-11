import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PlotFormComponent } from './plot-form.component';

describe('PlotFormComponent', () => {
  let component: PlotFormComponent;
  let fixture: ComponentFixture<PlotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlotFormComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PlotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
