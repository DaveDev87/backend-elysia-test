import { PrismaClient } from "@prisma/client";
import { Elysia, t } from "elysia";

const db = new PrismaClient()


const SessionModel = new Elysia({ name: "Model.Session" }).model({
    'user.sign': t.Object({
        username: t.String(),
        password: t.String({
            minLength: 8
        }),
        email: t.String({
            format: "email"
        })
    }),
    'user.response': t.Object({
        id: t.Number(),
        username: t.String(),
        email: t.String()
    })
})

export const session = new Elysia({ prefix: "/user" })
    .use(SessionModel)
    .post("/sign-up", async ({ body }) => {
        const user = await db.user.create({
            data: body
        })

        return {
            id: user.id,
            username: user.username,
            email: user.email
        }
    }, {
        error(error) {

            switch (error.code) {
                //@ts-ignore
                case "P2002":
                    return {
                        error: "Username must be unique"
                    }
            }
        },
        body: "user.sign",
        response: "user.response"
    })