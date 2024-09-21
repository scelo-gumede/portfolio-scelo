import myPic from "../assets/myPic.jpg"



const Hero = () => {
  return (
    <section className="flex my-20 flex-col-reverse max-w-5xl mx-auto items-center sm:flex-row ">
        <div className="flex-col space-y-5 ">
        <p className="text-5xl font-bold text-center  sm:text-left">
        Hi, I am Thomas,<br className="hidden sm:flex" />
        Creative <br className="hidden sm:flex" />Technologist
        </p>
        <p className="text-base text-center  sm:text-left sm:pr-5">
        Amet minim mollit non deserunt ullamco est sit aliqua
         dolor do amet sint. Velit officia consequat duis enim 
         velit mollit. Exercitation veniam consequat sunt nostrud 
         amet.
        </p>
        <div className="flex justify-center sm:justify-start flex-row">
        <button className="font-medium  rounded-sm shadow-sm p-2 primary_color ">
            Download Resume
        </button>
        </div>
        </div>
        <div className="w-1/3">
            <img src={myPic} style={{border:"solid #EDF7FA 5px"}} className="person  shadow-md" />
        </div>
    </section>
  )
}

export default Hero