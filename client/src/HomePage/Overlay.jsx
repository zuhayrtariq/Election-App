import LoginForm from "./LoginForm";

export function Overlay() {
    return (
       <div className=" z-50 top-[140px] right-[300px]   absolute">
            <LoginForm/>
       
      </div>
    )
  }