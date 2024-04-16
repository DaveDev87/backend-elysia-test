export interface UseCase<Request, Response> {
    invoke(request: Request): Promise<Response>;
}