import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Login({onClose}: {onClose?: () => void}) {
  const navigate = useNavigate();
  return (
    <div onClick={onClose} className="fixed z-[101] top-0 left-0 w-full h-full bg-black/90 flex justify-center items-center">
      <div onClick={(e) => e.stopPropagation()}
        className="w-100 h-1/2 bg-gray-900 flex justify-center items-center rounded-[20px]">

    <GoogleLogin
      onSuccess={() => {
        onClose?.();
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      />
      </div>
    </div>
  );
}