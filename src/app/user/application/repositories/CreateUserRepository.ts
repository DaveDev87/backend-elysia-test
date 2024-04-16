import {CreateUserRequestDTO, CreateUserResponseDTO} from "../../domain/dtos/createUserDTO";

export interface CreateUserRepository {
    create(user: CreateUserRequestDTO): Promise<CreateUserResponseDTO>
}