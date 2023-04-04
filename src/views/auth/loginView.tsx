// jshint esversion:6
import { LoginForm } from "../../components/auth";
import { Logo } from "../../components/auth";

function LoginView() {
    return (
        <>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-[1fr,_2fr]">
                {/* Form greeting Pane - visible from md screen upwards */}
                <div className="hidden relative bg-pry md:flex flex-col gap-y-4 items-start justify-center px-[3rem]">
                    <h1 className="text-4xl font-bold text-[white]">Welcome Back!</h1>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla ullam quibusdam quos ea ab. Voluptas possimus qui facere architecto?</p>
                    <div className="absolute top-[-10%] left-[-10%] rounded-full bg-bgLg box-content pt-[2.8rem] pl-[2.5rem] pr-4 pb-3 border-[15px] border-[white]">
                        <Logo />
                    </div>
                </div>

                {/* Actual Form Element */}
                <div className="relative">
                    <div className="md:hidden absolute top-[-4rem] left-[-2.8rem] rounded-full bg-gray-200 box-content pt-[2.8rem] pl-[2.5rem] pr-4 pb-3 border-[15px] border-[white]">
                        <Logo />
                    </div>
                    <LoginForm />
                </div>
            </div>
        </>
    );
}

export { LoginView };