import {PrismaClient} from "@prisma/client";


class DbConnection {
    private client?: PrismaClient

    async connect(): Promise<void> {
        this.client = new PrismaClient()
    }
}

export default new DbConnection()