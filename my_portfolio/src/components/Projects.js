// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Jarvis- Voice Assistant</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Voice Assistant that can convert audio to speeches, perform various operations on instructions given.
                    </p>

                    {/* <a href="http://165.22.213.170/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vipinsinghh" target="_blank" className="button">Code</a> */}
                </div>

                <div className="projects__card">
                    <h3>FlipKart Clone - Website</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Created a FlipKart clone main web page using frontend development concepts.
                    </p>

                    {/* <a href="https://app.unifarm.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vipinsinghh" target="_blank" className="button">Code</a> */}
                </div>

                {/* <div className="projects__card">
                    <h3>NFT Marketplace</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://ethereum.org/en/nft/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vipinnsingh/Solidity/blob/main/digitalmarketplace.sol" target="_blank" className="button">Code</a>
                </div> */}
            </div>
        </section>
    );
}

export default Projects;