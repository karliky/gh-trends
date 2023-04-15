export interface Repositories {
    total_count: number;
    incomplete_results: boolean;
    items: Item[];
}

export interface Item {
    id: number;
    name: string;
    full_name: string;
    description: null | string;
    forks: number;
    language: string;
    stargazers_count: number;
    owner: Owner;
    homepage: string;
    html_url: string;
}

export enum DefaultBranch {
    Dev = "dev",
    GhPages = "gh-pages",
    Main = "main",
    Master = "master",
}

export interface License {
    key: string;
    name: string;
    spdx_id: string;
    url: null | string;
    node_id: string;
}

export interface Owner {
    login: string;
    avatar_url: string;
    html_url: string;
}

export enum Type {
    Organization = "Organization",
    User = "User",
}

export enum Visibility {
    Public = "public",
}

export type Sections = 'trending' | 'favorites'