import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {

    return (
        <div className="w-[1170px] h-[639px]">
            <div className="flex  justify-between">
                <p className='w-[470px] h-[164px] text-white font-poppins font-semibold text-[48px] leading-[170%] tracking-[.01em]'>What people are saying about us</p>
                <p className="w-[450px] h-[164px] flex items-center font-poppins font-normal text-[18px] leading-[24px] text-dimWhite">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>

            <div className="flex justify-between pt-20">
                {feedback.map(feed => <FeedbackCard key={feed.id} feedback={feed}></FeedbackCard>)}
            </div>
        </div>
    );
};

export default Testimonials;


