import {ListUsersInterface} from "../interfaces/use-cases/ListUsersInterface";
import {ListUsersRequestDTO, ListUsersResponseDTO} from "../../domain/dtos/listUsersDTO";
import {ListUsersRepository} from "../repositories/ListUsersRepository";


export class ListUsersUseCase implements ListUsersInterface {

    constructor(
        private readonly listUsersRepository: ListUsersRepository
    ) {
    }

    async invoke(request: ListUsersRequestDTO): Promise<Array<ListUsersResponseDTO>> {
        return this.listUsersRepository.list()
    }

}