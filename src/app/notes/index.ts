import {Note, PrismaClient} from "@prisma/client";
import {Elysia, t} from "elysia";
import {NoteModel} from "./domain/model";

const db = new PrismaClient()


export const notes = new Elysia({prefix: "/note"})
    .use(NoteModel)
    .post("/", async ({body}) => {
            const note = await db.note.create({
                data: {
                    title: body.title,
                    description: body.description,
                    authorId: body.authorId
                }
            })

            return {
                id: note.id
            }
        },
        {
            body: "note.create.request",
            response: "note.create.response"
        })
    .get("/", async () => {

        const notes = await db.note.findMany()

        return notes
    })
    .get("/:id", async ({params, set}) => {
        const note = await db.note.findUnique({
            where: {
                id: Number(params['id'])
            }
        })

        if (!note) {
            set.status = 400
            throw new Error("Note doesn't exist");
        }
        return note
    })
    .put("/:id", async ({params, body}) => {

        const {id} = params
        const {title, description} = body

        let data: Partial<Note> = {}

        if (description) {
            data.description = description
        }

        if (title) {
            data.title = title
        }


        const note = await db.note.update({
            where: {
                id: Number(id)
            },
            data
        })
        return note
    }, {
        body: "note.update.body"
    })
