interface PagePath {
  home: '/';
  login: '/login';
  findAccountId: '/find-account-id';
  resetPassword: '/reset';
  myPage: {
    main: '/my-page';
    changePwd: '/my-page/change-pwd';
  };
  apply: {
    main: '/apply';
    remains: {
      list: '/apply/remains';
    };
    studyRoom: {
      list: '/apply/study';
      create: '/apply/study/create';
      deatail: (
        studyRoomId: number | string,
      ) => `/apply/study/detail/${typeof studyRoomId}`;
      patch: (
        studyRoomId: number | string,
      ) => `/apply/study/detail/patch/${typeof studyRoomId}`;
    };
    volunteer: {
      list: '/apply/volunteer',
      detail: (volunteerId: number | string) => `/apply/volunteer/detail/${typeof volunteerId}`,
      currentDetail: (volunteerId: number | string) => `/apply/volunteer/current/detail/${typeof volunteerId}`
    },
  };
  notice: {
    list: '/notice';
    write: '/notice/write';
    detail: (noticeId: number | string) => `/notice/detail/${typeof noticeId}`;
    patch: (
      noticeId: number | string,
    ) => `/notice/detail/patch/${typeof noticeId}`;
  };
  outing: '/outing';
}

export const pagePath: PagePath = {
  home: '/',
  login: '/login',
  findAccountId: '/find-account-id',
  resetPassword: '/reset',
  myPage: {
    main: '/my-page',
    changePwd: '/my-page/change-pwd',
  },
  notice: {
    list: '/notice',
    write: '/notice/write',
    detail: (noticeId: number | string) => `/notice/detail/${noticeId}`,
    patch: (noticeId: number | string) => `/notice/detail/patch/${noticeId}`,
  },
  apply: {
    main: '/apply',
    remains: {
      list: '/apply/remains',
    },
    studyRoom: {
      list: '/apply/study',
      create: '/apply/study/create',
      deatail: (studyRoomId: number | string) =>
        `/apply/study/detail/${studyRoomId}`,
      patch: (studyRoomId: number | string) =>
        `/apply/study/detail/patch/${studyRoomId}`,
    },
    volunteer: {
      list: '/apply/volunteer',
      detail: (volunteerId: number | string) => `/apply/volunteer/detail/${volunteerId}`,
      currentDetail: (volunteerId: number | string) => `/apply/volunteer/current/detail/${volunteerId}`
    },
  },
  outing: '/outing',
} as const;
