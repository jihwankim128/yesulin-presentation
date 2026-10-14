window.PORTAL_SLIDES = window.PORTAL_SLIDES || {};

PORTAL_SLIDES.product = {
  tocSay: '오늘 공연은 3막으로 준비했어요. 편하게 봐주세요!',
  slides: [
    {
      type: 'act', act: 1, title: '콜드메일은 정말 cold 했다',
      items: ['첫 번째 가설', '공연사에 직접 홍보', '가설 쪼개기', '처음으로 돌아가기'],
      say: '처음엔 자신 있었어요. 공연사만 잡으면 끝날 줄 알았거든요.',
    },
    {
      type: 'hypothesis', title: '첫 번째 가설',
      claims: ['배우는 지원이, 공연사는 관리가 불편할 것이다', '공연사를 확보하면 배우는 알아서 따라올 것이다'],
      say: '지원 관리 기능도 만들었겠다, 이제 공연사에 홍보만 하면 되겠죠?',
    },
    {
      title: '공연사에 직접 홍보했습니다',
      points: ['콜드메일과 콜드콜로 공연사에 하나씩 연락', '돌아온 건 무응답, 그리고 **아주 차가운 반응**', '심지어 "관리가 딱히 불편하지 않다"는 이야기까지'],
      say: '콜드메일이라더니... 정말 cold 했습니다.',
    },
    {
      title: '가설이 틀렸다면, 작게 쪼개보자',
      points: ['배우는 정말 지원이 불편했을까?', '공연사는 정말 관리가 불편했을까?', '그리고 우리의 **첫 시작**은 뭐였지?'],
      say: '큰 가설 하나가 무너졌으니, 작은 질문부터 다시 시작했어요.',
    },
    {
      kicker: '처음으로 돌아가기', title: '시작은 한 배우의 불편함이었다',
      subtitle: '팀원 대길의 여자친구, 배우가 가장 크게 이야기한 한 가지',
      big: '알림',
      say: '답은 생각보다 가까이에 있었어요.',
    },
    {
      type: 'act', act: 2, title: '배우부터 다시 만나기',
      items: ['두 번째 가설', '두 갈래 길', '직접 홍보', '100명의 배우', '저작권 지키기', 'OTR과 손잡기'],
      say: '이번엔 공연사 말고, 배우부터 만나보기로 했어요.',
    },
    {
      type: 'hypothesis', title: '두 번째 가설',
      claims: ['배우에게는 공고에 대한 즉각적인 알림이 필요할 것이다'],
      say: '이번 가설은 아주 작게, 배우 한 명의 불편함에서 출발했어요.',
    },
    {
      title: '지난 시도도 아까워서, 두 갈래로',
      points: ['**하나.** 공고 알림, 정말 필요한 사람이 있을까?', '**둘.** 아직 막강한 기존 플랫폼 OTR과 손잡을 수 있을까?'],
      say: '버리긴 아까우니까... 두 길 다 가보기로!',
    },
    {
      title: '정말 필요한 사람이 있을까?',
      subtitle: '배우들이 모이는 커뮤니티와 단톡방, 학교에 직접 홍보했습니다',
      images: [
        'assets/product/gong-go/hongbo/clipboard_20261015_015420.png',
        'assets/product/gong-go/hongbo/clipboard_20261015_015430.png',
        'assets/product/gong-go/hongbo/clipboard_20261015_015435.png',
        'assets/product/gong-go/hongbo/clipboard_20261015_015441.png',
        'assets/product/gong-go/hongbo/clipboard_20261015_015446.png',
        'assets/product/gong-go/hongbo/clipboard_20261015_015451.png',
        'assets/product/gong-go/hongbo/clipboard_20261015_015500.png',
        'assets/product/gong-go/hongbo/clipboard_20261015_015504.png',
        'assets/product/gong-go/hongbo/clipboard_20261015_020107.jpg',
        'assets/product/gong-go/hongbo/clipboard_20261015_020140.jpg',
        'assets/product/gong-go/hongbo/clipboard_20261015_020155.jpg',
      ],
      say: '필요하다는 사람이 진짜 있을지, 직접 물어봤어요.',
    },
    {
      kicker: '결과', title: '배우들이 모였습니다',
      big: '100명+',
      subtitle: '공고 알림 오픈채팅방에 모인 배우들',
      image: 'assets/product/gong-go/result/clipboard_20261015_022849.jpg',
      say: '알림 하나에 이렇게 모일 줄은 몰랐어요.',
    },
    {
      title: '그런데, 저작권은 괜찮을까?',
      points: ['OTR에 올라온 공고의 저작권은 **글 작성자**에게 있다', '제작사에 직접 연락해 허락을 구하고', '내용을 바꾸지 않고 원문 그대로 안내하기로'],
      images: [
        'assets/product/gong-go/accept/clipboard_20261015_015809.jpg',
        'assets/product/gong-go/accept/clipboard_20261015_015813.jpg',
        'assets/product/gong-go/accept/clipboard_20261015_015903.jpg',
        'assets/product/gong-go/accept/clipboard_20261015_015927.jpg',
      ],
      say: '모이는 건 좋은데, 남의 글을 함부로 쓸 순 없죠.',
    },
    {
      kicker: '그리고 신기한 일', title: '배우가 모이니, 공연사의 반응이 달라졌다',
      say: '그 차갑던 공연사들이요!',
    },
    {
      title: '막강한 OTR과 손잡기',
      points: ['OTR 대표님을 **세 번** 만났고', '상부상조 모임 **상상모**를 함께하는 사이가 됐다', '최대 나이 차이 44살, 그래도 형과 동생', '아직은 신뢰를 쌓아가는 중'],
      image: 'assets/product/sangsangmo/clipboard_20261015_022747.jpg',
      say: '44살 차이 나는 형님이 생겼습니다.',
    },
    {
      type: 'act', act: 3, title: '빈틈을 넓히는 가치',
      items: ['사용자를 모은 이유', '우리가 찾은 빈틈', '세 번째 가설', '찾기에서 넓히기로'],
      say: '그럼 우리는 대체 뭘 찾은 걸까요?',
    },
    {
      title: '짧은 시간에 사용자를 모은 이유',
      points: ['기존 플랫폼에서 인사이트를 얻고', '그 안의 불편함을 찾았다', '그런데 진짜 중요한 건, **제작사의 반응이 바뀌었다**는 것'],
      say: '불편함을 찾은 줄 알았는데...',
    },
    {
      kicker: '우리가 찾은 빈틈', title: '새로운 배우 풀',
      points: ['제작사는 **배우가 없는 것**이 불편했다', '경험이 적었던 우리는 OTR을 모르는 **배우 지망 대학생**에게 홍보했다', '그곳이 아무도 채우지 않던 빈틈이었다'],
      say: '불편함 찾기인 줄 알았는데, 빈틈 찾기였어요.',
    },
    {
      type: 'hypothesis', title: '세 번째 가설',
      claims: ['학생 배우가 원하는 건 유명세다', '팬덤이 생기면 배우들이 더 자주 찾아올 것이다'],
      say: '다음 무대의 주인공은 배우들이에요.',
    },
    {
      type: 'compare', title: '빈틈 찾기에서, 빈틈 넓히기로',
      before: { label: '지금까지', text: '기존의 불편함에서 빈틈 찾기' },
      after: { label: '앞으로', text: '빈틈을 넓히는 가치 만들기' },
      say: '다음 공연도 기대해주세요!',
    },
  ],
};
