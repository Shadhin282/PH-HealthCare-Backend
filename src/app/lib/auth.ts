import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { USER_Role, USER_STATUS } from "../../../generated/prisma/enums";
// If your Prisma file is located elsewhere, you can change the path



export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", , ...etc
    }),
    emailAndPassword : {enabled : true},
    user : {
        additionalFields : {
            role : {
                type : "string",
                required : true,
                defaultValue : USER_Role.PATIENT
            },
            status : {
                type : "string",
                required : true,
                defaultValue : USER_STATUS.ACTIVE
            },
            needPasswordChange : {
                type : "boolean",
                required : true,
                defaultValue : false
            },
            isDeleted : {
                type : "boolean",
                required : true,
                defaultValue : false
            },
            deletedAt : {
                type : "date",
                required: false,
                defaultValue : null
            }
        }
    }
});