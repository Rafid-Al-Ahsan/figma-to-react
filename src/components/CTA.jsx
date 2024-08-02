import Button from "./Button";

const CTA = () => {
    return (
        <div className="w-[1170px] h-[293px] flex justify-between items-center bg-black-gradient px-[100px] rounded-[20px]">
            <div>
                <p className="w-[670px] h-[67px] font-poppins font-semibold text-[48px] leading-[140%] text-white">Let’s try our service now!</p>
                <p className="mt-[5px] w-[445px] h-[58px] font-poppins font-normal text-[18px] leading-[160%] tracking-[.01em] text-dimWhite">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <Button></Button>
        </div>
    );
};

export default CTA;




