import {UseCase} from "../../../../../../helpers/UseCase";
import {ListUsersRequestDTO, ListUsersResponseDTO} from "../../../domain/dtos/listUsersDTO";


export interface ListUsersInterface extends UseCase<ListUsersRequestDTO, Array<ListUsersResponseDTO>> {
    invoke(request: ListUsersRequestDTO): Promise<Array<ListUsersResponseDTO>>;
}