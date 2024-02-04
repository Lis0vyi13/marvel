import './app.scss';

import { Component } from 'react';

import AppHeader from '../appHeader/AppHeader';
import AppMain from '../appMain/AppMain';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import AppMainList from '../appMainList/AppMainList';
import Marvel from '../../services/Marvel';

class App extends Component {
  state = {
    activeChar: null,
    totalCharAmount: null,
  };
  marvel = new Marvel();
  componentDidMount = async () => {
    await this.getTotalCharAmount();
  };

  getActiveChar = (id) => {
    this.setState({ activeChar: id });
  };

  getTotalCharAmount = async () => {
    const totalChar = await this.marvel.getAllCharacters(1);
    const total = totalChar.data.total;
    this.setState({ totalCharAmount: total });
  };

  render() {
    return (
      <div className='App'>
        <AppHeader />
        <AppMain />
        <RandomChar title='Random character' />
        <AppMainList>
          <CharList
            total={this.state.totalCharAmount}
            getActiveChar={this.getActiveChar}
          />
          <CharInfo activeChar={this.state.activeChar} />
        </AppMainList>
      </div>
    );
  }
}

export default App;
