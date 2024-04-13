function Header() {
    return (
        <div className="--header">
            <img src="../../images/perfil-photo.jpg" alt="Profile Picture" className="--header_profile-pic"/>
            <div className="--header_content">
                <h1>Andréa Nicole Silva Melo</h1>
                <h4>Full Stack Web Developer</h4>
                <p><a href="">Put personal site here</a></p>
                <div>
                    <button className="--header_content_email-button">
                        <img src="../../images/email-logo.png" alt="Email Logo" className="email-logo" />
                        Email
                    </button>
                    <button className="--header_content_linkedin-button">
                        <img src="../../images/linkedin-logo.png" alt="Linkedin Logo" className="linkedin-logo" />
                        Linkedin
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header