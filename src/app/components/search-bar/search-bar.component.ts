import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  formGroup!: FormGroup;
  
  options: string[] = ["Emmanuel", "Ana", "Steve"];
  filteredOptions: string [] = [];


  constructor(private service: PersonService, private fb: FormBuilder){}

  ngOnInit(){
    this.initForm();
    this.getNames();
  }

  initForm(){
    this.formGroup = this.fb.group({
      'person' : ['']
    })
    this.formGroup.get('person')?.valueChanges.subscribe(response =>{
      // console.log(response);
      this.filterData(response);
    })
  }

filterData(enteredData: any){
 this.filteredOptions = this.options.filter(item => {
  return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
 })
}

  getNames(){
    this.service.getNames().subscribe(response => 
      {
        this.filteredOptions = response;
        this.options = response;
      })
  }
}
