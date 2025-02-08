import { ConferenceRegistrationFormHeader } from "@/components/ConferenceRegistrationFormHeader";
import { ConferenceRegistrationFormBody } from "../components/ConferenceRegistrationFormBody";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Registration Form",
  description:
    "Register for the upcoming conference. Fill out the form to secure your spot!",
};

export default function ConferenceRegistrationForm() {
  return (
    <form
      className="container  mx-auto text-white rounded-lg shadow-lg h-full"
      noValidate
    >
      <ConferenceRegistrationFormHeader />
      <div className="max-w-lg mx-auto">
        <ConferenceRegistrationFormBody />
      </div>
    </form>
  );
}
