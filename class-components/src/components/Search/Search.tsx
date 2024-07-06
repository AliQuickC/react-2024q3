import React from 'react';
import s from './Search.module.sass';

const storeKEY = 'module1';

interface IProps {}

interface IState {
  findWord: string;
}

class Search extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { findWord: '' };
  }

  componentDidMount() {
    const LocStor = localStorage.getItem(storeKEY);
    if (!LocStor || LocStor === '{}') {
      this.setState({ findWord: '' });
    } else {
      this.setState(JSON.parse(LocStor));
    }
  }

  render() {
    return (
      <div className={s.search}>
        <input
          className={s.searchInput}
          type="text"
          value={this.state.findWord}
          onChange={(event) => {
            this.setState({ findWord: event.target.value });
          }}
        />
        <button className={s.findButton}></button>
      </div>
    );
  }
}

export default Search;
