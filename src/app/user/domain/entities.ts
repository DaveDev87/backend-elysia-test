export interface UserProps {
    id: number | string;
    username: string;
    email: string;
    password: string;
}

export class User {
    public readonly id: number | string;
    public readonly email: string;
    public readonly username: string;
    public readonly password: string;

    constructor(props: UserProps) {
        this.id = props.id;
        this.email = props.email;
        this.username = props.username;
        this.password = props.password;
    }
}