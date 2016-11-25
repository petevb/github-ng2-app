import { Component, OnInit } from '@angular/core';
// Don't do this in production - all of RxJS is big.
import { Observable } from 'rxjs/Rx';
import { Router }   from '@angular/router';

//import { RepoDetailComponent  } from '../repo-detail/repo-detail.component';
import { RepoService } from './repo.service';
import { Repo } from './repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers: [RepoService]
})
export class RepoComponent implements OnInit {
  selectedRepo: Repo;
  private title: string = 'RepoComponent';
  private total_count: number;
  private repos: Repo[];
  private waiting: boolean = true;

  constructor(
    private router: Router,
    private repoService: RepoService) { }

  public getRepos(): void {
    //this.repoService.getRepos().then(r => this.repos = r);
    //this.repos = this.repoService.search("foo").then(r => this.repos = r);
    this.repoService.searchObservable('typescript')
      .subscribe(
        data => {
          console.warn(`total count = ${data.total_count}`);
          this.total_count = data.total_count;
          this.repos = data.items;
          // Make this computed so that it updates when the observable refreshes?
          this.waiting = false;
        },
        error => {
          // TODO: Tell user, don't log to console.
          console.warn(error);
        }
      );
  }

  search(name) {

  }

  ngOnInit() {
    this.getRepos();
  }

  public onSelect(repo: Repo): void {
    console.warn('onSelect', repo);
    this.selectedRepo = repo;
    this.router.navigate(['/detail', this.selectedRepo.id]);
  }
}
