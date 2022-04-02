import styles from "./Footer.module.scss";

export default Footer = () => {
	return (
		<footer id="about" className={styles.footer}>
			<p>
				Killed by tech is a tech graveyard, a free and open
				source list of discontinued products and services from companies like Google, Apple and Microsoft.
			</p>
			<p>
				The inspiration for this site and a lot of the information comes
				from other projects such as{" "}
				<a
					href="https://killedbygoogle.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Killed by Google
				</a>
				, by{" "}
				<a
					href="https://codyogden.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Cody Ogden
				</a>
				.
			</p>
			<p>
				Contributors from around the world help compile, research, and
				maintain the information about dying and dead products. Do you
				miss a product? Feel free to contribute to either this project or
				Cody's on{" "}
				<a
					href="https://github.com/edvinlinden/killedby.tech"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				.
			</p>
			<p>
				A project by <a
					href="https://edvinlinden.se?ref=killedby.tech"
					target="_blank"
					rel="noopener noreferrer"
				>
					Edvin Linden
				</a> &copy; {new Date().getFullYear()}
			</p>
			<p>
				<a href="/privacy">Privacy</a>
			</p>
			<center>
				<a
					href="https://edvinlinden.se?ref=killedby.tech"
					target="_blank"
					rel="noopener noreferrer"
					title="Go to edvinlinden.se"
					className={styles.smileyLink}
				> 
					<svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    					<path d="M36.0234 34.9922C35.9453 35.5391 35.8086 35.9102 35.6133 36.1055C35.418 36.3008 35.1836 36.3984 34.9102 36.3984C34.6367 36.3984 34.3242 36.3398 33.9727 36.2227C33.6602 36.1055 33.3281 35.9883 32.9766 35.8711C32.3516 34.7383 31.9023 33.2734 31.6289 31.4766C31.3945 29.7188 31.2188 27.9023 31.1016 26.0273C31.0234 24.1523 30.9844 22.3359 30.9844 20.5781C31.0234 18.8594 30.9844 17.4727 30.8672 16.418C30.6328 14.3086 30.3984 12.6484 30.1641 11.4375C29.9688 10.2266 29.7734 9.36719 29.5781 8.85938C29.6172 8.15625 29.7539 7.60938 29.9883 7.21875C30.2227 6.86719 30.4961 6.59375 30.8086 6.39844C31.1602 6.24219 31.5312 6.125 31.9219 6.04688C32.3516 6.00781 32.8008 5.91016 33.2695 5.75391C33.582 6.02734 34.0117 6.20313 34.5586 6.28125C35.1055 6.35938 35.5156 6.26172 35.7891 5.98828C35.8672 6.30078 36.082 6.57422 36.4336 6.80859C36.8242 7.08203 37.1172 7.17969 37.3125 7.10156C37.4688 7.80469 37.5664 8.50781 37.6055 9.21094C37.6836 9.95313 37.7422 10.6758 37.7812 11.3789C37.8203 12.082 37.8789 12.7461 37.957 13.3711C38.0352 14.0352 38.1914 14.6406 38.4258 15.1875C38.5039 17.1016 38.5625 19.1133 38.6016 21.2227C38.6797 23.332 38.7578 25.3047 38.8359 27.1406C38.6406 27.7266 38.5234 28.4492 38.4844 29.3086C38.4844 30.207 38.4258 31.0664 38.3086 31.8867C38.2305 32.707 38.0352 33.4102 37.7227 33.9961C37.4102 34.6211 36.8438 34.9531 36.0234 34.9922ZM24.7148 31.5938C24.5586 32.2969 24.3242 32.707 24.0117 32.8242C23.6992 32.9414 23.3477 32.9023 22.957 32.707C22.6055 32.5117 22.2344 32.1992 21.8438 31.7695C21.4531 31.3789 21.1016 31.0078 20.7891 30.6563C20.8672 30.3047 20.7891 29.9336 20.5547 29.543C20.3594 29.1523 20.1445 28.8008 19.9102 28.4883C20.0273 27.3945 20.0273 26.2617 19.9102 25.0898C19.832 23.957 19.7539 22.9023 19.6758 21.9258C19.6758 21.7305 19.5977 21.6133 19.4414 21.5742C19.2852 21.5742 19.1875 21.5156 19.1484 21.3984C19.5 20.2656 19.6367 19.0547 19.5586 17.7656C19.4805 16.4766 19.3242 15.1289 19.0898 13.7227C18.8555 12.3164 18.6016 10.8906 18.3281 9.44531C18.0938 8 17.957 6.55469 17.918 5.10938C18.2305 4.67969 18.6016 4.34766 19.0312 4.11328C19.5 3.91797 19.9883 3.78125 20.4961 3.70313C21.043 3.625 21.5898 3.58594 22.1367 3.58594C22.6836 3.625 23.2305 3.64453 23.7773 3.64453C24.207 3.76172 24.5391 3.97656 24.7734 4.28906C25.0078 4.60156 25.2227 4.91406 25.418 5.22656C25.457 6.20313 25.5156 7.08203 25.5938 7.86328C25.6719 8.64453 25.75 9.38672 25.8281 10.0898C25.9062 10.832 25.9844 11.5547 26.0625 12.2578C26.1406 13 26.1992 13.8008 26.2383 14.6602C26.3555 15.168 26.4727 16.0469 26.5898 17.2969C26.668 18.3516 26.7461 19.8359 26.8242 21.75C26.9023 23.7031 26.9414 26.3203 26.9414 29.6016C26.5898 29.5625 26.3359 29.6602 26.1797 29.8945C26.0234 30.168 25.8867 30.4414 25.7695 30.7148C25.6914 30.9883 25.5742 31.2227 25.418 31.418C25.3008 31.6523 25.0664 31.7109 24.7148 31.5938ZM46.5117 57.4922C45.0273 57.4141 43.543 57.3359 42.0586 57.2578C40.5742 57.1797 39.2852 57.1797 38.1914 57.2578C37.8398 57.1797 37.4688 57.1211 37.0781 57.082C36.7266 57.082 36.375 57.0625 36.0234 57.0234C35.8672 57.0234 35.6328 57.0234 35.3203 57.0234C35.0078 57.0234 34.7734 57.0039 34.6172 56.9648L34.4414 55.6758L32.625 56.0859L31.9219 55.4414L30.8672 55.207C28.6406 55.0898 26.6875 54.7773 25.0078 54.2695C23.3672 53.7617 21.7266 53.0391 20.0859 52.1016L19.2656 51.6328C18.3672 50.9688 17.3906 50.3047 16.3359 49.6406C15.3203 48.9766 14.2266 48.2148 13.0547 47.3555C11.5703 45.9883 10.3203 44.7773 9.30469 43.7227C8.25 42.707 7.39062 41.6719 6.72656 40.6172L6.08203 40.0898C5.37891 39.3477 4.8125 38.7227 4.38281 38.2148C3.91406 37.668 3.46484 37.1797 3.03516 36.75C2.64453 36.3203 2.29297 35.9297 1.98047 35.5781C1.66797 35.2266 1.41406 34.875 1.21875 34.5234C1.60938 33.9766 1.76562 33.4492 1.6875 32.9414C1.57031 32.4336 1.47266 32.0234 1.39453 31.7109C1.86328 31.2422 2.29297 31.0078 2.68359 31.0078C3.03516 31.0078 3.50391 31.0859 4.08984 31.2422C4.63672 31.3594 5.24219 31.4766 5.90625 31.5938C6.57031 31.6719 7.29297 31.5547 8.07422 31.2422C8.50391 31.4375 8.93359 31.6133 9.36328 31.7695C9.79297 31.8867 10.2617 32.0234 10.7695 32.1797C11.2383 32.3359 11.5898 32.4727 11.8242 32.5898C12.0195 32.707 12.1758 32.8438 12.293 33C12.4492 33.1172 12.5859 33.2734 12.7031 33.4688C12.8594 33.625 13.0938 33.8203 13.4062 34.0547C13.7578 34.9141 14.3047 35.8125 15.0469 36.75C15.8281 37.6875 16.668 38.5469 17.5664 39.3281C18.5039 40.1484 19.4414 40.8516 20.3789 41.4375C21.3555 42.0625 22.2539 42.5117 23.0742 42.7852L24.1289 43.1367L26.7656 45.1875L28.4062 45.3047C30.2422 46.2031 32.5078 46.9648 35.2031 47.5898C36.6484 47.9414 38.1719 48.1172 39.7734 48.1172C41.4141 48.1562 43.0352 48.0781 44.6367 47.8828C46.2773 47.7266 47.8594 47.4727 49.3828 47.1211C50.9062 46.7695 52.293 46.3789 53.543 45.9492C53.6992 46.0664 53.9922 46.1641 54.4219 46.2422C54.8906 46.3594 55.3789 46.4375 55.8867 46.4766C56.3945 46.5547 56.8633 46.5938 57.293 46.5938C57.7617 46.6328 58.0938 46.6133 58.2891 46.5352L58.875 46.125C58.9922 45.9688 59.1289 45.8711 59.2852 45.832C59.4805 45.793 59.6758 45.7539 59.8711 45.7148C60.8477 45.6367 61.7852 45.8906 62.6836 46.4766C62.5664 47.2188 62.3711 47.9219 62.0977 48.5859C61.8633 49.2891 61.6094 49.9531 61.3359 50.5781C60.3984 51.0078 59.6367 51.457 59.0508 51.9258C58.4648 52.4336 57.8984 52.9219 57.3516 53.3906C56.8438 53.8203 56.3359 54.2305 55.8281 54.6211C55.3594 55.0508 54.7344 55.4805 53.9531 55.9102C52.6641 56.0664 51.4922 56.2617 50.4375 56.4961C49.3828 56.7305 48.2891 57.0039 47.1562 57.3164L46.5117 57.4922Z" fill="black"/>
  					</svg>
				</a>
			</center>
		</footer>
	);
};
