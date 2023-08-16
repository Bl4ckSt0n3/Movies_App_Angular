import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  public activeModal = inject(NgbActiveModal);

  @Output() newMovie: EventEmitter<any> = new EventEmitter();
  
  title: any = '';
  movieEditForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    imdb: new FormControl('')
  });

  @Input() public set movieDetails(params: any) {
    this.title = params.title;
    if(params.isUpdate) {
      this.movieEditForm.reset(params);
    }
  }

  confirm(): void {
    let outData = {
      id: this.movieEditForm.get('id')?.value,
      name: this.movieEditForm.get('name')?.value,
      description: this.movieEditForm.get('description')?.value,
      imdb: this.movieEditForm.get('imdb')?.value
    }
    this.newMovie.emit(outData);
    this.activeModal.close('Cross click');
  }

  

}
