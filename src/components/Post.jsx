import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/feh-franc0.png" />
                    <div className={styles.authorInfo}>
                        <strong>Fernando Franco</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='05 de julho às 20:00h' dateTime='2022-07-05 20:00:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 👋 </p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p> 
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketsea</a>
                </p>
            </div>
        </article>
    )
}
