import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from './HowItWorksPage.module.sass';
import stepsArticles from './stepsArticles.json';
import questionsArticles from './questionsArticles.json';
import StartContestButton from "../../components/StartContestButton/StartContestButton";
import ReactHtmlParser from 'react-html-parser';

const HowItWorksPage = () => {
    return (
        <>
            <Header/>
            <section className={styles.howItWorks}>
                <div className={styles.videoWrapper}>
                    <iframe title="Wistia video player"
                            allowFullScreen
                            frameBorder="0"
                            scrolling="no"
                            src="https://fast.wistia.net/embed/iframe/vfxvect60o"
                            width="555"
                            height="312"/>
                </div>
                <div className={styles.headerLabel}>
                    <h1>
                        how does squadhelp work?
                    </h1>
                    <p>
                        Squadhelp allows you to host branding competitions to engage with the most creative people
                        across the globe and get high-quality results, fast. Thousands of creatives compete with each
                        other, suggesting great name ideas. At the end of the collaborative contest, you select one
                        winner. The winner gets paid, and you get a strong brand name that will help you succeed! It's
                        quick, simple, and costs a fraction of an agency.
                    </p>
                </div>
            </section>
            <section className={styles.howItWorksSteps}>
                <h2>5 simple steps</h2>
                <div className={styles.howItWorksStepsContainer}>
                    {stepsArticles.map(({id, name, description}, index) => (
                            <article key={index} className={styles.howItWorksStepItem}>
                                <div className={styles.stepCircle}>{id}</div>
                                <h2>{name}</h2>
                                <p>{description}</p>
                            </article>
                        )
                    )}
                </div>
            </section>
            <section className={styles.startContestBlock}>
                <StartContestButton/>
            </section>
            <section>
                <div className={styles.frequentlyAskedQuestionsHeaderContainer}>
                    <header className={styles.frequentlyAskedQuestionsHeader}>
                        <div className={styles.questionCircle}>?</div>
                        <h2>
                            frequently asked questions
                        </h2>
                    </header>
                </div>
                <div className={styles.frequentlyAskedQuestionsContainer}>
                    {questionsArticles.map(({question, description}) => (
                            <article className={styles.questionContainer}>
                                <h3>{question}</h3>
                                <div>{ReactHtmlParser(description)}</div>
                            </article>
                        )
                    )
                    }
                </div>
            </section>
            <Footer/>
        </>
    );
};


export default HowItWorksPage;