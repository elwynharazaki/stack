import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import LibraryDetail from './LibraryDetail';

class LibraryList extends Component {
	componentWillMount() {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

		this.libraryData = ds.cloneWithRows(this.props.libraries);
	}

	render() {
		return (
			<ListView 
				dataSource={this.libraryData}
				renderRow={(library) => 
					<LibraryDetail key={library.id} mainLibrary={library} />
				}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		libraries: state.libraries
	};
};

export default connect(mapStateToProps)(LibraryList);
