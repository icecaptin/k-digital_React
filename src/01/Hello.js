import logo from '../logo.svg';
import './Hello.css';

const Hello = () => {
    let name = 'yang';
    let git = 'https://github.com/icecaptin';


    return (
        <>
            <main className='container'>
                <article data-theme='dark'>
                    <div>
                        <img src={logo} alt='react' className='imgspin' />
                        <footer>
                            <hgroup>
                                <h1>yayaya</h1>
                                <h1>{name}</h1>
                                <h1><a href={git}>{git}</a></h1>
                            </hgroup>
                        </footer>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Hello;