import '../../index.css'
import banktree from '../../assets/bank-tree.jpeg'
import Homefeatures from '../../components/homeFeatures/HomeFeatures'

export default function Index(){
    const backgroundImage = {
        backgroundImage : 'url('+banktree+')'
    }

    return (
        <main>
        <div className="hero" style={backgroundImage}>
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
        <section className="features">
            <Homefeatures type='1' />
            <Homefeatures type='2' />
            <Homefeatures type='3' />
        </section>
        </main>
    )
}