import donation from "../../assets/logo/donation.png"
import fundrising from "../../assets/logo/fundrising.png"
import volunteer from "../../assets/logo/volunteer.png"

const Charity = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-10" style={{ fontFamily: 'Playpen Sans, cursive' }}>We are non-profit Charity & <br /> <span className="text-red-400">NGO Organizarion</span></h1>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
                {/* card 1 */}
                <div className="card  bg-base-100 border">
                    <figure className="px-10 pt-10">
                        <img src={donation} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Donation</h2>
                        <p>Generosity is giving more than you can, and pride is taking less than you need</p>
                        <div className="card-actions">
                            <button className="btn btn-sm rounded-full bg-red-400 text-white">Donate</button>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card  bg-base-100 border">
                    <figure className="px-10 pt-10">
                        <img src={fundrising} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fundraising</h2>
                        <p>Fundraising is the heart and soul of turning dreams into reality. It is the collective power of generosity that fuels change and makes the world a better place</p>
                        <div className="card-actions">
                            <button className="btn btn-sm rounded-full bg-red-400 text-white">Donate</button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card  bg-base-100 border">
                    <figure className="px-10 pt-10">
                        <img src={volunteer} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Volunteering</h2>
                        <p>Volunteer, and see the world change one act of kindness at a time</p>
                        <div className="card-actions">
                            <button className="btn btn-sm rounded-full bg-red-400 text-white">Join us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charity;