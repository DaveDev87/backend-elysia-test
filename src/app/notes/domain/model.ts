import {Elysia, t} from "elysia"

export const NoteModel = new Elysia({name: "Model.note"})
    .model({
        'note.create.request': t.Object({
            title: t.String(),
            description: t.String(),
            authorId: t.Number()
        }),
        'note.create.response': t.Object({
            id: t.Number(),
        }),
        'note.update.body': t.Object({
            title: t.MaybeEmpty(t.String()),
            description: t.MaybeEmpty(t.String()),
        })
    })