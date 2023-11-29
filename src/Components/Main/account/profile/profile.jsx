import styles from '../account.module.css'
import React from 'react';
import userPhoto from '../../../../assets/images/user.png'
import Preloader from '../../../common/Preloader/Preloader';

const Profile = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	const jobStatus = () => {
		if (props.profile.lookingForAJob) {
			return <p className={styles.jobStatus}>I`m looking for a job!</p>
		} else {
			return <p className={styles.jobStatus}>I`m not looking for a job!</p>
		}
	}

	return <div className={styles.profile}>
		<div className={styles.mainBlock}>
			<img src={props.profile.photos.large} alt="" />
			<h2>{props.profile.fullName}</h2>
			<p>{props.profile.aboutMe}</p>
		</div>
		<div className={styles.jobBlock}>
			{jobStatus()}
			<p className={styles.jobDesc}>{props.profile.lookingForAJobDescription}</p>
		</div>
		<div className={styles.contacts}>
			<a className={styles.link} href={props.profile.contacts.vk}>VK</a>
			<a className={styles.link} href={props.profile.contacts.facebook}>FB</a>
			<a className={styles.link} href={props.profile.contacts.website}>WebSite</a>
			<a className={styles.link} href={props.profile.contacts.twitter}>Twitter</a>
			<a className={styles.link} href={props.profile.contacts.instagram}>IG</a>
			<a className={styles.link} href={props.profile.contacts.youtube}>YT</a>
			<a className={styles.link} href={props.profile.contacts.github}>GitHub</a>
		</div>
	</div>


}

export default Profile;
