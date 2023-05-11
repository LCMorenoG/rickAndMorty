import style from './About.module.css'

const About = () => {
    return (
        <div className={style.cont}>

            <div className={style.picture}>
                <img src="../asets/aboutimg.jpg" alt="ERROR" />
            </div>

            <div className={style.back}>
                <p className={style.info}>Name: Luis Carlos Moreno </p>
                <p className={style.info}>Status: Engaged </p>
                <p className={style.info}>Species: Anomaly </p>
                <p className={style.info}>Gender: Male </p>
                <p className={style.info}>Origin: Mars </p>
            </div>

        </div>
    )

}

export default About