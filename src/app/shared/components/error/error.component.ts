import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public error: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.pipe( take(1) ).subscribe((params) => {
      this.error = params['id']
    })

  }

}
