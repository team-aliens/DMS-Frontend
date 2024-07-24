import {
  Modal,
  Search,
  Input,
  Add,
  Arrow,
  Button,
} from '@team-aliens/design-system';
import { SetStateAction, Dispatch, useState } from 'react';
import { useModal } from '@/hooks/useModal';
import styled from 'styled-components';
import { useForm } from '@/hooks/useForm';
import {
  OutingTypeRequestType,
  SearchOutingTypeRequest,
  AddOutingTypeRequest,
} from '@/apis/outing/request';
import { useAddOutingType } from '@/apis/outing';
import { useToast } from '@/hooks/useToast';
import { AxiosError } from 'axios';
import { OutingItemBox } from '../main/DetailBox/OutingItemBox';

interface PropsType {
  selectedTag: string;
  setSelectedTag: Dispatch<SetStateAction<string>>;
  outingTypeList: OutingTypeRequestType;
  refetchOutingTypeList: () => void;
}

export function ViewOutingTypeModal({
  selectedTag,
  setSelectedTag,
  outingTypeList,
  refetchOutingTypeList,
}: PropsType) {
  const { closeModal } = useModal();
  const [newItem, setNewItem] = useState<boolean>(true);
  const { toastDispatch } = useToast();

  const MustTrue = true;

  const newItemInput = () => {
    if (selectedTag) {
      setSelectedTag('');
    }
    setNewItem(!newItem);
  };

  const {
    state: addTypeList,
    setState: setAddTypeList,
    onHandleChange,
  } = useForm<AddOutingTypeRequest>({
    outing_list_type_search_name: '',
    title: '',
  });

  const { state: searchType, onHandleChange: searchHandleChange } =
    useForm<SearchOutingTypeRequest>({
      outing_list_type: '',
    });

  const addTypeAPI = useAddOutingType(addTypeList.title, {
    onSuccess: () => {
      refetchOutingTypeList();
      setAddTypeList({ title: '' });
      setNewItem(true);
      toastDispatch({
        toastType: 'SUCCESS',
        actionType: 'APPEND_TOAST',
        message: '유형이 추가되었습니다.',
      });
    },
    onError: (e: AxiosError) => {
      if (e.request.status) {
        switch (e.request.status) {
          case 400:
            return toastDispatch({
              actionType: 'APPEND_TOAST',
              toastType: 'ERROR',
              message: `태그 이름은 10자 이하여야 합니다.`,
            });
          case 409:
            return toastDispatch({
              actionType: 'APPEND_TOAST',
              toastType: 'ERROR',
              message: `이미 동일한 외출 유형이 존재합니다.`,
            });
          default:
            toastDispatch({
              toastType: 'ERROR',
              actionType: 'APPEND_TOAST',
              message: '태그 추가를 실패했습니다. 관리자에게 문의해 주세요.',
            });
        }
      } else {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: `인터넷 연결을 확인해주세요.`,
        });
      }
    },
  });

  const onClickOutingOption = (option_title: string) => {
    setSelectedTag((OptionTitle) =>
      !(OptionTitle === option_title) ? option_title : '',
    );
  };

  return (
    <Modal
      title="외출 유형"
      close={() => {
        closeModal();
        setSelectedTag('');
      }}
      buttonList={[
        selectedTag ? (
          <Button disabled={newItem ? !selectedTag : !addTypeList.title}>
            확인
          </Button>
        ) : (
          !newItem && (
            <Button disabled={!addTypeList.title} onClick={addTypeAPI.mutate}>
              추가
            </Button>
          )
        ),
      ]}
    >
      <_SearchWrapper>
        <Search className="Search" />
        <_SearchInput
          type="text"
          placeholder="ex) 식사 외출"
          name="outing_list_type"
          value={searchType.outing_list_type}
          onChange={searchHandleChange}
        />
      </_SearchWrapper>

      <_OutingTypeList>
        {outingTypeList?.titles
          .filter((options) => options.includes(searchType.outing_list_type))
          .map((title: string) => {
            return (
              <OutingItemBox
                key={title}
                canClick={MustTrue}
                canDelete={MustTrue}
                isDeleteListOption={MustTrue}
                onClick={onClickOutingOption}
                OptionSelected={selectedTag}
                title={title}
              />
            );
          })}
      </_OutingTypeList>

      <>
        <_AddImgWrapper onClick={newItemInput} newItem={newItem}>
          {newItem ? <Add /> : <Arrow direction="top" />}
          {newItem ? <_Text>항목 추가</_Text> : <_Text>항목 닫기</_Text>}
        </_AddImgWrapper>
        <_AddInputBigWrapper>
          {!newItem && (
            <Input
              className="grantPoint"
              width={478}
              label="이름"
              type="text"
              placeholder="ex) 무단 외출"
              name="title"
              value={addTypeList.title}
              onChange={onHandleChange}
            />
          )}
        </_AddInputBigWrapper>
      </>
    </Modal>
  );
}

const _OutingTypeList = styled.div`
  overflow: scroll;
  height: 23vh;
  > div {
    margin-bottom: 10px;
  }
`;

const _AddInputBigWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const _AddImgWrapper = styled.div<{ newItem: boolean }>`
  display: flex;
  align-items: center;
  margin-top: 35px;
  cursor: pointer;
  width: 85px;
  margin-bottom: ${({ newItem }) => (newItem ? '-20px' : '20px')};
  .addImg {
    width: 17px;
    margin-right: 10px;
  }
`;

const _Text = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #555555;
`;

const _SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  .Search {
    position: absolute;
    top: 8px;
  }
`;

const _SearchInput = styled.input`
  width: 202px;
  height: 40px;
  border-bottom: 1px solid #dddddd;
  padding: 0px 0px 0px 30px;
  font-size: 16px;
`;
