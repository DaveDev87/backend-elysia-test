import {swagger} from "@elysiajs/swagger";
import {Elysia, t} from "elysia";
import {PrismaClient} from "@prisma/client";
import {users} from "./app/user";
import {session} from "./app/session";
import {notes} from "./app/notes";

const app = new Elysia()
    .use(swagger())
    .get("/health", () => {
        return "hello"
    })
    .use(users)
    .use(session)
    .use(notes)
    .listen(8080)

console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
