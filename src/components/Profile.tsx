import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1360958432363376661/rjcUyf0a_400x400.jpg" alt="Hantonny Korrea"/>
            <div>
                <strong>
                    Hantonny Korrea
                </strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}