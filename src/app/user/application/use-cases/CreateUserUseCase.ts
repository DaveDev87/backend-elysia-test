import {CreateUserRequestDTO, CreateUserResponseDTO} from "../../domain/dtos/createUserDTO";
import {CreateUserInterface} from "../interfaces/use-cases/CreateUserInterface";
import {CreateUserRepository} from "../repositories/CreateUserRepository";


export class CreateUserUseCase implements CreateUserInterface {
    constructor(
        private readonly createUserRepository: CreateUserRepository,
    ) {
    }

    async invoke(createUser: CreateUserRequestDTO): Promise<CreateUserResponseDTO> {
        return this.createUserRepository.create({
            ...createUser
        })
    }

}