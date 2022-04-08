import React from "react";
import { formatDistance } from 'date-fns'
import styles from "./Products.module.scss";
import { AppleLogo, GhostLogo, GoogleLogo, MicrosoftLogo, VineLogo } from "./../Logos/Logos";

const Logo = ({ company }) => {
	if (company == "google") {
		return <GoogleLogo />;
	}

	if (company == "microsoft") {
		return <MicrosoftLogo />;
	}

	if (company == "apple") {
		return <AppleLogo />;
	}

	if (company == "vine") {
		return <VineLogo />;
	}

	return <GhostLogo />;
};

const Tag = ({ type, children, ...rest }) => {
	const getStyleByType = (type) => {
		if (type == "software") {
			return styles.software;
		}

		if (type == "hardware") {
			return styles.hardware;
		}

		if (type == "app") {
			return styles.app;
		}

		if (type == "service") {
			return styles.service;
		}

		return null;
	};

	return (
		<div className={`${styles.tag} ${getStyleByType(type)}`} data-cy="product-tag" {...rest}>
			{type ? type : children}
		</div>
	);
};

export default Product = ({ product }) => {
	const { name, dateOpen, dateClose, link, description, type, company } =
		product;

	const timeUntilDead = formatDistance(new Date(dateClose), new Date());
	const isStillAlive = new Date(dateClose) > new Date();
	const randomToBeKilledSentence = () => {
		const sentences = [
			"Running out of power",
			"Will be turned off",
			"Scheduled to die",
			"Walks into the light",
			"Fading into darkness",
			"Done for",
			"Kicking the bucket",
			"Expiring",
			"Getting unplugged",
			"Going poof"
		];

		return sentences[Math.floor(Math.random()*sentences.length)];
	}

	return (
		<div className={styles.product} data-cy="product">
			<h3 className={styles.name}>
				<Logo company={company} />
				<a href={`${link}`} target="_blank" rel="noopener noreferrer">
					{name}
				</a>
			</h3>
			<div className={styles.metaData}>
				<Tag title={`${dateOpen} – ${dateClose}`}>
					{dateOpen.substring(0, 4)} – {dateClose.substring(0, 4)}
				</Tag>
				<Tag type={type} />
			</div>
			<p>
				{isStillAlive ? `${randomToBeKilledSentence()} in ${timeUntilDead}, ` : null}
				{description}
			</p>
		</div>
	);
};
