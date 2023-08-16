import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getAll(): any {
    return movies;
  }
  create(params: any): any {
    movies.push(params);
  };
  update(params: any): any {
    
    movies.forEach((element: any) => {
      if (element.id == params.id) {
        element.name = params.name;
        element.description = params.description;
        element.imdb = params.imdb;
      }
    })
  }
  delete(id: number): any {
    for(var i = 0; i < movies.length; i++) {
      if (movies[i].id == id) {
        movies.splice(i, 1);
      }
    }
  }
}

const movies: IMovie[] = [
  {
    id: 0,
    name: 'Shawshank Redemption',
    description: `Andy Dufresne, a successful banker, 
                  is arrested for the murders of his wife and her lover, 
                  and is sentenced to life imprisonment at the Shawshank prison. 
                  He becomes the most unconventional prisoner.`,
    imdb: '9.3'
  },
  {
    id: 1,
    name: 'Sully',
    description: `Captain Chesley, 
                  a commercial pilot, makes an emergency landing on the Hudson River 
                  after his plane gets hit by birds. However, an investigation into the matter 
                  might prove to be fatal to his career.`,
    imdb: '7.4'
  },
  {
    id: 2,
    name: 'Tolkien',
    description: `Tolkien is a storyteller and part of a tight group of artists from whom he draws 
                  inspiration for his work. However, his work and relationship with Edith, his lover, 
                  is threatened during WWI.`,
    imdb: '6.8'
  },
  {
    id: 3,
    name: 'Oppenheimer',
    description: `During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work 
                  on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years 
                  developing and designing the atomic bomb.`,
    imdb: '8.6'
  },
  {
    id: 4,
    name: 'Captain Phillips',
    description: `Somali pirates attack the Maersk Alabama, a container ship, 
                  while it is on its course to Kenya. Richard Phillips, the captain of the ship, 
                  uses his wits to negotiate with them to save his crew.`,
    imdb: '7.8'
  },
  {
    id: 5,
    name: 'The Blind Side',
    description: `Michael, a homeless African-American teenager, 
                  is adopted by a Caucasian family who help him overcome his learning 
                  difficulties and achieve excellence in American football.`,
    imdb: '7.6'
  },
  {
    id: 6,
    name: 'United 93',
    description: `The passengers of a flight are shocked when their plane is hijacked by a few terrorists. 
                  They decide to fight the terrorists after learning about the attacks on the World 
                  Trade Center and Pentagon.`,
    imdb: '7.6'
  },
  {
    id: 7,
    name: 'Free Guy',
    description: `When Guy, a bank teller, learns that he is a non-player character in a bloodthirsty, 
                  open-world video game, he goes on to become the hero of the story and takes 
                  the responsibility of saving the world.`,
    imdb: '7.1'
  },
  {
    id: 8,
    name: 'Deadpool',
    description: `Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, 
                  to cure him of cancer and give him healing powers. However, 
                  the experiment leaves Wade disfigured and he decides to exact revenge.`,
    imdb: '8.0'
  },
  {
    id: 9,
    name: 'Fences',
    description: `Troy, an African American man who once longed to be a baseball player, 
                  misses the opportunity due to racism. As time passes, 
                  he takes out his frustration on his loved ones and ruins his son's future.`,
    imdb: '7.2'
  },
  {
    id: 10,
    name: 'Barbie',
    description: `Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. 
                  However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.`,
    imdb: '6.6'
  }
]
interface IMovie {
  id: number,
  name: string,
  description: string,
  imdb: string,
}


