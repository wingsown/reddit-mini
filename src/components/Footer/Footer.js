import footerCSS from './footer.module.css'

function Footer() {
    return ( 
        <footer className={footerCSS.footer}>
            <a>REDDIT</a>
            <div>
                <p><a>NavLink</a></p>
            </div>
        </footer>

     );
}
 
export default Footer;