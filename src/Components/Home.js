import React, {useRef} from 'react'
import { ReactComponent as Live } from "../Components/LIVE.svg";
import { ReactComponent as Clock } from "../Components/clock.svg";
import { ReactComponent as Prev } from "../Components/prevButton.svg"
import { ReactComponent as Next } from "../Components/nextButton.svg"
import { ReactComponent as Yout } from "../Components/youtube.svg"
import { ReactComponent as Ques } from "../Components/question.svg"
import { ReactComponent as Note } from "../Components/note.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Home.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  
function Home() {
const ref = useRef(null);
const onPrevClick = () => {
    ref.current.previous();
}
const onNextClick = () => {
    ref.current.next();
}
    return (
        <div className='MainContainer'>
            <div>
                <Live className='liveIcon'/>
                <h1 className='Heading'>Upcoming Live Coaching</h1>
                <div className='slideButtons'>
                    <Prev className='prevIcon' onClick={onPrevClick}></Prev>
                    <Next className='nextIcon' onClick={onNextClick}></Next>
                </div>   
            </div>
            <div className='carouselContainer' >        
            <Carousel ref={ref} arrows={false} draggable={false} removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
            <div className='cards'>
                        <img src="./jobTest1.png" alt="poster" />
                        <div className='back3'>
                        <Clock className='clockIcon'/>
                        <p className='cardText1'>Batch closes in 1 day</p>
                        </div>
                        <div className='contentdiv'>
                            <p className='content'>UPSC IAS GS 2022 Foundation Live Coachin</p>
                        </div>
                        <div className='contentdiv2'>
                        <Yout className='YoutIcon'/>
                        <Ques className='QuesIcon'/>
                            <p className='content1'>380+ Live Classes</p> 
                            <p className='content1'>1500+ Questions</p>
                            <Note className='noteIcon'/>
                            <p className='content2'>200+ Notes</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img src="./jobTest1.png" alt="poster" />
                        <div className='back3'>
                        <Clock className='clockIcon'/>
                        <p className='cardText1'>Batch closes in 3 days</p>
                        </div>
                        <div className='contentdiv'>
                            <p className='content'>Civil Assistant Engineer Live Coaching Batch 2</p>
                        </div>
                        <div className='contentdiv2'>
                        <Yout className='YoutIcon'/>
                        <Ques className='QuesIcon'/>
                            <p className='content1'>230+ Live Classes</p>
                            <p className='content1'>5000+ Questions</p>
                            <Note className='noteIcon'/>
                            <p className='content2'>85+ Notes</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img src="./jobTest1.png" alt="poster" />
                        <div className='back3'>
                        <Clock className='clockIcon'/>
                        <p className='cardText1'>Batch closes in 6 days</p>
                        </div>
                        <div className='contentdiv'>
                            <p className='content'>BPSC Foundation Live Coaching (Pre + Main)</p>
                        </div>
                        <div className='contentdiv2'>
                        <Yout className='YoutIcon'/>
                        <Ques className='QuesIcon'/>
                            <p className='content1'>400+ Live Classes</p>
                            <p className='content1'>2000+ Questions</p>
                            <Note className='noteIcon'/>
                            <p className='content2'>300+ Notes</p>
                        </div>
                    </div>
                <div className='cards'>
                        <img src="./jobTest1.png" alt="poster" />
                        <div className='back'>
                        <Clock className='clockIcon'/>
                        <p className='cardText1'>5 days left to enroll</p>
                        </div>
                        <div className='contentdiv'>
                            <p className='content'>IBPS PO & SBI PO Live Coaching in English Batch 1</p>
                        </div>
                        <div className='contentdiv2'>
                        <Yout className='YoutIcon'/>
                        <Ques className='QuesIcon'/>
                            <p className='content1'>240+ Live Classes</p>
                            <p className='content1'>9000+ Questions</p>
                            <Note className='noteIcon'/>
                            <p className='content2'>120+ Notes</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img src="./jobTest1.png" alt="poster" />
                        <div className='back'>
                        <Clock className='clockIcon'/>
                        <p className='cardText1'>Starts in 15 days</p>
                        </div>
                        <div className='contentdiv'>
                            <p className='content'>Civil Junior Engineer Live Coaching Batch 2</p>
                        </div>
                        <div className='contentdiv2'>
                        <Yout className='YoutIcon'/>
                        <Ques className='QuesIcon'/>
                            <p className='content1'>200+ Live Classes</p>
                            <p className='content1'>5000+ Questions</p>
                            <Note className='noteIcon'/>
                            <p className='content2'>80+ Notes</p>
                        </div>
                    </div>
                    <div className='cards'>
                        <img src="./jobTest1.png" alt="poster" />
                        <div className='back3'>
                        <Clock className='clockIcon'/>
                        <p className='cardText1'>Batch closes in 2 days</p>
                        </div>
                        <div className='contentdiv'>
                            <p className='content'>UPSC CDS - 2 2021 Live Coaching Batch 3</p>
                        </div>
                        <div className='contentdiv2'>
                        <Yout className='YoutIcon'/>
                        <Ques className='QuesIcon'/>
                            <p className='content1'>220+ Live Classes</p>
                            <p className='content1'>6000+ Questions</p>
                            <Note className='noteIcon'/>
                            <p className='content2'>100+ Notes</p>
                        </div>
                    </div>
                    
                
            </Carousel>
            
               
            </div>
            
        </div>
    )

}

export default Home
 