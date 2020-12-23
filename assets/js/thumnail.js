 //<![CDATA[
    Kakao.init('2006c8a65ba2cbaaa84a94ae6322b7d6');

    Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '한성교회 성탄 감사 예배',
        description: '성탄 감사 예배',
        imageUrl: 'https://github.com/HanSung-Church/Invitation-Card/blob/master/thumbnail.png',
        link: {
          mobileWebUrl: 'https://hansung-church.github.io/Invitation-Card/',
        }
      },
  /*     buttons: [
        {
          title: '버튼 타이틀',
          link: {
            mobileWebUrl: '버튼클릭시 이동할 모바일용 링크주소',
            webUrl: '버튼클릭시 이동할 PC용 링크주소'
          }
        }
      ] */
    });
  //]]>