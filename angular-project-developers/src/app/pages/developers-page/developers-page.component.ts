import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/models/developer/developer';
import { DeveloperService } from '../../../services/developer-service/developer.service';

@Component({
  selector: 'app-developers-page',
  templateUrl: './developers-page.component.html',
  styleUrls: ['./developers-page.component.scss'],
})
export class DevelopersPageComponent implements OnInit {
  developers = Array<Developer>();
  errorMessage = '';
  loading = true;

  constructor(private developerService: DeveloperService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.developerService.getDevelopers().subscribe({
      next: (data) => {
        this.developers = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err;
        this.loading = false;
      },
    });
  }
}
