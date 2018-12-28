import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './index.component.html'
})

export class HomeComponent implements OnInit {

    constructor(private Router: Router) {}

    ngOnInit() {
    }

}
