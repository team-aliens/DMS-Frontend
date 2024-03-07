import styled from 'styled-components';
import { Search } from '@team-aliens/design-system';

export function SearchBox() {
  return (
    <SearchWrapper>
      <Search className="Search" />
      <SearchInput type="text" placeholder="ex) 홍길동" name="SearchTagName" />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  position: relative;
  .Search {
    position: absolute;
    top: 8px;
  }
`;

const SearchInput = styled.input`
  width: 202px;
  height: 40px;
  border-bottom: 1px solid #dddddd;
  padding: 0px 0px 0px 30px;
  font-size: 16px;
`;
