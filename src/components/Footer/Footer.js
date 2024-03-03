import footerCSS from './footer.module.css'

function Footer() {
    return ( 
        <footer className={footerCSS.footer}>
            <a className={footerCSS.footer}>Reddit<span className={footerCSS.logoSpan}>Lite</span></a>
            <div className={footerCSS.contact}>
                <p><a><i>Link1</i></a></p>
                <p><a><i>Link2</i></a></p>
                <p><a><i>Link3</i></a></p>
                <p><a><i>Link4</i></a></p>
            </div>
        </footer>

     );
}
 
export default Footer;