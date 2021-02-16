import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { SearchInput, Icon } from '../../Components/Elemets'
import { TabMore, ForumBox, ScrollSelectItem } from '../../Components/Other'

class ForumsScreen extends Component {
  constructor (props) {
    super(props)
  }

  

  handleSelectItem = val => {
    console.log(val)
  }

  handleCreateTopic = () => {
    this.props.navigation.push('CreateTopic')
  }

  handleForumClick = data => {
    this.props.navigation.push('ForumDetails', { data })
    console.log(6546464)
  }

  render () {
    return (
      <>
        <TabMore routeName='Forums' navigation={this.props.navigation} />
        <View style={{ flex: 1, marginBottom: 90 }}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <SearchInput mainContainerStyle={styles.serachInput} />
            <ScrollSelectItem
              onChange={this.handleSelectItem}
              items={items}
              initialValue='all'
            />
            <View>
              {forums.map((val, i) => {
                return (
                  <ForumBox
                    key={val.id}
                    topic={val.topic}
                    autor={val.autor}
                    reply={val.reply}
                    views={val.views}
                    onPress={this.handleForumClick.bind(null, val)}
                  />
                )
              })}
            </View>
          </ScrollView>
          {!this.props.showTabMore && (
            <Icon
              onPress={this.handleCreateTopic}
              style={styles.addIcon}
              name='plus'
              type='antdesign'
              size={22}
              color='white'
            />
          )}
        </View>
      </>
    )
  }
}

const mapStateToProps = state => ({
  showTabMore: state.uiReducer.showMore
})

export default connect(mapStateToProps)(ForumsScreen)

const styles = StyleSheet.create({
  scrollView: {},
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 16
  },
  serachInput: {
    marginTop: 16
  },
  addIcon: {
    width: 44,
    height: 44,
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#C93146',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15
  }
})

const items = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'This month',
    value: 'this month'
  },
  {
    label: 'This week',
    value: 'this week'
  },
  {
    label: 'Today',
    value: 'today'
  },
  {
    label: 'Tomorrow',
    value: 'tomorrow'
  },
  {
    label: 'Last week',
    value: 'last week'
  }
]

const forums = [
  {
    id: 1,
    topic: 'Help to find business event',
    autor: 'Monica',
    reply: 26,
    views: 102
  },
  {
    id: 2,
    topic: 'Help with changing profile picture',
    autor: 'Monica',
    reply: 26,
    views: 102
  },
  {
    id: 3,
    topic: 'How do I invite others to join my projects?',
    autor: 'Monica',
    reply: 26,
    views: 102
  },
  {
    id: 4,
    topic: 'How do I join a project?',
    autor: 'Monica',
    reply: 26,
    views: 102
  },
  {
    id: 5,
    topic: 'How do I invite others to join my projects?',
    autor: 'Monica',
    reply: 26,
    views: 102
  }
]
