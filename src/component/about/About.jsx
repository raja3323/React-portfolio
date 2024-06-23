import "./about.css"
import Award from "../../img/award.png"

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">It is a long established fact that a reader will be distracted by the readable content.</p>
        <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique, eum dolorum nihil doloremque maxime libero corrupti hic mollitia totam voluptates molestiae reiciendis amet veritatis suscipit eos ducimus, fugit consequuntur omnis tempore beatae. Reprehenderit?</p>
        <div className="a-awards">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design</h4>
            <p className="a-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laborum!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
