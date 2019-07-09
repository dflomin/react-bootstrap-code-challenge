import React from 'react';
import styles from './Feature.module.scss';

interface props {
	headerText: string;
	img?: string;
	imgAlt?: string;
	pText: string;
	imageAlignment?: "right" | "left";
}

const Feature = (props: props) => (
	<div className={styles.feature}>
		<div className={styles.image + " " + styles['image-' + props.imageAlignment]}>
			{
				props.img
					? <img src={props.img} alt={props.imgAlt} />
					: <div className={styles['placeholder-img']}></div>
			}
		</div>
		<div className={styles['feature-text']}>
			<h1>
				<span className={styles['header-dark-text']}>{props.headerText.substr(0, props.headerText.indexOf(".") + 1)}</span>
				<span className={styles['header-light-text']}>{props.headerText.substr(props.headerText.indexOf(".") + 1)}</span>
			</h1>
			<p>{props.pText}</p>
		</div>
	</div>
)

Feature.defaultProps = {
	imageAlignment: "right"
}

export default Feature;
