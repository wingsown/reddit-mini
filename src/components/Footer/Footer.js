import footerCSS from './footer.module.css'

function Footer() {
    return ( 
        <footer className={footerCSS.footer}>
            <a className={footerCSS.footer}>Reddit<span className={footerCSS.logoSpan}>Lite</span></a>
            <div className={footerCSS.contact}>
                <p><a href="mailto: wj.buena@gmail.com"><i className='fa-solid fa-envelope fa-1x'></i></a></p>
                <p><a href="https://github.com/wingsown" target="blank"><i className='fa-brands fa-github fa-1x'></i></a></p>
                <p><a href="https://linkedin.com/in/wilsonbuena" target="blank"><i className='fa-brands fa-linkedin fa-1x'></i></a></p>
            </div>
        </footer>

     );
}
 
export default Footer;