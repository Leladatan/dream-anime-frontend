import Button from "@/shared/ui/button";
import AnimatedTitle from "@/shared/ui/animated-title";
import ImageClipBox from "@/views/root/main/ui/sections/contact/ui/components/image-clip-box";

const Contact = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen  px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src="/images/contact-1.webp"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="/images/contact-2.webp"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />
                </div>

                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="/images/swordman-partial.webp"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="/images/swordman.webp"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="mb-10 font-general text-sm uppercase z-10">
                        Join Zentry
                    </p>

                    <AnimatedTitle
                        title="let&#39;s b<b>u</b>ild the <br/> new era of <br/> g<b>a</b>ming t<b>o</b>gether."
                        separator={"<br/>"}
                        className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
                    />

                    <Button className="mt-10 cursor-pointer transition-all duration-200 ease-in hover:bg-neutral-200">
                        contact us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;