import { Component, OnInit, PipeTransform, inject } from '@angular/core';
import { faEdit, faTrash, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from 'src/app/services/movies.service';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  
  constructor(
    private modalService: NgbModal,
    private service: MoviesService,
  ) {
  
  }
  faEdit = faEdit;
  faRemove = faTrash;
  faSearch = faSearch;
  faPlus = faPlus;
  public movieList: IMovie[] = [];
  
  ngOnInit(): void {
    this.getMovies();
  }
  public getMovies(): void {
    this.movieList = this.service.getAll();
  }
  public addMovie(params: any): void {
    this.service.create(params);
    this.getMovies();
  }
  public updateMovie(params: any): void {
    this.service.update(params);
    this.getMovies();
  }
  public deleteMovie(params: number) {
    this.service.delete(params);
    this.getMovies();
  }

  createModalOpen(): void {
    let movieParams: any = {
      title: 'Add',
      isUpdate: false,
    }
    const modalRef = this.modalService.open(EditModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.movieDetails = movieParams;
    if (this.modalService.hasOpenModals()) {
      modalRef.componentInstance.newMovie.subscribe(
        (res: any) => {
          res['id'] = this.movieList.length;
          this.addMovie(res);
        }
      );
    }
    
  }
  editModalOpen(name: string, description: string, imdb: string, id: number): void {
    let movieParams: any = {
      title: 'Edit',
      isUpdate: true,
      id: id,
      name: name,
      description: description,
      imdb: imdb
    }
		const modalRef = this.modalService.open(EditModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.movieDetails = movieParams;
    if (this.modalService.hasOpenModals()) {
      modalRef.componentInstance.newMovie.subscribe(
        (res: any) => {
          this.updateMovie(res);
        }
      );
    }
	}
  search(text: string) {
    this.movieList = this.movieList.filter(
        movie => movie?.name.toLowerCase().includes(text.toLowerCase())
      );
  }
  reset() {
    this.getMovies();
  }
}

interface IMovie {
  id: number,
  name: string,
  description: string,
  imdb: string,
}



