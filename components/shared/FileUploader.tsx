"use client";

import { MdOutlineCloudUpload } from "react-icons/md";
import { useCallback, Dispatch, SetStateAction } from "react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setFiles(acceptedFiles);
      onFieldChange(convertFileToUrl(acceptedFiles[0]));
    },
    [onFieldChange, setFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <Image
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col py-5 text-grey-500">
          <MdOutlineCloudUpload className="w-14 h-14 text-gray-500" />
          <h3 className="my-2">Drag photo here</h3>
          <p className="mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="h-[54px]">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}
