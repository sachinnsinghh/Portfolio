
// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Sachin Singh" />

            <div className='header__content'>
                <h1>Sachin Singh</h1>
                <p>Frontend Developer</p>
                <a href="mailto:sachinsingh000094@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header; 