export interface BaseResponseModel<T> {
    CorrelationId: string;
    Success: boolean;
    Message: string;
    StackTrace: string;
    Data?: T;
}
