import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { pagePath } from './utils/pagePath';
import { NotFoundPage } from './pages/NotFound';

// 코드 스플리팅을 위한 lazy loading
const LoginPage = lazy(() =>
  import('@/pages/LoginPage').then((module) => ({ default: module.LoginPage })),
);
const FindIdPage = lazy(() =>
  import('./pages/FindId').then((module) => ({ default: module.FindIdPage })),
);
const Home = lazy(() =>
  import('@/pages/Home').then((module) => ({ default: module.Home })),
);
const ResetPwdPage = lazy(() =>
  import('./pages/ResetPwdPage').then((module) => ({
    default: module.ResetPwdPage,
  })),
);
const NoticeListPage = lazy(() =>
  import('@/pages/notice/List').then((module) => ({
    default: module.NoticeListPage,
  })),
);
const NoticeDetail = lazy(() =>
  import('@/pages/notice/Detail').then((module) => ({
    default: module.NoticeDetail,
  })),
);
const WriteNoticePage = lazy(() =>
  import('@/pages/notice/Write').then((module) => ({
    default: module.WriteNoticePage,
  })),
);
const MyPage = lazy(() =>
  import('./pages/myPage').then((module) => ({ default: module.MyPage })),
);
const ChangePwd = lazy(() =>
  import('./pages/myPage/ChangePwd').then((module) => ({
    default: module.ChangePwd,
  })),
);
const PatchNoticePage = lazy(() =>
  import('@/pages/notice/Patch').then((module) => ({
    default: module.PatchNoticePage,
  })),
);
const StudyRoomList = lazy(() =>
  import('./pages/apply/study/StudyRoomList').then((module) => ({
    default: module.StudyRoomList,
  })),
);
const CreateRoom = lazy(() =>
  import('@/pages/apply/study/CreateRoom').then((module) => ({
    default: module.CreateRoom,
  })),
);
const StudyRoomDetail = lazy(() =>
  import('@/pages/apply/study/Detail').then((module) => ({
    default: module.StudyRoomDetail,
  })),
);
const PatchRoom = lazy(() =>
  import('./pages/apply/study/PatchRoom').then((module) => ({
    default: module.PatchRoom,
  })),
);
const ApplyIndex = lazy(() =>
  import('@/pages/apply').then((module) => ({ default: module.default })),
);
const RemainsLists = lazy(() =>
  import('@/pages/apply/remains').then((module) => ({
    default: module.default,
  })),
);
const Outing = lazy(() =>
  import('./pages/outing').then((module) => ({ default: module.Outing })),
);
const OutingTimeSet = lazy(() =>
  import('./pages/outing/OutingTimeSet').then((module) => ({
    default: module.OutingTimeSet,
  })),
);
const Volunteer = lazy(() =>
  import('./pages/volunteer').then((module) => ({ default: module.Volunteer })),
);
const VolunteerDetail = lazy(() =>
  import('./pages/volunteer/Detail').then((module) => ({
    default: module.VolunteerDetail,
  })),
);
const VolunteerApplication = lazy(() =>
  import('./pages/volunteer/Application').then((module) => ({
    default: module.VolunteerApplication,
  })),
);
const SurveyMain = lazy(() =>
  import('./pages/survey/Main').then((module) => ({ default: module.Main })),
);
const SurveyResult = lazy(() =>
  import('./pages/survey/SurveyResult').then((module) => ({
    default: module.SurveyResult,
  })),
);

export const pathToKorean = {
  'notice': {
    index: '공지 목록',
    write: {
      index: '공지 작성하기',
    },
    detail: {
      index: '공지 상세보기',
      patch: {
        dynamic: '공지 수정하기',
      },
    },
  },
  'apply': {
    index: '신청',
    study: {
      index: '자습실 목록보기',
      create: '자습실 생성',
      detail: {
        index: '자습실 상세보기',
        patch: {
          dynamic: '자습실 수정하기',
        },
      },
    },
    remains: {
      index: '잔류 신청',
    },
    outing: {
      index: '외출 목록',
    },
    volunteer: {
      index: '봉사 신청',
      current: '봉사 현황',
      detail: {
        index: '봉사 상세보기',
      },
    },
  },
  'my-page': {
    'index': '마이페이지',
    'change-pwd': '비밀번호 변경',
  },
};

export const Router = createBrowserRouter([
  {
    path: '',
    errorElement: <NotFoundPage />,
    children: [
      {
        path: pagePath.home,
        element: <Home />,
      },
      {
        path: pagePath.login,
        element: <LoginPage />,
      },
      {
        path: pagePath.findAccountId,
        element: <FindIdPage />,
      },
      {
        path: pagePath.resetPassword,
        element: <ResetPwdPage />,
      },
      {
        path: pagePath.myPage.main,
        children: [
          { index: true, element: <MyPage /> },
          { path: 'change-pwd', element: <ChangePwd /> },
        ],
      },
      {
        path: pagePath.notice.list,
        children: [
          { index: true, element: <NoticeListPage /> },
          { path: 'write', element: <WriteNoticePage /> },
          { path: 'detail/patch/:noticeId', element: <PatchNoticePage /> },
          { path: 'detail/:noticeId', element: <NoticeDetail /> },
        ],
      },
      {
        path: pagePath.apply.main,
        children: [
          { index: true, element: <ApplyIndex /> },
          {
            path: 'study',
            children: [
              { index: true, element: <StudyRoomList /> },
              { path: 'create', element: <CreateRoom /> },
              { path: 'detail/:id', element: <StudyRoomDetail /> },
              { path: 'detail/patch/:id', element: <PatchRoom /> },
            ],
          },
          {
            path: 'remains',
            children: [{ index: true, element: <RemainsLists /> }],
          },
          {
            path: 'volunteer',
            children: [
              { index: true, element: <Volunteer /> },
              { path: `detail/:id`, element: <VolunteerDetail /> },
              { path: 'current', element: <VolunteerApplication /> },
              { path: 'current/detail/:id', element: <VolunteerDetail /> },
            ],
          },
        ],
      },
      {
        path: pagePath.outing,
        children: [
          { index: true, element: <Outing /> },
          { path: ':id', element: <Outing /> },
          { path: 'time', element: <OutingTimeSet /> },
        ],
      },
      {
        path: pagePath.survey.main,
        children: [
          { index: true, element: <SurveyMain /> },
          { path: `result/:id`, element: <SurveyResult /> },
        ],
      },
    ],
  },
]);
