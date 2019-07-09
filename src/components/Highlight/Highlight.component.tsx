import React from 'react';
import styles from './Highlight.module.scss';
import { Button } from 'react-bootstrap';

interface props {
	headerText: string;
	icon?: string;
	pText: string;
	btnText: string;
	btnLink: string;
	animate?: boolean;
}

const Highlight = (props: props) => (
	<div className={styles.highight + " " + styles['animate-' + props.animate]}>
		<div className={styles['hightlight-icon']}>
			{
				props.icon 
					? <i className={"fa fa-" + props.icon}></i>
					: <i className={styles['placeholder-icon']}></i>
			}
		</div>
		<h3>{props.headerText}</h3>
		<p>{props.pText}</p>
		<Button variant="secondary" href={props.btnLink}>{props.btnText} &#187;</Button>
	</div>
)

export default Highlight;
