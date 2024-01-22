import './tufte.module.css'
import meta from './header'
import styles from './styles.module.css'

const Link = ({ children, attributes: { href }}) => (
    <a target='_blank' rel='noreferrer noopener' href={href}>
        {children}
     </a>
)

const LinkHere = ({ children, attributes: { href }}) => (
    <a href={href}>
        {children}
     </a>
)

const MarginNote = ({ children, attributes: { id } }) => (
    <>
        <label for={id} className="margin-toggle">&#8853;</label>
        <input type="checkbox" id={id} className="margin-toggle"/>
        <span className="marginnote">
            { children }
        </span>
    </>
)

const SideNote = ({ children, attributes: { id } }) => (
    <>
        <label for={id} className="margin-toggle sidenote-number"/>
        <input type="checkbox" id={id} className="margin-toggle"/>
        <span className="sidenote">
            { children }
        </span>
    </>
)

const blog = (
    <article>
        <section>
            <p>
                <h1 className={styles.title}>uLlama</h1>
                <Link href='https://apps.apple.com/us/developer/scott-orlyck/id1082162815'>App Store</Link> 
            </p>        
        </section>

        <section>
            <figure>
                <img src='https://raw.githubusercontent.com/scottorly/uLlama/main/1024.jpg' />
            </figure>
            <p>
                <span className='newthought'>uLlama, pronounced "Nano Llama", </span>
                is your own personal, private, and secure state-of-the-art on-device AI assistant.
            </p>
        </section>
        <section>
            <h2>PRIVACY POLICY</h2>
            <p>
                uLlama does not store or transmit any PII whatsoever.
            </p>
        </section>
    </article>
)

document.head.appendChild(meta)
document.head.appendChild( 
    <script async defer data-domain="scottorly.github.io/uLlama" src="https://plausible.io/js/plausible.js"></script>
)
document.body.appendChild(blog)
