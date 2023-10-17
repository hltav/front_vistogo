import { ConductorService } from 'src/app/services/conductor.service';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ViewConductorComponent } from '../../hiddenButtons/view-conductor/view-conductor.component';

@Component({
  selector: 'app-conductormodal',
  templateUrl: './conductormodal.component.html',
  styleUrls: ['./conductormodal.component.sass'],
})
export class ConductormodalComponent {
  conductors: any[] = [];
  isEditable: boolean = false;
  originalConductor: any;

  @ViewChild('firstInput') firstInput: ElementRef | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public conductor: any,
    private dialogRef: MatDialogRef<ViewConductorComponent>,
    private conductorservice: ConductorService
  ) {
    this.originalConductor = { ...this.conductor };
  }

  ngOnInit(): void {
    MAT_DIALOG_DATA;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  enableEditing() {
    this.isEditable = true;
    setTimeout(() => {
      if (this.firstInput) {
        this.firstInput.nativeElement.focus();
      }
    }, 0);
  }

  saveChanges() {
    const { id, phone, address, houseNumber, district, state, city } =
      this.conductor;
    const updatedConductor = {
      id,
      phone,
      address,
      houseNumber,
      district,
      state,
      city,
    };

    this.conductorservice
      .updateConductor(this.conductor.id, updatedConductor)
      .subscribe(
        (response) => {
          alert('Dados atualizados com sucesso')
          this.isEditable = false;
          this.closeModal();
        },
        (error) => {
          console.error('Ocorreu um erro ao atualizar o condutor:', error);
        }
      );
  }

  cancelChanges() {
    this.conductor = { ...this.originalConductor };
    this.isEditable = false;
  }
}
