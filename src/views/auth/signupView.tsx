import { SignUpForm } from "../../components/auth";
import { Logo } from "../../components/auth";

// jshint esversion:6
export { SignUpForm } from "../../components/auth";

function SignUpView() {
    return (
        <>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-[1fr,_2fr]">
                {/* Form greeting Pane - visible from md screen upwards */}
                <div className="hidden bg-pry md:flex flex-col gap-y-4 items-start justify-center px-[3rem]">
                    <h1 className="text-4xl font-bold text-[white]">Hello !</h1>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla ullam quibusdam quos ea ab. Voluptas possimus qui facere architecto?</p>
                </div>

                {/* Actual Form Element */}
                <div className="relative">
                    <div className="md:hidden absolute top-[-4rem] left-[-2.8rem] rounded-full bg-gray-200 box-content pt-[2.8rem] pl-[2.5rem] pr-4 pb-3 border-[15px] border-[white]">
                        <Logo />
                    </div>
                    <SignUpForm />
                </div>
            </div>
        </>
    )
}
export { SignUpView };
