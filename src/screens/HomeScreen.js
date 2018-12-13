import React, { Component } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { Box, Text } from 'react-native-design-utility'
import { theme } from '../constants/theme'
import CategoryCard from '../components/CategoryCard'
import DealCaroussel from '../components/DealCaroussel'
import ShoppingCartIcon from '../components/ShoppingCartIcon'

// FIXME: This will come from backend
const categories = [
  {
    id: 1,
    title: 'Arabica',
    image: require('../../assets/img/cart.png'),
  },
  {
    id: 2,
    title: 'Bourbon',
    image: require('../../assets/img/drugs.png'),
  },
  {
    id: 3,
    title: 'Novo Mundo',
    image: require('../../assets/img/pets.png'),
  },
  {
    id: 4,
    title: 'CutucaAI',
    image: require('../../assets/img/pets.png'),
  },
]

const NUM_COLUMNS = 3

class HomeScreen extends Component {

  // FIXME: this has to go to index.js file
  // - for some reason, it is not applying what is inside the main index.js file
  static navigationOptions = {
    title: "Café Aquinense",
    headerTintColor: theme.color.white,
    headerStyle: {
      backgroundColor: theme.color.blueDarkest
    },
    headerTitleStyle: {
      fontWeight: '400',
    },
    headerRight: <ShoppingCartIcon />
  }

  state = {}

  renderItem = ({ item, index }) => {
    let style = {};

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }
    return (
      <Box w={1 / NUM_COLUMNS} bg="white" h={120} style={style}>
        <CategoryCard {...item} />
      </Box>
    );
  }

  keyExtractor = item => String(item.id);

  separator = () => <Box h={2} bg="greyLighter" />;

  render() {
    return (
      <Box f={1} bg="greyLighter">
        <StatusBar barStyle="light-content" />
        <Box h={130} w="100%">
          <DealCaroussel />
        </Box>

        <Box f={1} p={3}>
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            numColumns={NUM_COLUMNS}
            ItemSeparatorComponent={this.separator}
          />
        </Box>
      </Box>
    );
  }
}

export default HomeScreen