import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import ContactForm from './components/ContactForm'

function Contact() {
    return (
        <div className='App'>
            <header>
                <TopNav />
            </header>
            <main>
                <ContactForm />
            </main>
            <footer>
                <BottomNav />
            </footer>
        </div>
    )
}

export default Contact
