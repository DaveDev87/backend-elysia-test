import {Elysia} from "elysia";
import {dbClient} from "../database";

const db = dbClient

export const users = new Elysia({prefix: "/user"})


    .get("/", async () => {
        const users = db.user.findMany()

        return users
    })


    .get("/:id", async ({params, set}) => {

        const user = await db.user.findUnique({
            where: {
                id: Number(params['id'])
            }
        })

        if (!user) {
            set.status = 400
            throw new Error("User doesn't exist");
        }
        return user
    })