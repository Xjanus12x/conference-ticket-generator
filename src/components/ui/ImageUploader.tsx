import Image from "next/image";
import { InfoIcon } from "./InfoIcon";

type ImageUploaderProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isImageSelected: boolean;
  avatarUrl: string | null;
};
export function ImageUploader({
  isImageSelected,
  avatarUrl,
  ...rest
}: ImageUploaderProps) {
  return (
    <div className="space-y-3 ">
      <label
        className="bg-neutral-700 bg-opacity-30 px-3 py-5 rounded-xl border-neutral-500 border-dashed border-2 block relative"
        htmlFor="avatar-upload"
      >
        <input
          type="file"
          id="avatar-upload"
          accept="image/png, image/jpeg"
          className="absolute inset-0 text-transparent focus-visible:outline focus-visible:outline-offset-4 rounded-xl focus-visible:outline-white"
          {...rest}
        />
        <div className="cursor-pointer flex flex-col items-center space-y-4 text-gray-200">
          <Image
            className={`bg-neutral-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-xl border-neutral-500 border  ${
              isImageSelected ? "size-12" : "p-2.5 h-auto w-auto"
            }`}
            aria-hidden="true"
            src={
              isImageSelected && avatarUrl
                ? avatarUrl
                : "/assets/images/icon-upload.svg"
            }
            alt="Upload icon"
            width={0}
            height={0}
          />
          <span>Drag and drop or click to upload</span>
        </div>
      </label>

      <div className="flex gap-2 text-neutral-0">
        <InfoIcon />
        <span className="text-xs text-neutral-300">
          "Upload your photo (JPG or PNG, max size: 500kb)
        </span>
      </div>
    </div>
  );
}
