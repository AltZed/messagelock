import { Client, Account } from "appwrite"

import { appwriteConfig } from "../config/config"

const client = new Client()

client
    .setEndpoint(appwriteConfig.setEndpoint)
    .setProject(appwriteConfig.setProject)

export const account = new Account(client)

export default client