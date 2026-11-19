window.PORTAL_SLIDES = window.PORTAL_SLIDES || {};

PORTAL_SLIDES['woowahan-exhibition'] = {
  tocTitle: '오디션 지원부터 심사까지',
  actRoles: { 1: '출발점', 2: '지금의 예술in', 3: '다음 오디션' },
  tocSay: '한 배우가 오디션 공고를 놓친 일에서 예술in이 시작됐어요.',
  slides: [
    {
      type: 'act', act: 1, exhibit: 'opening',
      title: '공고는 놓치고, 지원서는 흩어집니다',
      items: ['배우와 공연사의 불편', '공연사에서 배우로 바꾼 첫 대상'],
      kicker: '예술in',
      roles: [
        { label: '배우', detail: '공고를 늦게 봐 지원을 놓쳐요' },
        { label: '공연사', detail: 'PDF를 하나씩 열고 메모는 따로 남겨요' },
      ],
      flow: [
        { role: '배우', label: '새 공고 알림을 받고 제때 지원', icon: 'message' },
        { role: '공연사', label: '원본 PDF·메모·판정을 함께 확인', icon: 'review' },
      ],
      stages: [
        { mode: 'actor' },
        { mode: 'company' },
        { mode: 'connected' },
      ],
    },
    {
      exhibit: 'pivot',
      title: '공연사가 먼저 쓰면 배우도 올까?',
      kicker: '처음에 세운 가설',
      proposal: '배우의 오디션 지원과 공연사의 지원 관리',
      image: 'assets/exhibition/openchat/kakao-openchat-270.png',
      caption: '참여자 270명이 표시된 오디션 공고 알림 카카오톡 오픈채팅 화면',
      inquiryImages: [
        'assets/product/gong-go/accept/clipboard_20261015_015809.jpg',
        'assets/product/gong-go/accept/clipboard_20261015_015813.jpg',
        'assets/product/gong-go/accept/clipboard_20261015_015903.jpg',
        'assets/product/gong-go/accept/clipboard_20261015_015927.jpg',
        'assets/product/gong-go/accept/clipboard_20261015_032520.jpg',
        'assets/product/gong-go/accept/clipboard_20261015_032738.jpg',
      ],
      response: '반응은 적었어요',
      shift: [
        { label: '공연사부터', icon: 'office' },
        { label: '배우부터', detail: '공고를 놓치던 배우에게 새 공고를 알리기로 했어요.', icon: 'message' },
      ],
      metric: '270명+',
      metricLabel: '오디션 공고 알림방\n참여 배우',
      proof: '대학생 배우가 있는 학교 단톡방에 알림방을 소개하고, 새 오디션 공고를 바로 전했습니다.',
      stages: [
        { title: '공연사가 먼저 쓰면 배우도 올까?', note: '지원과 심사 기능을 만든 뒤, 공연사에 먼저 사용을 제안했습니다.' },
        { title: '왜 배우부터 다시 만나기로 했을까?', kicker: '공연사에 먼저 제안한 결과' },
        { title: '새 공고를 바로 알려주면 어떨까?', kicker: '배우부터 다시 만나기' },
        { title: '배우가 모이자 공연사도 관심을 보였습니다', kicker: '오디션 공고 알림' },
        { title: '공유를 허락하고, 등록 방법도 물었습니다', kicker: '공연사 반응' },
      ],
    },
    {
      type: 'act', act: 2, exhibit: 'review',
      title: '지원서를 받는 곳이 두 군데라면?',
      items: ['남극장이 알려준 문제', 'PDF 원본 심사', '네트워킹 데이'],
      kicker: '남극장에 지원 링크를 제안했습니다',
      sources: [
        { label: '기존 이메일', detail: 'PDF 지원서', icon: 'pdf', check: '메일함에서 확인' },
        { label: '지원 링크', detail: '온라인 지원서', icon: 'browser', check: '예술in에서 확인' },
      ],
      portraitSource: 'assets/story-c/networking/pdf-review.png',
      stages: [
        { title: '지원서를 받는 곳이 두 군데라면?', note: '담당자는 이메일과 예술in을 각각 열어 확인해야 합니다.' },
        { title: '메일로 받은 PDF를 심사함에 한 번에', note: '심사함에 이름과 모집 배역을 정하고, PDF 여러 개나 폴더를 그대로 올립니다.' },
        { title: '받은 지원서를 원본 그대로 봅니다', note: '지원서 원본을 한 명씩 열어 배우가 보낸 사진과 경력을 직접 확인합니다.' },
        { title: '원본 옆에서 배역과 판정을 남깁니다', note: '배역을 배정하고 내부 메모를 남긴 뒤, 합격·보류·불합격 중 하나를 선택합니다.' },
      ],
    },
    {
      exhibit: 'pipeline',
      title: '업로드를 마친 지원서부터 심사합니다',
      kicker: 'PDF 원본을 띄우는 방식',
      stages: [
        { note: '파일 이름이 달라도 내용이 같으면 중복 업로드를 건너뜁니다.' },
        { note: '업로드된 PDF를 PDF.js가 브라우저에서 그려, 나머지 파일이 올라가는 동안에도 볼 수 있습니다.' },
      ],
    },
    {
      exhibit: 'proof',
      title: '현장에서 만난 배우들이 프로필을 공개했습니다',
      kicker: '11월 9일 예술in 네트워킹 데이',
      image: 'assets/exhibition/networking/networking-day.jpg',
      caption: '남극장에서 배우와 공연사 관계자가 이야기를 나누는 모습',
      metric: '19명',
      metricLabel: '참석 배우 20명 중\n예술in 프로필을 공개한 배우',
      proof: '배우와 공연사 관계자가 오디션·캐스팅 이야기를 나누고 QR 명함을 교환했습니다.',
      credit: '예술in · 남극장 · 컴퍼니연결 공동 주최',
    },
    {
      type: 'act', act: 3, exhibit: 'forward',
      title: '배우의 지원과 공연사의 관리를\n한곳에서',
      items: ['지원부터 심사까지'],
      kicker: '예술in이 만들고 싶은 오디션',
      roles: [
        { label: '배우', detail: '공고를 보고\n등록한 프로필로 지원', icon: 'card' },
        { label: '공연사', detail: '지원서를 받아\n심사하고 결과까지 관리', icon: 'office' },
      ],
      next: '다음 오디션에서 배우의 실제 지원부터 공연사의 심사까지 한곳에서 이어지는지 확인합니다.',
      booth: '부스에서 PDF 심사를 직접 체험하고 궁금한 점을 물어보세요.',
    },
  ],
};
