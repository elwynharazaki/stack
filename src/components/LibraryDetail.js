import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import Card from './common/Card';
import CardSection from './common/CardSection';
import * as actions from './../actions';

class LibraryDetail extends Component {
   onTitlePressed = () => {
      this.props.selectLibrary(this.props.mainLibrary.id);
   };

   renderLibraryDetail() {
      if (this.props.selectedLibraryId === this.props.mainLibrary.id) {
         return (
            <Text style={styles.descStackStyle}>
               {this.props.mainLibrary.description}
            </Text>
         );
      }
   }
   
   render() {
      console.log(this.props.selectedLibraryId);

      return (
         <Card>
            <CardSection>
               <View>
                  <TouchableOpacity onPress={this.onTitlePressed.bind(this)}>
							<Text style={styles.titleStackStyle}>{this.props.mainLibrary.title}</Text>
								{this.renderLibraryDetail()}
                  </TouchableOpacity>
               </View>
            </CardSection>
         </Card>
      );
   }
}

const styles = {
   descStackStyle: {
      color: '#8E8E8E',
      fontSize: 15
   },

   titleStackStyle: {
      color: '#1B1B1B',
      fontSize: 17
   }
};

const mapStateToProps = (state) => {
	return {
		selectedLibraryId: state.selectedLibraryId
   };
};

export default connect(mapStateToProps, actions)(LibraryDetail);
