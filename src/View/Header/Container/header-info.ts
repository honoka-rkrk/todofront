interface DispInfo {
  key: string;
  name: string;
}

const dispInfo: Array<DispInfo> = [
  { key: '', name: 'ALL PROJECT' },
  { key: 'project', name: 'ALL PROJECT' },
  { key: 'detail', name: 'DETAIL' },
  { key: 'home', name: 'HOME' }
];

type HeaderInfo = {
  title: string;
};

export const getHeaderInfo = (path: string): HeaderInfo => {
  let _title = '';
  const arrayPath = path.split('/');
  if (arrayPath !== undefined && arrayPath.length >= 2) {
    const dispIdx = dispInfo.findIndex((item) => item.key === arrayPath[1]);
    _title = dispIdx > -1 ? dispInfo[dispIdx].name : '';
  }
  const ret: HeaderInfo = { title: _title };
  return ret;
};
