"use client";
import { uploadFile } from "../utils/uploadAction";

export default function UploadForm() {
  return (
    <form action={uploadFile} className="flex flex-col gap-4">
      <label>
        <span>Upload a file</span>
        <input type="file" name="file" ref={fileInput} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
