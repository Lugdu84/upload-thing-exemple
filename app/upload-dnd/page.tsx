"use client";
 
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
 
import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";
import Link from "next/link";
import { UploadFileResponse } from "uploadthing/client";
 
export default function UploadDnDPage() {
    const [images, setImages] = useState<UploadFileResponse[]>([])
    const title = images.length ? (
        <>
            <p>Upload Completed !</p>
            <p className="mt-2">{images.length} files</p>
        </>
    ) : null

    const imagesList = (
        <div className="text-white">
            {title}
            <ul>
                {images.map((image) => (
                    <li className="mt-2" key={image.fileKey}>
                        <Link href={image.url}>
                            {image.name}
                        </Link>
                    </li>
                ))}
                </ul>
        </div>
    )

  console.log("images: ", images)
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      
      <UploadDropzone
        endpoint="mediaPost"
        onClientUploadComplete={(res) => {
          // Do something with the response
            console.log("Files: ", res);
            if (res) setImages(res)
          console.log("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
            //   alert(`ERROR! ${error.message}`);
            console.log(`ERROR! ${error.message}`)
        }}
          />
            {imagesList}
    </main>
  );
}