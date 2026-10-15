window.PORTAL_SLIDES = window.PORTAL_SLIDES || {};

PORTAL_SLIDES.product = {
  tocSay: '오늘 공연은 3막으로 준비했어요. 편하게 봐주세요!',
  slides: [
    {
      type: 'act', act: 1, title: '콜드메일은 정말 cold 했다',
      items: ['첫 번째 가설', '제작사에 직접 홍보', '가설 쪼개기', '처음으로 돌아가기'],
      say: '처음엔 자신 있었어요. 제작사만 잡으면 끝날 줄 알았거든요.',
    },
    {
      type: 'hypothesis', title: '첫 번째 가설',
      claims: ['배우는 지원이, 제작사는 관리가 불편할 것이다', '제작사를 확보하면 배우는 알아서 따라올 것이다'],
      say: '지원 관리 기능도 만들었겠다, 이제 제작사에 홍보만 하면 되겠죠?',
    },
    {
      title: '제작사에 직접 홍보했습니다',
      points: ['콜드메일과 콜드콜로 제작사에 하나씩 연락', '돌아온 건 무응답, 그리고 **아주 차가운 반응**', '심지어 "관리가 딱히 불편하지 않다"는 이야기까지', '작은 제작사는 **불편할 일이 없다**'],
      say: '콜드메일이라더니... 정말 cold 했습니다.',
    },
    {
      title: '가설이 틀렸다면, 작게 쪼개보자',
      points: ['배우는 정말 지원이 불편했을까?', '제작사는 정말 관리가 불편했을까?', '그리고 우리의 **첫 시작**은 뭐였지?'],
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
      items: ['두 번째 가설', '대학생에게 홍보', '100명의 배우', '저작권 지키기', '달라진 반응', '누가, 왜?', '발견한 빈틈'],
      say: '이번엔 제작사 말고, 배우부터 만나보기로 했어요.',
    },
    {
      type: 'hypothesis', title: '두 번째 가설',
      claims: ['배우에게는 공고에 대한 즉각적인 알림이 필요할 것이다'],
      say: '이번 가설은 아주 작게, 배우 한 명의 불편함에서 출발했어요.',
    },
    {
      title: '정말 필요한 사람이 있을까?',
      points: ['OTR은 이미 현장 경험이 있는 배우들이 쓰고 있었다', '그래서 아직 OTR을 모르는 **새로운 시장**에 다가가 보기로', '그게 바로 **대학생 배우**, 학교 톡방에서 시작했다'],
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
        'assets/product/gong-go/hongbo/yonsei-board.png',
      ],
      say: '이미 아는 사람 말고, 아직 모르는 사람에게 가봤어요.',
    },
    {
      kicker: '결과', title: '배우들이 모였습니다',
      big: '100명+',
      subtitle: '공고 알림 오픈채팅방에 모인 배우들',
      image: 'assets/product/gong-go/result/openchat-101.png',
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
        'assets/product/gong-go/accept/clipboard_20261015_032520.jpg',
        'assets/product/gong-go/accept/clipboard_20261015_032738.jpg',
      ],
      say: '모이는 건 좋은데, 남의 글을 함부로 쓸 순 없죠.',
    },
    {
      kicker: '그리고 신기한 일', title: '배우가 모이니, 차갑던 제작사들의 반응이 달라졌다',
      say: '그 차갑던 제작사들이요!',
    },
    {
      type: 'gaps', kicker: '거꾸로 물어보기', title: '누가, 왜 우리에게 왔을까?',
      rows: [
        { tag: '사용자', who: '대학생 배우', why: 'OTR을 몰라 정보가 없으니까', need: '정보' },
        { tag: '공고', who: '제작사', why: '배우가 안 모이니까', need: '배우 풀' },
      ],
      say: '두 집단을 모아놓고 보니, 하나의 패턴이 보였어요.',
    },
    {
      kicker: '그래서 발견한 것', title: '기존 플랫폼이 채우지 못한 빈틈',
      points: ['시작은 **배우 한 명의 불편함**이었다', '그런데 OTR 같은 기존 플랫폼이 **제작사와 배우의 니즈**를 다 채우지 못하고 있었다', '우리는 그 니즈를 채울 수 있는 **빈틈**을 발견했다'],
      say: '작은 불편함 하나가, 빈틈을 보여줬어요.',
    },
    {
      type: 'act', act: 3, title: '빈틈에서 가치를',
      items: ['공고와 배우 풀', '세 번째 가설', '실패해도 다시', '진행 중인 빈틈', 'OTR', '지원 관리', '남극장'],
      say: '불편함은 해결했고... 발견한 빈틈, 넓혀도 될까?',
    },
    {
      kicker: '가장 큰 수요', title: '공고, 그리고 배우 풀',
      points: ['빈틈 중 수요가 가장 많은 건 **공고**', 'OTR과 경쟁하려면 우리에게 올릴 **이유**가 필요하다', '그 이유가 바로 **신규 배우 풀**', '그래서 대학생 배우를 더 늘려야 한다'],
      say: '대부분 제작사는 배우를 원하더라구요.',
    },
    {
      type: 'hypothesis', title: '세 번째 가설',
      points: ['처음 타겟은 **제작사**였지만, 제작사가 원하는 건 **배우**였다', '그렇다면 신인 배우는 무엇을 원할까?'],
      claims: ['신인 배우에게는 **팬**이 필요하다', '배우에게 가치를 만들어주면, 발견한 빈틈이 넓어질 것이다'],
      say: '배우에게 가치가 생겨야, 빈틈도 넓어지니까요.',
    },
    {
      type: 'cycle', kicker: '이번에도 실패할 수 있다', title: '그래도 다시 도전하고, 다시 찾는다',
      steps: ['불편함 찾기', '빈틈 찾기', '가치 만들기'],
      loop: '실패하면, 다시 불편함 찾기부터',
      say: '이번에도 실패할 수 있지만, 사이클이 생겼어요.',
    },
    {
      kicker: '이 사이클 위에서', title: '지금도 여러 빈틈을 돌리는 중',
      points: ['**OTR**: 기존 플랫폼과 연 쌓기', '**예매**: 무료 공연 티켓팅', '**지원 관리**: 지원서부터 쉽게', '**한 제작사 타게팅**: 남극장 스케줄 관리'],
      say: '빈틈 후보는 이미 여러 개 돌고 있어요.',
    },
    {
      title: '막강한 OTR과 연 쌓기',
      points: ['OTR 대표님을 **세 번** 만났고', '상부상조 모임 **상상모**를 함께하는 사이가 됐다', '최대 나이 차이 44살, 그래도 형과 동생', '아직은 신뢰를 쌓는 중. 새로운 가치를 만들 **시작점**이 될지도'],
      image: 'assets/product/sangsangmo/clipboard_20261015_022747.jpg',
      say: '44살 차이 나는 형님이 생겼습니다. 언젠가 큰 힘이 될 인연이에요.',
    },
    {
      kicker: '다음 빈틈 후보', title: '지원 관리, 지원서부터',
      points: ['공고마다 필수 항목만 채우면 바로 **지원서 파일**로', '배우는 지원서를 **쉽게** 쓰고', '제작사들이 모이면, **지원 관리**까지 넓혀볼 수 있다'],
      image: 'assets/product/application/application-form.png',
      say: '1막의 그 지원 관리, 아직 포기 안 했어요.',
    },
    {
      kicker: '한 제작사 타게팅', title: '남극장의 스케줄 관리 돕기',
      points: ['오디션 **스케줄 관리**가 힘들고 필요하다는 이야기', '일정표와 합격 안내 문자를 **만드는 중**', '받은 피드백으로 계속 다듬고 있다'],
      images: [
        'assets/product/namgeukjang/schedule-messages.png',
        'assets/product/namgeukjang/feedback-chat.png',
      ],
      say: '다음 공연도 기대해주세요!',
    },
  ],
};
