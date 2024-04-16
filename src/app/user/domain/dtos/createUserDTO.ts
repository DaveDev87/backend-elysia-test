export interface CreateUserRequestDTO {
    email: string;
    username: string;
    password: string;
}

export interface CreateUserResponseDTO {
    id: number | string
    email: string;
    username: string;
    password: string;
}