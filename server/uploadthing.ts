'use server'

import { utapi } from "uploadthing/server";

export const deleteFile = async (fileId: string) => {
    await utapi.deleteFiles(fileId);
    return { success: true, message: "File deleted" };
}