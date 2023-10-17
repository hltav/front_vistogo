import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConductorService } from 'src/app/services/conductor.service';
import { ConductormodalComponent } from '../../modals/conductormodal/conductormodal.component';

@Component({
  selector: 'app-view-conductor',
  templateUrl: './view-conductor.component.html',
  styleUrls: ['./view-conductor.component.sass'],
})
export class ViewConductorComponent {
  @Input() conductor: any;
  conductors!: any[];
  selectedConductor: any;
  id: any;

  constructor(
    private conductorservice: ConductorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.conductorservice.getConductors().subscribe((data) => {
      this.conductors = data;
    });
  }

  openEditModal(conductor: any): void {
    const dialogRef = this.dialog.open(ConductormodalComponent, {
      data: conductor,
      width: '900px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal fechado', result);
    });
  }

  formatName(allName: string): string {
    const partsOfName = allName.split(' ');
    const firstName = partsOfName[0];
    const lastName = partsOfName[partsOfName.length - 1];
    const middleNames = partsOfName
      .slice(1, -1)
      .map((nome) => nome[0])
      .join(' ');

    return `${firstName} ${middleNames} ${lastName}`;
  }

  deleteConductor(conductor: any): void {
    if (confirm('Tem certeza que deseja excluir este condutor?')) {
      this.conductorservice.deleteConductor(conductor.id).subscribe(() => {
        this.conductors = this.conductors.filter(
          (c: any) => c.id !== conductor.id
        );
        this.selectedConductor = null;
      });
    }
  }
}
