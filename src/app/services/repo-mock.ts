import { RepoModel } from '../models/repo.model';

class MockData {
    static readonly REPOS: RepoModel[] = [
        {
            id: "1",
            name: "test1",
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            fullName: "Test1/Repo1"
        }, {
            id: "2",
            name: "test2",
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            fullName: "Test1/Repo2"
        }, {
            id: "3",
            name: "test3",
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            fullName: "Test1/Repo3"
        }, {
            id: "4",
            name: "test4",
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            fullName: "Test1/Repo4"
        }
    ];

    public getData(): Promise<RepoModel[]> {
        return new Promise<RepoModel[]>(resolve => setTimeout(resolve, 2000)).then(() => MockData.REPOS);
    }
}

export const ReposMock = new MockData();
