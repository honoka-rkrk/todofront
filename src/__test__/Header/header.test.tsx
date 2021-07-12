import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { DispRoute } from '../../App';
import Button from '@material-ui/core/Button';

import Header from '../../View/Header/Component/main';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

//前準備(arrange)
let dispElement: HTMLElement;
beforeEach(() => {
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>
  );
  dispElement = getByTestId('header');
});

//仕様
describe('ヘッダー表示', () => {
  //テスト内容
  it('最初にALL PROJECTが表示される。', () => {
    //検証
    expect(dispElement.textContent).toBe('ALL PROJECT');
  });
  it('指定したタイトルがなければリダイレクトされてAll PROJECTが表示される', () => {
    //実行(act)
    const history = createMemoryHistory();
    history.push('/nnn');
    //検証
    expect(dispElement.textContent).toBe('ALL PROJECT');
  });
  it.todo('detailボタンを押すと、Reactテスト練習が表示される');
});
