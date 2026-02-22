import { GoogleLogin } from "@react-oauth/google";
import { trackEvent } from "../../utils/analytics";

export default function Login({onClose}: {onClose?: () => void}) {
  return (
    <div onClick={onClose} className="fixed z-[101] top-0 left-0 w-full h-full bg-black/90 flex justify-center items-center">
      <div onClick={(e) => e.stopPropagation()}
        className="w-100 h-1/2 bg-gray-900 flex justify-center items-center rounded-[20px]">

    <GoogleLogin
      onSuccess={() => {
        onClose?.();
        trackEvent("login_success", { method: "google" });
      }}
      onError={() => {
        trackEvent("login_failed", { method: "google" });
        console.log("Login Failed");
      }}
      />
      </div>
    </div>
  );
}