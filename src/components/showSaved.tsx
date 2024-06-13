import styles from '/src/components/styles.module.css';

export default function ShowSaved() {
    return (
        <>   
            <a href="/savedInfos" class={styles.link}>
                Saved Persons
            </a>
        </>
    );
}
