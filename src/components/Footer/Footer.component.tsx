import React from 'react';
import BackToTop from '../BackToTop/BackToTop.component';
import { LinkContainer } from "react-router-bootstrap";
import styles from './Footer.module.scss';

const Footer = () => (
	<div className={styles.footer}>
		<span>
			&copy; 2017-2018 Company, Inc.
			<div className={styles.links}>
				<LinkContainer to="/privacy"><a href="#privacy">Privacy</a></LinkContainer>
				<LinkContainer to="/terms"><a href="#terms">Terms</a></LinkContainer>
			</div>
		</span>
		<span className={styles['back-to-top']}><BackToTop /></span>
	</div>
)

export default Footer;
