import { Component } from '@angular/core';
import { ConductorService } from 'src/app/services/conductor.service';

@Component({
  selector: 'app-view-conductor',
  templateUrl: './view-conductor.component.html',
  styleUrls: ['./view-conductor.component.sass']
})
export class ViewConductorComponent {
  conductors!: any[]

  constructor(private conductorservice: ConductorService) {}

  ngOnInit(): void {
    this.conductorservice.getConductors().subscribe((data) => {
      console.log('Data : ', data)
      this.conductors = data
    });
  }

}
