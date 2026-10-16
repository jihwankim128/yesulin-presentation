window.PORTAL_SLIDES = window.PORTAL_SLIDES || {};

PORTAL_SLIDES.tech = {
  actRoles: { 1: '무대 세우기', 2: '관객이 몰리다', 3: '커튼콜' },
  tocSay: '손으로 하던 알림을 서비스로, 그리고 그 서비스가 얼마나 버티는지까지.',
  slides: [
    {
      type: 'act', act: 1, title: '손으로 하던 알림을 서비스로',
      items: ['수동 알림방', '손으로는 한계', '알림 자동화', '공고 서비스'],
      say: '처음엔 기술보다 손이 먼저였어요.',
    },
    {
      type: 'chat', kicker: '수동 알림 시절', title: '알림 봇의 정체는 사람이었다',
      room: '배우 오디션 공고 알림방',
      stages: [
        { note: '새 공고가 올라왔는지 운영자가 **OTR을 직접 새로고침**' },
        { note: '배우 공고만 골라 **하나씩 복사**해서 공유' },
        { note: '공유한 링크는 전부 **OTR**로' },
        { note: '배우는 **계속 들어오는데**, 예술in으로 들어올 길이 없다' },
      ],
      messages: [
        { stage: 0, from: 'system', text: '운영자가 OTR을 새로고침하는 중...' },
        { stage: 1, from: 'operator', name: '운영자', text: '[연극] 신입 단원 모집\n마감 확인하고 지원하세요!' },
        { stage: 2, from: 'operator', name: '운영자', text: '[뮤지컬] 앙상블 배우 모집\n자세히 보기', link: 'OTR 공고 링크' },
        { stage: 3, from: 'system', text: '새로운 배우가 들어왔습니다' },
        { stage: 3, from: 'system', text: '새로운 배우가 들어왔습니다' },
        { stage: 3, from: 'system', text: '새로운 배우가 들어왔습니다' },
      ],
      say: '알림 봇의 정체는... 사실 저희였어요.',
    },
    {
      title: '그런데 사람 손으로는',
      points: ['새 공고를 놓치지 않으려면 계속 들여다봐야 했다', '공유한 링크는 OTR로 향해, 예술in으로 들어올 길이 없었다', '모인 배우가 우리 서비스의 사용자가 되지 못했다'],
      say: '배우는 모였는데, 사이트는 비어 있었어요.',
    },
    {
      type: 'flow', kicker: '알림 자동화', title: '공고 알림을 서비스로 옮기다',
      steps: ['OTR 새 공고 자동 수집', '예술in 공고로 가져오기', 'Slack으로 운영자 알림'],
      loop: '운영자는 확인하고, 오픈채팅에 공유만',
      say: '사람은 판단만, 반복은 서버가.',
    },
    {
      type: 'chat', kicker: '자동화 이후', title: '공고 하나가 배우에게 닿기까지',
      room: '예술in 공고 알림 흐름',
      stages: [
        { note: '서버가 OTR 새 공고를 **자동 수집**해 예술in 공고로' },
        { note: '운영자는 **Slack 알림**을 보고 확인만' },
        { members: '101명', note: '오픈채팅에 공유되는 링크는 **yesulin.art**' },
        { members: '101명', note: '링크를 누르면 **예술in 공고 페이지**로' },
      ],
      messages: [
        { stage: 0, from: 'server', text: '[서버] OTR 새 공고 감지\n예술in 공고로 가져오는 중... 완료' },
        { stage: 1, from: 'slack', name: 'Slack 공고 알림', text: '[뮤지컬] 더멜로디 전배역 모집\n검토 대기 중' },
        { stage: 2, from: 'bot', name: '예술in', text: '예술in 오디션 공고 알림 1건\n[뮤지컬] 더멜로디 전배역 모집합니다\n페이: 경력별협의 | 마감: 2026-11-07', link: 'yesulin.art/posts/82' },
      ],
      popup: { stage: 3, image: 'assets/tech/notice/service-list.png', caption: '예술in 오디션 공고 목록' },
      say: '이제 알림을 누르면 예술in으로 들어와요.',
    },
    {
      type: 'act', act: 2, title: '이 공고, 몇 명까지 버틸까?',
      items: ['어디까지 뛸 수 있을까', '센서 붙이기', '측정 조건', '100 RPS의 벽', '병목 두 군데', '트러블 슈팅', '80에서 400 RPS로'],
      say: '사람이 몰리면, 이 서버는 버틸 수 있을까요?',
    },
    {
      type: 'stamina', kicker: '공고가 잘 될수록 서버는 바빠진다', title: '얘는 어디까지 뛸 수 있을까?',
      stages: [
        { speed: '걷기', bpm: 72, hp: '?', mode: 'rest', note: '평소엔 가볍게 걷는다' },
        { speed: '조깅', bpm: 118, hp: '?', mode: 'jog', note: '사람이 몰리면 점점 빨라지고' },
        { speed: '전력 질주', bpm: 172, hp: '?', mode: 'run', note: '어디서부터 힘들어할까?' },
        { speed: '-', bpm: '0', hp: 'X', mode: 'dead', note: '**판단할 지표**가 없으면 알 수 없다. 그러다 쓰러진다' },
      ],
      say: '어디서부터 힘든지 모르면, 쓰러지고 나서야 알게 돼요.',
    },
    {
      type: 'sensors', kicker: '언제 쓰러지는지 알려면', title: '몸에 센서를 붙이듯, 서버에 지표를',
      stages: [
        { note: '언제 쓰러지는지 판단할 **기준**이 필요하다' },
        { note: '얼마나 빨리 뛰는지' },
        { note: '숨은 얼마나 가쁜지' },
        { note: '심장과 체력은 얼마나 남았는지' },
        { note: '근육과 혈관은 어디서 막히는지' },
      ],
      sensors: [
        { stage: 1, color: '#4cc8ff', x: 38, y: 34, body: '달리기 속도', metric: 'API 요청 수 (RPS)' },
        { stage: 2, color: '#7bc96f', x: 20, y: 50, body: '호흡', metric: '응답 시간 (p95), 오류율' },
        { stage: 3, color: '#ff7ab6', x: 56, y: 50, body: '심박, 체력', metric: '**CPU**, **메모리**' },
        { stage: 4, color: '#ffb938', x: 24, y: 70, body: '근육', metric: '**JVM 스레드**, GC' },
        { stage: 4, color: '#b48cff', x: 58, y: 72, body: '혈관', metric: '**DB 커넥션** 대기' },
      ],
      say: '요청 로그와 런타임 지표를 CloudWatch 한 화면에 모았어요.',
    },
    {
      title: '공고 목록, 어디까지 버틸까?',
      points: ['PC에서 k6로 부하, 앱 1대와 DB 1대 모두 t4g.micro', '공개 공고 2,801건, 회차별 60초, 10초 timeout', 'RPS를 조금씩 올리며 **한계점** 찾기'],
      say: '사람이 몰리기 전에, 먼저 몰아봤어요.',
    },
    {
      type: 'arena', kicker: '다음을 누를 때마다 사람이 더 몰려와요', title: '공고 목록에 사람이 몰리면',
      stages: [
        { rps: 5, p95: '58ms', err: '0%', mode: 'ok', note: '5 RPS, 여유롭다' },
        { rps: 60, p95: '79ms', err: '0%', mode: 'ok', note: '60 RPS까지는 괜찮았다' },
        { rps: 80, p95: '5.6s', err: '0%', mode: 'slow', note: '80 RPS, 서버 앞에 **줄이 생기기 시작**' },
        { rps: 100, p95: '10s', err: '58.5%', mode: 'down', note: '100 RPS, **절반 넘게 타임아웃**' },
      ],
      say: '정말 이게 한계일까? 더 늘릴 수는 없을까 고민했어요.',
    },
    {
      type: 'table', kicker: '센서가 알려준 것', title: '병목은 두 군데',
      head: ['보인 증상', '원인', '해결'],
      rows: [
        ['DB CPU 100%, 커넥션 대기 191개', 'COUNT 3번이 매번 2,801행을 읽음', 'COUNT 3번을 **1번으로** 집계'],
        ['200 RPS에서 p95 5.8초', '인덱스에 마감일이 없어 테이블을 추가로 읽음', '집계용 **커버링 인덱스**'],
      ],
      say: '센서를 붙이니까, 어디가 아픈지 보이더라구요.',
    },
    {
      type: 'table', kicker: '고치면서 생긴 일', title: '트러블 슈팅',
      head: ['문제', '원인', '해결'],
      rows: [
        ['인덱스가 안 쓰였다', '옵티마이저가 커버링 인덱스를 선택하지 않음', '쿼리에 **인덱스 지정**'],
        ['막 켠 서버가 느렸다\n150 RPS, p95 7.09초', 'JIT 컴파일 전이라 CPU를 많이 씀', '**3분 단계 예열** 뒤 측정'],
      ],
      say: '고치면 끝인 줄 알았는데, 매번 다른 문제가 나왔어요.',
    },
    {
      type: 'arena', kicker: '고칠 때마다 다시 몰려와 봤어요', title: '80에서 400 RPS로',
      stages: [
        { rps: 80, p95: '74ms', err: '0%', mode: 'ok', note: 'COUNT 통합 후, 막히던 **80 RPS**가 여유롭게' },
        { rps: 200, p95: '5.8s', err: '-', mode: 'slow', note: '200 RPS, 인덱스가 모자라 **다시 줄이 생겼다**' },
        { rps: 150, p95: '7.09s', err: '-', mode: 'slow', note: '150 RPS, 막 켠 서버는 **몸이 덜 풀렸다**' },
        { rps: 400, p95: '85ms', err: '0%', mode: 'ok', note: '인덱스와 예열 후, **400 RPS** 통과' },
        { rps: 500, p95: '10s', err: '47.6%', mode: 'down', note: '500 RPS, 여기는 **한계**였다' },
      ],
      say: '80 RPS에서 막히던 서버가, 같은 t4g.micro 한 대로 5배를 받아냈어요.',
    },
    {
      type: 'act', act: 3, title: '부하 테스트가 남긴 것',
      items: ['확장 지점', '그래프로 보기', 'micro로 충분하다', '사실 놓친 것', '다음 측정'],
      say: '그래서 이 숫자로 무엇을 정할 수 있었을까요?',
    },
    {
      type: 'table', kicker: '센서로 본 확장 지점', title: '400은 버티고, 500에서 쓰러졌다',
      head: ['최대치', '400 RPS', '500 RPS'],
      rows: [
        ['APP CPU', '74.1%', '94.3%'],
        ['APP 메모리', '71.9%', '94.9%'],
        ['APP I/O 대기', '2%', '90.5%'],
        ['DB CPU', '79.6%', '84.5%'],
        ['결과', 'p95 85ms, 오류 0', '타임아웃 47.6%'],
      ],
      say: '500에선 앱 메모리가 바닥났어요. 400 근처가 늘려야 할 시점이에요.',
    },
    {
      kicker: '개선 전 100 → COUNT 통합 후 100 → 인덱스 후 400 RPS (첫 장만 세로축 10초)', title: '10초 벽에서, 바닥으로',
      images: ['assets/tech/loadtest/r100-before.png', 'assets/tech/loadtest/r100-after.png', 'assets/tech/loadtest/r400-index.png'],
      say: '그래프로 보면 차이가 더 확실해요.',
    },
    {
      kicker: '결과', title: '운영은 micro로 충분하다',
      points: ['80 RPS에서 막히던 서버가 같은 **t4g.micro**로 400 RPS', 'ALB와 ASG가 있어 한계가 오면 바로 늘릴 수 있다', '그래서 운영 서버를 t4g.small에서 **t4g.micro로 낮추기로**', '같은 사용 시간 기준 컴퓨팅 비용 약 **50%** 절감 예정'],
      say: '늘릴 준비는 해두고, 지금은 작게 쓰기로 했어요.',
    },
    {
      type: 'table', kicker: '그런데 사실, 놓친 게 있었다', title: '알림을 누르면 열리는 건 상세 페이지',
      head: ['10월 12일 운영 서버', 'p95', '요청 수'],
      rows: [
        ['공고 상세', '7ms', '1,547'],
        ['공고 목록', '11ms', '1,442'],
        ['로그인 확인', '18ms', '962'],
      ],
      say: '알림 링크는 상세로 가는데... 저희는 목록만 열심히 쟀어요.',
    },
    {
      title: '다음 측정',
      points: ['**공고 상세** 페이지도 같은 방식으로 측정', '**무료 공연 예매**처럼 새로 열린 기능까지 함께', '캐싱 등 다른 방법도 하나씩 비교하며 처리량을 더 늘릴 수 있는지'],
      say: '한 번에 하나씩, 다시 잴게요. 다음 공연도 기대해주세요!',
    },
  ],
};
