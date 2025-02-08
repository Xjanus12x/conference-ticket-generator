import { ConferenceRegistrationFormHeader } from "@/components/ConferenceRegistrationFormHeader";
import { ConferenceRegistrationFormBody } from "./ConferenceRegistrationFormBody";

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
