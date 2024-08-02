/* eslint-disable react/prop-types */
import quotes from "../assets/“.svg";

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="w-[370px] h-[395px] rounded-[20px] bg-slate-500 px-[40px]">
            <img src={quotes} className="w-[42.6px] h-[27.6] mt-[60px]" alt="" />
            <p className="mt-[31.4px] text-white font-poppins font-normal text-[18px] leading-[180%] tracking-[.02em] w-[290px] h-[128px]">{feedback.content}</p>
            <div className="flex gap-4 mt-6">
                <img className="w-[48px] h-[48px]" src={feedback.img} alt="" />
                <div>
                    <p className="text-white font-poppins font-normal text-[20px] leading-[32px] w-[158px] h-[32px]">{feedback.name}</p>
                    <p className="text-white font-poppins font-normal text-[16px] leading-[24px] w-[141px] h-[24px] opacity-[.5]">{feedback.title}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;


