import {ListUsersResponseDTO} from "../../domain/dtos/listUsersDTO";

export interface ListUsersRepository {
    list(): Promise<Array<ListUsersResponseDTO>>
}