import {CreateUserRequestDTO, CreateUserResponseDTO} from "../../../domain/dtos/createUserDTO";
import {UseCase} from "../../../../../../helpers/UseCase";


export interface CreateUserInterface extends UseCase<CreateUserRequestDTO, CreateUserResponseDTO> {
    invoke(createUser: CreateUserRequestDTO): Promise<CreateUserResponseDTO>;
}