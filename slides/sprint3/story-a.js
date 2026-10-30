window.PORTAL_SLIDES = window.PORTAL_SLIDES || {};

const PDF_STATIONS = [
  { id: 'browser', name: '접수 창구', tech: '브라우저', icon: 'browser', x: 13, y: 26 },
  { id: 'spring', name: '사무실', tech: 'Spring', icon: 'office', x: 50, y: 26 },
  { id: 'screen', name: '심사 화면', tech: '브라우저', icon: 'review', x: 87, y: 26 },
  { id: 's3', name: '창고', tech: 'S3', icon: 'bucket', x: 13, y: 78 },
  { id: 'lambda', name: '공방', tech: 'Lambda', icon: 'gear', x: 50, y: 78 },
];

const AI_STATIONS = [
  { id: 'office', name: '사무실', tech: 'Spring', icon: 'office', x: 12, y: 26 },
  { id: 'ai', name: 'AI 조수', tech: 'Gemini, Bedrock', icon: 'robot', x: 37, y: 26, popSide: 'below' },
  { id: 'check', name: '검사관', tech: '응답 검증', icon: 'magnifier', x: 63, y: 26 },
  { id: 'apply', name: '지원서 반영', tech: 'READY', icon: 'card', x: 88, y: 26, popSide: 'below' },
  { id: 'retry', name: '대기 상자', tech: 'DB', icon: 'hourglass', x: 18, y: 78 },
  { id: 'review', name: '확인 필요', tech: 'NEEDS_REVIEW', icon: 'warning', x: 63, y: 78 },
];

PORTAL_SLIDES['story-a'] = {
  actRoles: { 1: '남극장에 가다', 2: 'PDF 300건', 3: 'AI 조수' },
  tocSay: '지원 링크를 권하러 갔다가, PDF 심사를 만들게 된 이야기예요.',
  slides: [
    {
      type: 'act', act: 1, title: '지원 링크를 권하러 갔다가',
      items: ['원래 그림', '남극장에 가다', '깨달은 점', '머릿속 그림', '어려움 1. 300건'],
      say: '시작은 지원 링크 하나였어요.',
    },
    {
      type: 'flow', kicker: '원래 그림', title: '지원 링크 하나로 심사까지',
      steps: ['OTR 공고', '예술in 지원 링크', '예술in에서 심사'],
      loop: '원래 예술in은 **지원**까지만, 이제 **심사**까지',
      say: '사람들이 가장 많이 보는 OTR에, 우리 지원 링크를 달면 되겠다 싶었죠.',
    },
    {
      type: 'visit', kicker: '남극장에 가다', title: '새 공연 소식에 직접 찾아갔다',
      place: '남극장 사무실', poster: '새 공연\n오디션 모집',
      cast: [{ name: '예술in', look: 'hero' }, { name: '남극장', look: 'theater' }],
      stages: [
        { speaker: '예술in', line: '이번 오디션, 예술in으로 지원받아 보실래요?' },
        { speaker: '남극장', line: '다 좋은데, 메일 지원이랑 나뉘면 정보가 흩어져서 더 힘들 것 같아요.' },
        { speaker: '예술in', line: '그럼 받으신 PDF를 예술in에 올리면, 한곳에서 다 보게 해드릴게요!' },
        { speaker: '남극장', line: '너무 좋은데요? 그럼 무조건 쓰죠!' },
      ],
    },
    {
      type: 'hypothesis', title: '여기서 깨달은 점',
      points: ['우리는 배우에게도, 공연사에게도 **새로운 방식**을 요구하고 있었다'],
      claims: ['하던 방식을 바꾸지 말고, 먼저 **편하게** 만들자'],
      say: '시지프의 커리큘럼이 떠올랐다...',
    },
    {
      type: 'flow', kicker: '머릿속 그림', title: '생각은 간단했다',
      steps: ['PDF 업로드', '글자·사진 추출', 'AI로 정리', '지원자 심사'],
      loop: '하지만 실제로 만들면서, 생각과 다른 **어려움**들을 마주했다',
      say: '막상 구현을 시작하려니 처음부터 막혔어요.',
    },
    {
      kicker: '어려움 1', title: 'PDF 300건, 어떻게 처리하지?',
      big: '300건',
      subtitle: '남극장 예상 지원자는 200명대, 넉넉히 300명을 상한으로',
      say: 'PDF 300개를 서버 하나가 다 열면... 버틸 수 있을까요?',
    },
    {
      type: 'act', act: 2, title: 'PDF 300건을 받아내는 길',
      items: ['사진이 먼저', '왜 PDFium인가', 'PDF가 지나가는 길', '정리하면'],
      say: '이제 PDF 한 장을 따라가 볼게요.',
    },
    {
      type: 'hypothesis', title: '그래서 정한 방향',
      points: ['오디션 심사는 **프로필 사진**으로 먼저 빠르게 거른다'],
      claims: ['PDF에서 **사진 추출**이 가장 먼저 끝나야 한다', '이름, 경력 같은 나머지는 **천천히** 채워져도 된다'],
      say: '사진만 먼저 보여도, 심사는 시작할 수 있으니까요.',
    },
    {
      type: 'table', kicker: '왜 파이썬이었을까', title: '언어가 아니라, 엔진을 골랐다',
      head: ['같은 PDF 3개로 비교', 'PDFBox (Java)', 'pypdfium2 (Python)'],
      rows: [
        ['PDF 한 개 처리', '0.3 ~ 3.5초', '0.1 ~ 1.2초'],
        ['사진 꺼내기', '가능', '이미지 버퍼로 바로'],
        ['붙이는 곳', 'Spring 안에 바로', 'Lambda로 따로'],
      ],
      say: '솔직히 Java용 PDFium도 있어요. 빠른 엔진을 따라간 거예요.',
    },
    {
      type: 'journey', kicker: '다음을 누르면 PDF가 움직여요', title: 'PDF가 심사 화면까지 가는 길',
      stations: PDF_STATIONS,
      stages: [
        { at: 'browser', carry: 'PDF 300장', note: '심사함을 만들고, 받은 **PDF 지원서**를 한 번에 고른다' },
        { at: 'spring', label: '올려도 될까요?', carry: '창고 출입증', pops: ['같은 PDF인지 확인', '빈 지원서 칸'], note: '사무실은 **빈 지원서 칸**부터 만들고, 창고 출입증을 건넨다' },
        { at: 's3', from: 'browser', label: '직접 업로드', carry: 'PDF', note: '무거운 PDF는 사무실을 거치지 않고 **창고로 바로**' },
        { at: 'lambda', label: '창고 벨', carry: 'PDF', signals: [{ from: 'browser', to: 'spring', label: '다 올렸어요', curve: -36 }], note: '창고 벨이 **공방을 깨우고**, 브라우저는 따로 완료를 알린다. 순서는 상관없다' },
        { at: 'lambda', carry: '사진과 글자', pops: ['사진은 창고에 보관'], note: '공방은 PDFium으로 **사진부터** 빠르게 꺼낸다' },
        { at: 'spring', label: '다 꺼냈어요', carry: '추출 결과', pops: ['사진 먼저 공개', 'AI에게 정리 요청'], note: '사무실은 결과를 받아 **사진부터** 심사 화면에 올린다' },
        { at: 'screen', label: '진행률', carry: '사진', tone: 'done', note: '담당자는 사진으로 **바로 심사**, 나머지 정보는 뒤에서 채워진다' },
      ],
      say: 'PDF 한 장이 다섯 군데를 거쳐 심사 화면에 도착해요.',
    },
    {
      type: 'compare', kicker: '정리하면', title: '사진은 빠르게, 나머지는 천천히',
      before: { label: '처음 생각', text: '모든 정보가 **다 정리될 때까지** 기다린다' },
      after: { label: '바꾼 방식', text: '**사진이 나오면 바로** 심사, 나머지는 뒤에서 채운다' },
      say: '담당자는 기다리지 않고, 서버는 무리하지 않아요.',
    },
    {
      type: 'act', act: 3, title: 'AI는 돕고, 사람이 고른다',
      items: ['어려움 2. 느리고 실패하는 AI', '콜백이 오면 바로', '실패하면 다시', '어려움 3. 두 번 오는 소식', '남은 숙제'],
      say: '이제 AI 조수가 일하는 모습을 볼게요.',
    },
    {
      kicker: '어려움 2', title: 'AI는 느리고, 가끔 실패한다',
      points: ['AI 답은 **오래 걸리고**, 가끔 **틀리거나 실패**한다', '그동안 지원서를 붙잡고 있으면 **담당자 수정**과 부딪힌다', '서버가 다시 켜져도 **어디까지 했는지** 알아야 한다'],
      say: '300건이 한꺼번에 몰리면, AI도 버거워해요.',
    },
    {
      type: 'journey', kicker: '다음을 누르면 지원서가 움직여요', title: '콜백이 오면 바로 AI에게',
      stations: AI_STATIONS,
      stages: [
        { at: 'office', carry: '대기', tone: 'wait', note: '**PDF 처리 완료** 콜백이 오면, AI 작업을 대기로 저장한다' },
        { at: 'ai', label: '바로 깨우기', carry: '정리 중', pops: ['5초 기다리지 않음', '동시에 4건까지'], note: '저장이 끝나면 **바로** AI 조수를 깨운다. 한 건이 시작되면 다음 건도 이어서' },
        { at: 'check', carry: '답장 도착', note: '답이 형식에 맞는지, **원문에 근거**가 있는지 확인한다' },
        { at: 'apply', carry: '준비 완료', tone: 'done', pops: ['담당자 메모, 판정은 그대로'], note: '통과하면 이름과 경력을 채운다. 사람이 고친 건 **덮어쓰지 않는다**' },
      ],
      say: '사진으로 심사하는 동안, AI 조수가 나머지를 채워요.',
    },
    {
      type: 'journey', kicker: '다음을 누르면 지원서가 움직여요', title: '실패하면, 안에서 다시',
      stations: AI_STATIONS,
      stages: [
        { at: 'check', carry: '실패', tone: 'fail', note: 'AI가 대답하지 않거나, 답이 **원문과 맞지 않으면**' },
        { at: 'retry', label: '조금 쉬었다가', curve: 20, carry: '재시도 대기', tone: 'wait', note: '실패한 건은 **DB에 대기**로 남는다. 지원서는 사라지지 않는다' },
        { at: 'ai', label: '5초마다 확인', carry: '재시도 중', note: '5초마다 도는 **안전망**이 대기 건을 다시 집어 간다. 최대 3번까지' },
        { at: 'check', carry: '세 번째 실패', tone: 'fail', note: '그래도 답이 맞지 않으면' },
        { at: 'review', label: '여기까지', carry: '사람에게', tone: 'fail', pops: ['원문과 사진은 그대로'], note: '**확인 필요**로 넘긴다. 사람이 원문을 보고 이어간다' },
      ],
      say: 'AI가 못 해도 지원서는 사라지지 않아요. 사람이 보면 되니까요.',
    },
    {
      type: 'table', kicker: '어려움 3. 같은 소식이 두 번 오면', title: '두 번 와도 한 번만',
      head: ['이럴 때', '이렇게'],
      rows: [
        ['같은 PDF를 또 올림', '같은 심사면 **기존 접수**를 돌려준다'],
        ['같은 결과가 또 도착', '이미 받았으니 **한 번만** 반영'],
        ['다른 내용으로 또 도착', '**충돌**로 막는다'],
        ['저장하다 실패', '전부 되돌리고 **다시 받는다**'],
        ['늦게 온 예전 AI 답장', '지금 담당이 아니면 **반영하지 않는다**'],
      ],
      say: '소식이 두 번 와도, 지원서는 한 번만 바뀌어요.',
    },
    {
      title: '아직 남은 숙제',
      points: ['**Java용 PDFium**과도 비교해보기', '공방 소식이 끝내 **사라졌을 때** 자동으로 되살리기', '300건을 한 번에 올렸을 때의 **실제 부하와 메모리**', '배포 서버에서 Bedrock까지 **전체 흐름** 확인'],
      say: 'Dev에서는 잘 돌아가는 것까지 확인했어요. 다음 공연도 기대해주세요!',
    },
  ],
};
