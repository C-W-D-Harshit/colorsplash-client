import styles from "./index.module.css"

const Page_three = () => {
  return (
    <div className={styles.container}>
      <h1>Cookie Policy for Color Splash</h1>

      <p>This is the Cookie Policy for Color Splash, accessible from shop.Color Splash.com</p>

      <div className={styles.containers}>
        <h3>What Are Cookies</h3>

        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
      </div>


      <div className={styles.containers}>
        <h3>How We Use Cookies</h3>

        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
      </div>


      <div className={styles.containers}>
        <h3>Disabling Cookies</h3>

        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookies Policy Generator</a>.</p>


      </div>

      <div className={styles.containers}>
        <h3>The Cookies We Set</h3>
        <ul className={styles.ul}>
          <li>
            <p>Login related cookies</p>
            <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
          </li>
        </ul>
      </div>


      <div className={styles.containers}>
        <h3>Third Party Cookies</h3>
        <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>

        <ul className={styles.ul}>

          <li>
            <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
            <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
          </li>
        </ul>

      </div>
      <div className={styles.containers}>
        <h3>More Information</h3>

        <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>

        <p>For more general information on cookies, please read <a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">the Cookies Policy article</a>.</p>

        <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>

        <ul className={styles.ul}>
          <li>Email: colorsplash1005@gmail.com </li>

        </ul>
      </div>

    </div>
  )
}

export default Page_three