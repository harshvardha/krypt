import { BsShieldFillCheck } from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"
import { RiHeart2Fill } from "react-icons/ri"

const ServiceCard = ({ color, title, icon, subtitle }) => {
    const textStyle = { color: "white" }
    return (
        <div className="service--card white-glassmorphism">
            <div className="service--card--icon" style={{ backgroundColor: color }}>{icon}</div>
            <div>
                <h3 style={textStyle}>{title}</h3>
                <p style={{ ...textStyle, wordWrap: "break-word" }}>{subtitle}</p>
            </div>
        </div>
    )
}

const Services = () => {
    const iconStyle = {
        fontSize: "31px",
        verticalAlign: "bottom",
        color: "white"
    }
    return (
        <div className="services gradient-bg-services">
            <div className="services--brief">
                <h1 className="text-gradient services--title">
                    Services that we <br /> continue to improve
                </h1>
                <p className="services--about">
                    The best choice for buying and selling your crypto assets, with <br />
                    the various super friendly services we offer
                </p>
                <br />
                <h3 className="services--get--started">LET'S GET STARTED</h3>
            </div>
            <div className="services--description">
                <ServiceCard
                    color="#2952E3"
                    title="Security Gurantee"
                    icon={<BsShieldFillCheck style={iconStyle} />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                />
                <ServiceCard
                    color="#8945F8"
                    title="Fast Transactions"
                    icon={<BiSearchAlt style={iconStyle} />}
                    subtitle="Performing Transaction is fast. We always try to keep up with users speed and provide fast transactions"
                />
                <ServiceCard
                    color="#F84550"
                    title="Fastest transactions"
                    icon={<RiHeart2Fill style={iconStyle} />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                />
            </div>
        </div>
    )
}

export default Services