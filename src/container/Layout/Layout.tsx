import React from "react";
import GiftCard from "../../components/GiftCard/GiftCard";
import Header from "../../components/Header/Header";
import MobileInput from "../../components/MobileInput/MobileInput";
import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <>
            <header className={styles.headerWrapper}>
                <Header />
                <GiftCard classname={styles.headerWrapper__card} />
            </header>
            <section className={styles.sectionWrapper}>
                You have WON Paytm Gift Card of Rs 200 for <b>placing the order on Man Matters</b>
                <br />
                <MobileInput />
            </section>

            <footer className={styles.footer}>
                Powered by <img src="https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/60145d3b8a7a980b66120449/logo-1615962415046-Webp.net-resizeimage.png" alt="" />
            </footer>
        </>
    );
}

export default Layout;