import React from 'react';

class BackToTop extends React.Component<{}, {}> {
	backToTop = () => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		return (
		  <span onClick={this.backToTop}>Back to top</span>
	  )
	}
}

export default BackToTop;
