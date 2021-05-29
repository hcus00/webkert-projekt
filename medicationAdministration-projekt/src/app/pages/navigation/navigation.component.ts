import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  sCategoryTitle?:string;
  @Input() selectedCategory?: string;
  @Output() callSelectPage = new EventEmitter<string>();
  @Output() callSelectC = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  select(target: string): void{
    this.callSelectC.emit(target);
  }

}
