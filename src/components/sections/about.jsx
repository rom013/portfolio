import BtnNavigation from "../buttons/buttonNavigation";

export default function AboutSection({refs}) {
    return (
        <section
            className="flex gap-5 h-screen w-screen"
            id="sectionAbout"
        >
            <div
                className="max-w-2xl w-full h-full"
                ref={refs.imageAbout}
            >
                <img
                    className="w-full h-full object-cover grayscale"
                    src={"https://images.pexels.com/photos/5749818/pexels-photo-5749818.jpeg?auto=compress&cs=tinysrgb&w=600"}
                    alt="Rômullo Melo"
                    draggable={false}
                />
            </div>
            <div
                className="flex flex-col justify-center gap-14"
            >
                <div
                    className="max-w-2xl flex flex-col gap-6 "
                    ref={refs.contentAbout}
                >
                    <h2
                        className="font-sora font-bold text-[2rem] text-zinc-800"
                    >
                        Um pouco sobre eu
                    </h2>
                    <p
                        className="font-lato text-zinc-600 leading-relaxed"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, commodi quae sequi voluptatum sint tempora ut sed, odit nihil distinctio veniam quis similique animi deserunt eum. Quam repudiandae maiores dolores.
                    </p>
                </div>

                <div
                    className="flex justify-center w-full"
                    ref={refs.btnNavTwo}
                >
                    <BtnNavigation
                        type="arrow"
                        position={3000}
                        className={"!p-0 border-none rotate-90"}
                    />
                </div>
            </div>
        </section>
    )
}