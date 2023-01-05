import {useState, useEffect} from 'react';
import './countdown.scss';

const Countdown = ({onHideCountDown}) => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [countdownEnd, setCountdownEnd] = useState(false)


    const startCountDown =()=> {
        let interval = setInterval(() => {
            const endDate = new Date("January 31, 2023")
            const currentDate = new Date();

            const totalSeconds = (endDate - currentDate) / 1000;

            const daysCount = Math.floor(totalSeconds / 3600 / 24)
            const hoursCount = Math.floor(totalSeconds / 3600) % 24;
            const minutesCount = Math.floor(totalSeconds / 60) % 60;
            const secondsCount = Math.floor(totalSeconds) % 60;

            if(totalSeconds < 1){
                setCountdownEnd(true);
                clearInterval(interval)
               //do something
            }else {
                setDays(`${format(daysCount)}`)
                setHours(`${format(hoursCount)}`)
                setMinutes(`${format(minutesCount)}`)
                setSeconds(`${format(secondsCount)}`)
            }
        }, 1000)
    };

  
    const format =(t)=> {
        return t < 10 ? `0${t}` : t;
    }



    useEffect(() => {
       startCountDown()
    }, [])


    return (
        <div className='countdown-section --btn-danger'>
            <div className="container --flex-between">
                <h2 className='--text-md'>{!countdownEnd ? "Discount Time!" : "End of Discount, your train is gone, bye"}</h2>
                <div className="countdown --card --my">
                    <time className='--flex-center --text-center --color-white'>
                        <span>
                            <p>{days}</p>
                            <small>Days</small>
                        </span>
                        <span>
                            <p>{hours}</p>
                            <small>Hours</small>
                        </span>
                        <span>
                            <p>{minutes}</p>
                            <small>Minutes</small>
                        </span>
                        <span>
                            <p>{seconds}</p>
                            <small>Seconds</small>
                        </span>
                    </time>
                </div>
            </div>
               <p className='close' onClick={onHideCountDown}>X</p>
               
        </div>
    )
}

export default Countdown