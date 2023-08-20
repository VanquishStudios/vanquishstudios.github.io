import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const VanquishStudios = (props) => {
  return (
    <>
      <div className="vanquish-studios-container">
        <Head>
          <title>Vanquish Studios</title>
          <meta
            name="description"
            content="The official website for Vanquish Studios"
          />
          <meta property="og:title" content="Vanquish Studios" />
          <meta
            property="og:description"
            content="The official website for Vanquish Studios"
          />
          <meta
            property="og:image"
            content="../public/logos/logo-8px-curve.png"
          />
        </Head>
        <section className="vanquish-studios-hero">
          <div className="vanquish-studios-menu">
            <div
              id="mobile-menu"
              className="vanquish-studios-mobile-navigation"
            >
              <img
                alt="pastedImage"
                src="../public/no-image.svg"
                className="vanquish-studios-logo"
              />
              <div className="vanquish-studios-links">
                <span className="Link">Solutions</span>
                <span className="Link">How it works</span>
                <span className="Link">Prices</span>
              </div>
              <div
                id="close-mobile-menu"
                className="vanquish-studios-close-mobile-menu"
              >
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="vanquish-studios-icon"
                >
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="vanquish-studios-desktop-navigation">
              <nav className="vanquish-studios-centered">
                <img
                  alt="image"
                  src="/logos/vanquish%20studios%20banner-200h.png"
                  className="vanquish-studios-image"
                />
                <img
                  src="/logos/vanquish%20studios%20vector%20icon%20dark-200h.png"
                  alt="image"
                  className="vanquish-studios-image1"
                />
                <nav className="vanquish-studios-links1">
                  <a href="#about" className="vanquish-studios-link">
                    About
                  </a>
                  <a href="#contact" className="vanquish-studios-link1">
                    Contact
                  </a>
                </nav>
              </nav>
            </div>
            <div>
              <Script
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
          <header className="vanquish-studios-header">
            <h1 className="vanquish-studios-text03">
              Developing Games people want
            </h1>
            <p className="vanquish-studios-text04">
              Hi, we are Vanquish Studios, a company paving the way forward and
              developing games for you!
            </p>
          </header>
        </section>
        <section className="vanquish-studios-banners"></section>
        <section className="vanquish-studios-contact">
          <div className="vanquish-studios-centered-container">
            <div id="contact" className="vanquish-studios-heading">
              <span className="sub-title">Links</span>
              <span className="title">Contact and find us</span>
              <span className="vanquish-studios-text07">
                At Vanquish Studios we are dedicated to hearing what you have to
                say. So hop into our discord server and chat to our lead team.
                The people paving the way forward. 
              </span>
            </div>
            <div className="vanquish-studios-pills-container">
              <div className="vanquish-studios-pills">
                <div className="vanquish-studios-container1">
                  <a
                    href="https://github.com/VanquishStudios"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="vanquish-studios-link2"
                  >
                    <div className="vanquish-studios-you-tube">
                      <img
                        alt="pastedImage"
                        src="/logos/github-200h.jpeg"
                        className="vanquish-studios-pasted-image"
                      />
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/7WMPxFk86e"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="vanquish-studios-link3"
                  >
                    <div className="vanquish-studios-you-tube1">
                      <img
                        alt="pastedImage"
                        src="/logos/discord-200h.png"
                        className="vanquish-studios-pasted-image1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="vanquish-studios-about">
          <div className="vanquish-studios-centered-container1">
            <div id="about" className="vanquish-studios-heading1">
              <span className="vanquish-studios-text08">Discover the Team</span>
              <span className="vanquish-studios-text09 title">
                Meet the Team behind Vanquish Studios 
              </span>
            </div>
            <div className="vanquish-studios-category">
              <div className="vanquish-studios-headng">
                <span className="vanquish-studios-text10">
                  CEO &amp; Founder  
                </span>
                <span className="vanquish-studios-text11">
                  <span>
                    Hi! I am the CEO and Founder of Vanquish Studios. 
                  </span>
                  <br></br>
                  <span>
                    I specialise in design, marketing and development, backend
                    and frontend. Welcome to Vanquish Studios!
                  </span>
                </span>
              </div>
              <div className="vanquish-studios-container2">
                <img
                  alt="image"
                  src="/techygiraffeicon-200h-200h.png"
                  className="vanquish-studios-image2"
                />
              </div>
            </div>
            <div className="vanquish-studios-row">
              <div className="vanquish-studios-category1">
                <div className="vanquish-studios-headng1">
                  <span className="vanquish-studios-text15">
                    Lead 3D Designer &amp; Artist 
                  </span>
                  <span className="vanquish-studios-text16">
                    Hi. im a 3D designer and artist for Vanquished Studios. I
                    have a great passion for art and game design so expect ok to
                    good textures.
                  </span>
                </div>
                <img
                  alt="image"
                  src="/mint_oreo.png-200h-400w.png"
                  className="vanquish-studios-image3"
                />
              </div>
              <div className="vanquish-studios-category2">
                <div className="vanquish-studios-headng2">
                  <span className="vanquish-studios-text17">
                    Game Developer &amp; Designer
                  </span>
                  <span className="vanquish-studios-text18">
                    I am a skilled game developer and designer with expertise in
                    creating captivating gaming experiences. I specialize in
                    programming and design. Driven by a deep love for games, I
                    thrive on challenging projects that push creative boundries.
                  </span>
                </div>
                <img
                  alt="image"
                  src="/fluffypancakesicon-200h-300w.png"
                  className="vanquish-studios-image4"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="vanquish-studios-faq">
          <div className="vanquish-studios-heading2">
            <span className="vanquish-studios-text19 title">
              Frequently asked questions
            </span>
            <span className="vanquish-studios-text20">
              The most asked questions about Vanquish Studios, all in one place!
            </span>
          </div>
          <div className="vanquish-studios-accordion">
            <div className="accordionContainer">
              <div className="vanquish-studios-header1">
                <span className="vanquish-studios-text21">
                  — The games, the games?? 
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="vanquish-studios-text22">
                  <span>
                    Vanquish Studios is a relatively new Organisation so we
                    don&apos;t have any official released games currently. In
                    fact, we are making games for you as your reading this! For
                    updates and sneak peaks on future games please join our
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://discord.gg/7WMPxFk86e"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="vanquish-studios-link4"
                  >
                    Discord Server
                  </a>
                  <span>. </span>
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="vanquish-studios-header2">
                <span className="vanquish-studios-text25">
                  — How can I get involved?
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="vanquish-studios-text26">
                  <span>
                    At the moment we are not accepting new staff, but we excited
                    to see that you are interested! Staff applications may open
                    up in the future, in which case this FAQ will be updated!
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div>
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </section>
        <footer className="vanquish-studios-footer">
          <div className="vanquish-studios-bottom">
            <img
              alt="image"
              src="/logos/vanquish%20studios%20banner-200h.png"
              className="vanquish-studios-image5"
            />
            <span className="vanquish-studios-text29">
              Copyright © 2023, Vanquish Studios™️ , Located In The United
              Kingdom, All Rights Reserved
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .vanquish-studios-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .vanquish-studios-hero {
            width: 100%;
            height: 585px;
            display: flex;
            align-items: center;
            padding-top: 40px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: #5228f5;
          }
          .vanquish-studios-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vanquish-studios-mobile-navigation {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 150;
            position: fixed;
            transform: translateX(100%);
            transition: transform 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .vanquish-studios-logo {
            width: 64px;
          }
          .vanquish-studios-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .vanquish-studios-close-mobile-menu {
            top: var(--dl-space-space-oneandhalfunits);
            right: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .vanquish-studios-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .vanquish-studios-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vanquish-studios-centered {
            width: 100%;
            height: 69px;
            display: flex;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .vanquish-studios-image {
            width: 394px;
            height: 54px;
            object-fit: cover;
            border-radius: 50px;
          }
          .vanquish-studios-image1 {
            width: 200px;
            display: none;
            object-fit: cover;
          }
          .vanquish-studios-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .vanquish-studios-link {
            font-style: normal;
            font-weight: 800;
            text-decoration: none;
          }
          .vanquish-studios-link1 {
            font-style: normal;
            font-weight: 800;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .vanquish-studios-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .vanquish-studios-text03 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .vanquish-studios-text04 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .vanquish-studios-banners {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vanquish-studios-contact {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .vanquish-studios-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .vanquish-studios-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .vanquish-studios-text07 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .vanquish-studios-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .vanquish-studios-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .vanquish-studios-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .vanquish-studios-link2 {
            display: contents;
          }
          .vanquish-studios-you-tube {
            width: 240px;
            height: 120px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 200px;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .vanquish-studios-you-tube:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            background-color: #ffffff;
          }
          .vanquish-studios-pasted-image {
            width: 120px;
          }
          .vanquish-studios-link3 {
            display: contents;
          }
          .vanquish-studios-you-tube1 {
            width: 240px;
            height: 120px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 200px;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .vanquish-studios-you-tube1:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vanquish-studios-pasted-image1 {
            width: 191px;
            height: 82px;
          }
          .vanquish-studios-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #211062;
          }
          .vanquish-studios-centered-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .vanquish-studios-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .vanquish-studios-text08 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .vanquish-studios-text09 {
            color: var(--dl-color-gray-white);
          }
          .vanquish-studios-category {
            color: white;
            width: 100%;
            display: flex;
            overflow: hidden;
            transition: 0.3s;
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: #5228f5;
          }
          .vanquish-studios-category:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vanquish-studios-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .vanquish-studios-text10 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .vanquish-studios-text11 {
            color: rgb(238, 233, 254);
            line-height: 24px;
            margin-bottom: 40px;
          }
          .vanquish-studios-container2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .vanquish-studios-image2 {
            width: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius4);
            border-bottom-left-radius: var(--dl-radius-radius-radius2);
          }
          .vanquish-studios-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .vanquish-studios-category1 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            transition: 0.3s;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .vanquish-studios-category1:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vanquish-studios-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .vanquish-studios-text15 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .vanquish-studios-text16 {
            color: rgb(30, 30, 30);
            line-height: 24px;
          }
          .vanquish-studios-image3 {
            width: 310px;
            height: 257px;
            object-fit: cover;
          }
          .vanquish-studios-category2 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            transition: 0.3s;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .vanquish-studios-category2:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .vanquish-studios-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .vanquish-studios-text17 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .vanquish-studios-text18 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .vanquish-studios-image4 {
            width: 207px;
            height: 196px;
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .vanquish-studios-faq {
            width: 100%;
            display: flex;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #eff0f2;
          }
          .vanquish-studios-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            flex-direction: column;
          }
          .vanquish-studios-text19 {
            text-align: center;
          }
          .vanquish-studios-text20 {
            color: rgb(0, 0, 0);
            width: 100%;
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .vanquish-studios-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .vanquish-studios-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .vanquish-studios-text21 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .vanquish-studios-text22 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .vanquish-studios-link4 {
            color: #3366cc;
          }
          .vanquish-studios-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .vanquish-studios-text25 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .vanquish-studios-text26 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .vanquish-studios-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-color: #000000;
          }
          .vanquish-studios-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .vanquish-studios-image5 {
            width: 354px;
            height: 56px;
            object-fit: cover;
          }
          .vanquish-studios-text29 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .vanquish-studios-hero {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .vanquish-studios-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .vanquish-studios-desktop-navigation {
              align-items: flex-start;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
              justify-content: center;
            }
            .vanquish-studios-centered {
              height: 60px;
              align-items: center;
              padding-left: 10px;
              padding-right: 10px;
              flex-direction: row;
              justify-content: center;
            }
            .vanquish-studios-image {
              border-top-left-radius: 50px;
              border-top-right-radius: 50px;
              border-bottom-left-radius: 50px;
              border-bottom-right-radius: 50px;
            }
            .vanquish-studios-image1 {
              display: none;
            }
            .vanquish-studios-links1 {
              flex: 1;
            }
            .vanquish-studios-header {
              width: 100%;
              max-width: 1200px;
            }
            .vanquish-studios-container1 {
              margin-left: 0px;
            }
            .vanquish-studios-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .vanquish-studios-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .vanquish-studios-container2 {
              width: 100%;
            }
            .vanquish-studios-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .vanquish-studios-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .vanquish-studios-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .vanquish-studios-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .vanquish-studios-text29 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .vanquish-studios-hero {
              width: 100%;
              height: 481px;
              position: relative;
              padding-top: 0px;
              padding-bottom: 0px;
              background-color: var(--dl-color-template-blue-bg);
            }
            .vanquish-studios-desktop-navigation {
              height: 0px;
              margin-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .vanquish-studios-centered {
              width: 668px;
              height: 70px;
              position: relative;
              margin-top: var(--dl-space-space-threeunits);
              align-items: center;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: row;
              padding-bottom: 0px;
              justify-content: center;
            }
            .vanquish-studios-image {
              display: none;
            }
            .vanquish-studios-image1 {
              top: 3px;
              flex: 1;
              left: 7px;
              width: 62px;
              height: 64px;
              display: flex;
              position: absolute;
              border-radius: 50px;
            }
            .vanquish-studios-links1 {
              gap: var(--dl-space-space-halfunit);
              top: 26px;
              flex: 1;
              left: 0px;
              right: var(--dl-space-space-twounits);
              width: auto;
              height: auto;
              position: absolute;
              justify-content: flex-end;
            }
            .vanquish-studios-header {
              height: 378px;
              margin-top: var(--dl-space-space-sevenunits);
              justify-content: center;
            }
            .vanquish-studios-text03 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .vanquish-studios-text04 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .vanquish-studios-contact {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .vanquish-studios-text07 {
              line-height: 24px;
            }
            .vanquish-studios-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .vanquish-studios-about {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .vanquish-studios-heading1 {
              align-self: center;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .vanquish-studios-text09 {
              margin-bottom: 0px;
            }
            .vanquish-studios-headng {
              padding-bottom: 0px;
            }
            .vanquish-studios-container2 {
              width: 100%;
            }
            .vanquish-studios-row {
              height: auto;
              flex-direction: column;
            }
            .vanquish-studios-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .vanquish-studios-heading2 {
              width: 100%;
            }
            .vanquish-studios-text19 {
              font-size: 36px;
              line-height: 36px;
            }
            .vanquish-studios-text20 {
              width: 100%;
              max-width: 600p;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .vanquish-studios-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .vanquish-studios-hero {
              padding-bottom: 160px;
            }
            .vanquish-studios-logo {
              margin-left: 0px;
            }
            .vanquish-studios-icon {
              align-items: center;
              justify-content: center;
            }
            .vanquish-studios-header {
              height: 335px;
              margin-top: 237px;
              padding-top: 0px;
            }
            .vanquish-studios-text04 {
              color: #eee9fe;
            }
            .vanquish-studios-you-tube {
              width: 120px;
              height: 60px;
              align-items: center;
            }
            .vanquish-studios-pasted-image {
              width: 80px;
            }
            .vanquish-studios-you-tube1 {
              width: 120px;
              height: 60px;
              align-items: center;
            }
            .vanquish-studios-pasted-image1 {
              width: 100%;
              height: 52px;
            }
            .vanquish-studios-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .vanquish-studios-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .vanquish-studios-image5 {
              width: 301px;
              height: 47px;
            }
          }
        `}
      </style>
    </>
  )
}

export default VanquishStudios
