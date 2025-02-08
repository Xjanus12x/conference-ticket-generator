"use client";

import { ImageUploader } from "@/components/ui/ImageUploader";
import { Input } from "@/components/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

const fileSizeLimit = 5 * 1024; // 5KB in bytes

const conferenceRegistrationFormSchema = z.object({
  avatar: z
    .instanceof(FileList, { message: "Please upload an image." })
    .refine((files) => files.length > 0, { message: "Image is required." })
    .transform((files) => files[0])
    .refine((file) => ["image/png", "image/jpeg"].includes(file.type), {
      message: "Please upload a valid image (PNG or JPEG).",
    })
    .refine((file) => file.size <= fileSizeLimit, {
      message: "File size should not exceed 5KB",
    })
    .nullable(),

  fullname: z
    .string()
    .nonempty("Full name is required")
    .max(20, { message: "Maximum length is 20 characters" }),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Please enter a valid email address."),
  githubUsername: z.string().nonempty("GitHub username is required"),
});

type ConferenceRegistrationFormType = z.infer<
  typeof conferenceRegistrationFormSchema
>;

export function ConferenceRegistrationFormBody() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ConferenceRegistrationFormType>({
    resolver: zodResolver(conferenceRegistrationFormSchema),
  });

  // State to hold the preview URL of the uploaded image
  const [preview, setPreview] = useState<string | null>(null);

  // Watch the file input field
  const file = watch("avatar");

  useEffect(() => {
    if (typeof window !== "undefined" && file && file instanceof FileList) {
      const selectedFile = file[0];
      if (selectedFile) {
        const previewUrl = URL.createObjectURL(selectedFile);
        setPreview(previewUrl);
      }
    }
  }, [file]);


  const onSubmit: SubmitHandler<ConferenceRegistrationFormType> = ({
    fullname,
    email,
    githubUsername,
  }) => {
    const params = new URLSearchParams({
      "avatar-url": preview!,
      fullname,
      email,
      "github-username": githubUsername,
    });

    router.push(`/ticket-confirmation?${params.toString()}`);
  };

  return (
    <>
      <div className="space-y-2">
        <ImageUploader
          avatarUrl={preview}
          isImageSelected={!!preview}
          {...register("avatar")}
        />

        {errors.avatar && <ErrorMessage message={errors.avatar.message} />}
      </div>

      <fieldset className="space-y-4 mt-7">
        <div className="space-y-2">
          <Input
            className={`${errors.fullname ? "outline outline-red-500" : ""}`}
            label="Full Name"
            type="text"
            id="full-name"
            placeholder="John Doe"
            {...register("fullname")}
          />

          {errors.fullname && (
            <ErrorMessage message={errors.fullname.message} />
          )}
        </div>
        <div className="space-y-2">
          <Input
            className={`${errors.fullname ? "outline outline-red-500" : ""}`}
            label="Email Address"
            type="email"
            id="email"
            placeholder="example@email.com"
            {...register("email")}
          />

          {errors.email && <ErrorMessage message={errors.email.message} />}
        </div>
        <div className="space-y-2">
          <Input
            className={`${errors.fullname ? "outline outline-red-500" : ""}`}
            label="GitHub Username"
            type="text"
            id="github-username"
            placeholder="@yourusername"
            {...register("githubUsername")}
          />
          {errors.githubUsername && (
            <ErrorMessage message={errors.githubUsername.message} />
          )}
        </div>
      </fieldset>

      <footer className="mt-6">
        <button
          className="w-full bg-orange-500 text-neutral-900 py-2  text-lg font-semibold hover:bg-red-600 transition rounded-xl"
          type="button"
          onClick={handleSubmit(onSubmit)}
        >
          Generate My Ticket
        </button>
      </footer>
    </>
  );
}
