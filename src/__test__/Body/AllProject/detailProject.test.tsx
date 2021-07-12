import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { PjItemMeta } from '../../../View/Body/AllProject/Container/data';
import { setDetailInfo } from '../../../Store/selectDetail';

import Header from '../../../View/Header/Component/main';
import DetailProject from '../../../View/Body/AllProject/Container/AllProject/detailProject';

//仕様
describe('AllProject', () => {
  it.todo('プロジェクト名が表示される');
  it.todo('isCompleteがfalseのときは未完了と表示される');
  it.todo('isCompleteがtrueのときは完了済みと表示される');
  it.todo('20210624と数字で渡すと2021/06/24の形式で表示される');
  it.todo('Detailボタンを押すとdetailにページ遷移する');
});

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector
}));

const deleteClickMock = jest.fn();

const metasFalse: PjItemMeta = {
  id: 1,
  deadline: 20210624,
  name: 'テストプロジェクト',
  isComplete: false,
  memo: 'テストメモ',
  order: 1,
  orderBy: 0
};

const metasTrue: PjItemMeta = {
  id: 1,
  deadline: 20210624,
  name: 'テストプロジェクト',
  isComplete: true,
  memo: 'テストメモ',
  order: 1,
  orderBy: 0
};

describe('AllProject', () => {
  //テスト内容
  it('プロジェクト名が表示される', () => {
    //準備
    const { getByTestId } = render(
      <Router>
        <DetailProject meta={metasFalse} deleteClick={deleteClickMock} />
      </Router>
    );
    //実行
    const pjNameElement = getByTestId('pjName');
    //検証
    expect(pjNameElement.textContent).toBe('テストプロジェクト');
  });

  //テスト内容
  it('isCompleteがfalseのときは未完了と表示される', () => {
    //準備
    const { getByTestId } = render(
      <Router>
        <DetailProject meta={metasFalse} deleteClick={deleteClickMock} />
      </Router>
    );
    //実行
    const isCompleteElement = getByTestId('isComplete');
    //検証
    expect(isCompleteElement.textContent).toBe('未完了');
  });

  //テスト内容
  it('isCompleteがtrueのときは完了済みと表示される', () => {
    //準備
    const { getByTestId } = render(
      <Router>
        <DetailProject meta={metasTrue} deleteClick={deleteClickMock} />
      </Router>
    );
    //実行
    const isCompleteElement = getByTestId('isComplete');
    //検証
    expect(isCompleteElement.textContent).toBe('完了済み');
  });

  //テスト内容
  it('20210624と数字で渡すと2021/06/24の形式で表示される', () => {
    //準備
    const { getByTestId } = render(
      <Router>
        <DetailProject meta={metasFalse} deleteClick={deleteClickMock} />
      </Router>
    );
    //実行
    const dateElement = getByTestId('date');
    //検証
    expect(dateElement.textContent).toBe('2021/06/24');
  });

  //テスト内容
  it('Detailボタンを押すとdetailにページ遷移する', () => {
    //前準備(arrange)
    const { getByTestId } = render(
      <Router>
        <Header />
        <DetailProject meta={metasFalse} deleteClick={deleteClickMock} />
      </Router>
    );
    //実行
    const detailButton = getByTestId('detailButton');
    fireEvent.click(detailButton);
    const titleElement = getByTestId('header');
    //検証
    expect(titleElement.textContent).toBe('テストプロジェクト');
  });
});
