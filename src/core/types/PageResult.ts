export interface PagedResult<T> {
    Items: T[];
    TotalCount: number;
    Page: number;
    PageSize: number;
    TotalPages: number;
}
