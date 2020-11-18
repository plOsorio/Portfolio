import { Component, OnInit } from '@angular/core';
import { PortfolioServicesService } from '../services/portfolio-services.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

//We create the constructor linked with service folder then with the bd firebase
 //1first of all we have to create a constructor, 2 we import the service folder, 3 we have to worke with the filing json since the webservices 
  constructor(public portfolio: PortfolioServicesService) { }

  ngOnInit(): void {
  }

}
