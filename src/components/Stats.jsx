import { stats } from '../constants'

const Stats = () => {
    return (
        <div className={`flex justify-start items-center gap-2`}>
            {stats.map(stat => <div key={stat.id} >
                <div className='flex items-center'>
                    <h4 className='font-poppins font-semibold text-[40px] leading-[43px] text-white'>{stat.value}</h4>
                    <p className='font-poppins font-normal text-[20px] leading-[26px] text-gradient uppercase ml-3 w-[300px]'>{stat.title}</p>
                </div>
            </div>)}
        </div>
    );
};

export default Stats;