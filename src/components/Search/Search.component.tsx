import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

type SearchState = {
	search: string;
} 

interface props {
	hasButton?: boolean;
	onSearch: (e: string) => void;
}

export class Search extends React.Component<props, SearchState> {
	static defaultProps = {
		hasButton: true
	}

	onSearchChange = (search: React.FormEvent<HTMLInputElement>) => {
		this.setState({ search: search.currentTarget.value });

		if (!this.props.hasButton) {
			this.props.onSearch(search.currentTarget.value);
		}
	} 

	render() {
		return (
		  <Form inline>
		    <FormControl name="search" type="text" placeholder="Search" onKeyUp={this.onSearchChange} className="mr-sm-2" />
		    {
		    	this.props.hasButton 
		    		? <Button onClick={(e: any) => { this.props.onSearch(this.state.search) } } variant="outline-info">Search</Button> 
		    		: null
		    }
		  </Form>
		);
	}
}

