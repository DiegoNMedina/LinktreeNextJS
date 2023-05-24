import SocialNetwork from '@/src/components/SocialNetwork'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

const styleContentElement = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '50px 0',
}

const styleGlobal = {
  fontFamily: 'Poppins, sans-serif',
  color: '#000',
}

export default function Home() {
  return (
      <main className="container" style={styleGlobal}>
        <div className="row" style = {styleContentElement}>
          <Header name="Diego Medina" title="Fullstack Developer" user="@thatguydiegom" image="/assets/me.png" description="I'm a Fullstack Developer, I love to learn new things and I'm always looking for new challenges." />

        </div>
        <div className="row" style = {styleContentElement}>
          
          <SocialNetwork image="/assets/github-mark.webp" name="Github" link="https://github.com/DiegoNMedina" />

          <SocialNetwork image="/assets/twitter-logo.webp" name="Twitter" link="https://twitter.com/?lang=es"/> 
          {/* Facebook */}
          <SocialNetwork image="/assets/facebook-logo.png" name="Facebook" link="https://www.facebook.com/diego.n.medina.1" />

          <SocialNetwork image="/assets/website.png" name="Website" link="https://diego-medina.com" />

          <SocialNetwork image="/assets/linkedin-logo.webp" name="Linkedin" link="https://www.linkedin.com/in/diego-medina-0b0b0b1b0/" />

          <SocialNetwork image="/assets/mail-logo.webp" name="Email" link="mailto:hello@diego-medina.com" />

          <Footer icon="©" description=" Diego Medina. All rights reserved"/>
        </div>
      </main>
  )
}
