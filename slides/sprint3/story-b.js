window.PORTAL_SLIDES = window.PORTAL_SLIDES || {};

/*
 * 내용: 2026.10.21 PROD 무중단 배포 검증 기록
 * https://sprint.yesulin.art/sprint.html?n=3#tech
 * https://claude.ai/artifact/7GSfvdSPtDDzwJGeeKjA6M
 * 흐름: 스프린트 2 제품의 문제·가설·검증 + 기술의 구조·측정·한계.
 * 두 기록의 요청 수, 실패 수, 중단 시간은 일치한다.
 * Claude의 PR #337 '병합 대기'는 과거 상태다. GitHub API로
 * 2026-10-21T09:17:45Z 병합 확인(2026.10.30 조회).
 * 기준선 실험도 draining 60초다. 300→60초 조정을 0건의 단독 원인으로 쓰지 않는다.
 * 기준선 164.5초에는 멈춘 측정 요청의 공백을 중단으로 판정한 구간이 포함된다.
 * 2회차부터 측정 요청의 지연이 다음 요청을 막지 않도록 수정했다.
 * 성공한 롤백은 같은 커밋의 다른 빌드다. 다른 코드 버전 복구까지 입증하지 않는다.
 * 그래프 원본: sprint.yesulin.art/assets/s3/timeline-{baseline,rolling,rollback}.svg
 * 5·12페이지는 실패 요청 수 하나와 응답의 끊김·연속성만 보여준다.
 * 총 요청 수는 각각 1,144건·2,988건이며 원본 SVG와 그림 설명에 보존한다.
 * 응답선은 개념도이며 시간 비율이 아니다. 15페이지는 두 서버의 역할만 표시한다.
 * 15페이지의 원한 롤백은 실패했지만 헬스 요청 3,289건 중 실패는 0건이었다.
 * 12페이지의 요청 제외 구간: A 13:46:18~13:47:49, B 13:48:39~13:50:49.
 * 17페이지는 컬럼 삭제 사례의 사용 중단→검증→삭제 순서를 설명하는 예시다.
 * 설명용 서버 그림은 개념도이며, 이동하는 점은 실시간 요청/성능 수치가 아니다.
 */
PORTAL_SLIDES['story-b'] = {
  actRoles: { 1: '멈춘 무대', 2: '교대하는 무대', 3: '돌아갈 무대' },
  tocTitle: '배포해도, 서비스는 계속',
  tocSay: '새 버전을 올리는 동안에도, 관객은 공연을 계속 볼 수 있어야 하니까요.',
  slides: [
    {
      type: 'act', act: 1, title: '배포할 때마다 문이 닫혔다',
      items: ['서버 한 대의 빈자리', '측정 기준', '222건의 실패', '무중단 배포 가설'],
      say: '기능을 고치려고 배포했는데, 그동안 서비스에 들어올 수가 없었어요.',
    },
    {
      title: '배포 중에는, 받을 서버가 없었다',
      image: 'assets/story-b/deployment/single-server.svg',
      caption: '배포할 서버를 요청 대상에서 빼면, 대신 받을 서버가 없는 구조',
      say: '혼자 무대를 지키던 서버가 옷을 갈아입으러 가니, 무대가 비었어요.',
    },
    {
      kicker: '2026.10.21 · 외부 PC에서 운영 서버 측정', title: '배포하는 동안, 계속 확인했습니다',
      points: [
        '**0.2초마다** 상태 확인 요청, 헬스 API 호출',
        '**2초 이내에 200 응답**이면 성공, 나머지는 실패',
        '응답에 **서버 A·B 표시**를 붙여 누가 받았는지 확인',
        '이번에는 **상태 확인 API 한 개**만 측정',
      ],
      say: '배포 화면의 초록불만 보고 안심하지 않고, 바깥에서 계속 문을 두드렸어요.',
    },
    {
      title: '서버가 빠지자, 응답도 멈췄다',
      image: 'assets/story-b/deployment/result-baseline.svg',
      say: '유일한 서버가 배포하는 동안, 대신 요청을 받을 서버는 없었어요.',
    },
    {
      type: 'hypothesis', title: '무중단 배포 가설',
      claims: ['한 서버가 배포하는 동안,\n**다른 서버가 요청을 받으면** 끊기지 않을 것이다'],
      say: '한 명이 옷을 갈아입는 동안, 다른 한 명이 무대를 지키면 어떨까요?',
    },
    {
      type: 'act', act: 2, title: '한 대씩, 번갈아 배포하기',
      items: ['상시 2대 선택', '두 서버를 위한 준비', '서버 교대', '실패 0건과 비용'],
      say: '서버를 늘리고, 두 서버가 함께 일할 준비를 했어요.',
    },
    {
      type: 'table', title: '왜 항상 두 대를 켜두기로 했을까?',
      head: ['방식', '고려한 점', '판단'],
      rows: [
        ['상시 2대', '기존 배포 흐름 유지', '**이번에 선택**'],
        ['배포할 때만 2대', '평소 비용 절감', '매번 증설·축소 필요'],
        ['Blue/Green', '새 환경으로 트래픽 전환', '계정 권한 확인 필요'],
      ],
      say: '이번에는 파이프라인을 크게 바꾸지 않고 운영할 수 있는 방법을 골랐어요.',
    },
    {
      type: 'table', title: '두 서버가 함께 일하려면',
      head: ['구분', '그대로 늘리면', '바꾼 점'],
      rows: [
        ['반복 작업', '같은 작업을 두 번 실행', '**DB 락**으로 실행 조율'],
        ['재설정 토큰', 'A에만 있으면 B는 모름', '**공용 DB**에 저장'],
        ['요청 기록', '어느 서버가 받았는지 모름', '응답에 **A·B 표시**'],
      ],
      say: '서버를 하나 더 켜기 전에, 함께 쓸 정보와 작업 순서부터 맞췄어요.',
    },
    {
      type: 'table', kicker: 'CodeDeploy: AllAtOnce → OneAtATime', title: '항상 두 대, 배포는 한 대씩',
      head: ['설정', '기존', '변경'],
      rows: [
        ['서버 수 · ASG', '1대', '**2대 고정**'],
        ['배포 순서', '한꺼번에', '**한 대씩 차례로**'],
        ['연결 종료 대기', '300초', '**60초로 사전 조정**'],
      ],
      say: '대기 시간은 첫 측정 전에 60초로 줄였고, 이후 두 대를 번갈아 배포하도록 바꿨어요.',
    },
    {
      type: 'sequence', layout: 'handoff', title: '배포는 교대로, 응답은 계속',
      source: { label: '사용자', detail: '요청 보내기' },
      router: { label: '요청 전달', detail: 'ALB' },
      servers: ['서버 A', '서버 B'],
      servingLabel: '응답 중', deployingLabel: '배포 중', excludedLabel: '요청 제외',
      description: '요청 전달 경로를 설명하는 개념도. A의 정상 복귀를 확인한 뒤 B를 요청 대상에서 제외해 배포한다.',
      say: 'A는 잠시 무대 뒤로, B는 계속 관객 앞에 남아 있어요.',
      stages: [
        {
          serving: 1, servingDetail: '기존 버전',
          note: 'A 배포 중 · B가 요청 처리',
          say: 'A는 잠시 무대 뒤로, B는 계속 관객 앞에 남아 있어요.',
        },
        {
          serving: 0, servingDetail: '새 버전',
          note: 'A 정상 복귀 확인 → B 배포',
          say: 'A가 정상적으로 돌아온 뒤 요청을 이어받으면, B가 배포를 시작해요.',
        },
      ],
    },
    {
      title: '서버는 교대해도, 응답은 계속됐다',
      image: 'assets/story-b/deployment/result-rolling.svg',
      say: 'A가 배포할 땐 B가, B가 배포할 땐 A가 요청을 받았어요.',
    },
    {
      type: 'table', title: '시간과 비용을 들여, 중단을 줄였다',
      head: ['비교 항목', '서버 1대', '서버 2대 · 순차 배포'],
      rows: [
        ['배포 소요', '약 3분', '**약 6분**'],
        ['최장 중단', '164.5초 · 공백 포함', '**측정 결과 0초**'],
        ['추가 서버 비용', '기준', '**월 최대 약 8달러** 추정'],
      ],
      say: '배포는 더 오래 걸려도, 그동안 응답을 계속할 수 있는 쪽을 택했어요.',
    },
    {
      type: 'act', act: 3, title: '되돌릴 때도 괜찮을까?',
      items: ['실패한 롤백', 'DB는 그대로', '호환성을 지키는 순서', '확인한 것과 남은 것'],
      say: '올라가는 길은 확인했으니, 이제 돌아오는 길도 걸어봤어요.',
    },
    {
      type: 'sequence', layout: 'handoff', title: '롤백은 실패해도, 응답은 계속',
      source: { label: '사용자', detail: '요청 보내기' },
      router: { label: '요청 전달', detail: 'ALB' },
      servers: ['서버 A', '서버 B'],
      servingLabel: '응답 유지', deployingLabel: '롤백 시도', excludedLabel: '요청 제외',
      description: 'A를 옛 버전으로 롤백하다 시작 검사에 실패한다. B의 배포는 건너뛰고 계속 요청을 받게 한다. A는 마지막 성공 버전으로 자동 복구되어 정상 복귀한다. 원하는 옛 버전으로의 롤백은 실패한 사례다.',
      say: 'A를 요청 대상에서 뺀 뒤 옛 버전으로 되돌리기 시작했고, B가 요청을 받았어요.',
      stages: [
        {
          serving: 1, servingDetail: '현재 버전 유지',
          serverStates: [
            { status: '롤백 시도', detail: '옛 버전으로 변경', phase: 'working' },
            { status: '응답 유지', detail: '현재 버전 유지' },
          ],
          note: 'A 롤백 시도 · B가 요청 처리',
          say: 'A를 요청 대상에서 뺀 뒤 옛 버전으로 되돌리기 시작했고, B가 요청을 받았어요.',
        },
        {
          serving: 1, servingDetail: '배포 건너뜀',
          serverStates: [
            { status: '롤백 실패', detail: '시작 검사 실패', phase: 'failed' },
            { status: '응답 유지', detail: '배포 건너뜀' },
          ],
          note: 'A 시작 검사 실패 · B의 배포는 중단',
          say: '옛 버전이 시작 검사에 실패해서, B는 배포를 건너뛰고 계속 요청을 받았어요.',
        },
        {
          serving: 1, servingDetail: '현재 버전 유지',
          serverStates: [
            { status: '자동 복구 중', detail: '마지막 성공 버전', phase: 'recovering' },
            { status: '응답 유지', detail: '현재 버전 유지' },
          ],
          note: 'A를 마지막 성공 버전으로 자동 복구',
          say: 'A를 마지막으로 정상 배포된 버전으로 자동 복구하는 동안에도, B가 요청을 받았어요.',
        },
        {
          serving: [0, 1], servingDetail: '정상 응답',
          serverStates: [
            { status: '자동 복구 완료', detail: '마지막 성공 버전' },
            { status: '응답 유지', detail: '버전 변경 없음' },
          ],
          note: 'A 정상 복귀 · 헬스 요청 3,289건 중 실패 0건',
          say: '원했던 옛 버전으로의 롤백은 실패했지만, A는 마지막 성공 버전으로 돌아왔어요.',
        },
      ],
    },
    {
      type: 'sequence', layout: 'schema', title: '코드만 되돌리면, 왜 실패할까?',
      database: '운영 DB', columnCount: 4,
      description: '코드와 DB를 고정된 위치에서 비교한다. 옛 코드와 DB가 맞던 상태에서 새 코드 배포와 컬럼 삭제가 진행되고, 옛 코드만 되돌리면 필요한 컬럼이 없어 시작에 실패한다.',
      say: '처음에는 코드가 쓰는 컬럼이 DB에 모두 있어서 정상적으로 실행됐어요.',
      stages: [
        {
          code: '옛 코드', codeDetail: '컬럼 4개가 필요', codeStatus: '정상 실행',
          columns: true, dbDetail: '필요한 컬럼 4개 있음',
          connection: '컬럼 사용', mode: 'linked',
          note: '처음에는 · 코드와 DB가 맞는 상태',
          say: '처음에는 코드가 쓰는 컬럼이 DB에 모두 있어서 정상적으로 실행됐어요.',
        },
        {
          code: '새 코드', codeDetail: '이 컬럼들은 사용하지 않음', codeStatus: '정상 실행',
          columns: false, dbDetail: '컬럼 4개 삭제',
          connection: '사용하지 않음', mode: 'unused',
          note: '새 버전 배포 · DB 컬럼도 함께 삭제',
          say: '새 버전을 배포하면서, 더는 쓰지 않는 timetables 컬럼 4개를 삭제했어요.',
        },
        {
          code: '옛 코드', codeDetail: '다시 컬럼 4개가 필요', codeStatus: '시작 검사 실패',
          columns: false, dbDetail: '삭제된 컬럼은 돌아오지 않음',
          connection: '필요한 컬럼 없음', mode: 'failed',
          note: '옛 코드로 롤백 · DB는 삭제된 상태 그대로',
          say: '옛 코드는 삭제된 컬럼이 필요했지만, DB에는 없어서 시작하지 못했어요.',
        },
      ],
    },
    {
      type: 'sequence', layout: 'schema', title: '코드부터 바꾸고, DB는 나중에',
      database: '운영 DB', columnCount: 4,
      description: '컬럼 삭제의 단계적 배포 예시. 먼저 컬럼 사용을 중단한 새 코드를 배포하고 DB 컬럼은 유지한다. 실제 기능과 구버전 복구 가능 여부를 검증한 뒤, 옛 코드가 더는 필요 없을 때 별도 배포에서 컬럼을 삭제한다.',
      say: '먼저 컬럼을 쓰지 않는 코드로 바꾸고, DB 컬럼은 그대로 남겨두는 거예요.',
      stages: [
        {
          code: '새 코드', codeDetail: '컬럼 사용부터 중단', codeStatus: '코드만 먼저 배포',
          columns: true, dbDetail: 'DB 컬럼은 남겨둠',
          connection: '사용하지 않음', mode: 'unused',
          note: '컬럼 삭제 예시 · 1차 운영 배포',
          say: '먼저 컬럼을 쓰지 않는 코드로 바꾸고, DB 컬럼은 그대로 남겨두는 거예요.',
        },
        {
          code: '새 코드 ↔ 옛 코드', codeDetail: '동작과 복구 가능 여부 확인', codeStatus: '실제 기능 · 복구 검증',
          columns: true, dbDetail: '검증하는 동안 컬럼 유지',
          connection: '호환성 확인', mode: 'checking',
          note: '컬럼 삭제 예시 · 운영에서 검증',
          say: '실제 기능이 정상인지, 필요할 때 옛 코드로 돌아갈 수 있는지 확인해요.',
        },
        {
          code: '새 코드', codeDetail: '옛 코드가 더는 필요 없을 때', codeStatus: '새 코드 유지',
          columns: false, dbDetail: '이제 컬럼 삭제',
          connection: '사용하지 않음', mode: 'unused',
          note: '컬럼 삭제 예시 · 검증 후 별도 배포로 삭제',
          say: '옛 코드로 돌아갈 필요가 없어졌을 때, 별도 배포에서 컬럼을 삭제해요.',
        },
      ],
    },
    {
      kicker: '재발 방지 · PR #337 병합 완료', title: '위험한 DB 변경은, 배포 전에 확인',
      points: [
        '새 DB 변경 파일에서 **삭제·이름 변경**을 자동 검사',
        '발견하면 **코드 검사(CI)를 실패 처리**해 먼저 확인',
        '당시 문제의 **컬럼 삭제 4건**도 검출되는지 확인',
        '옛 코드와 새 코드가 **현재 DB에서 동작하는지** 검토',
      ],
      say: '이번에 넘어진 곳에는, 다음 사람이 볼 수 있게 표시를 남겼어요.',
    },
    {
      type: 'sequence', layout: 'handoff', title: '이번엔, 두 서버 모두 돌아왔다',
      source: { label: '사용자', detail: '요청 보내기' },
      router: { label: '요청 전달', detail: 'ALB' },
      servers: ['서버 A', '서버 B'],
      servingLabel: '응답 중', deployingLabel: '복구 중', excludedLabel: '요청 제외',
      description: '복구 순서를 설명하는 개념도. 현재 DB와 맞는 배포본으로 A부터 복구하고, A의 정상 복귀 후 B를 복구한다. 마지막에는 두 서버 모두 복구를 마치고 응답한다.',
      say: 'DB와 맞는 직전 배포본으로 A를 복구하는 동안, B가 요청을 받았어요.',
      stages: [
        {
          serving: 1, servingDetail: '현재 배포본',
          note: 'A 복구 중 · B가 요청 처리',
          say: 'DB와 맞는 직전 배포본으로 A를 복구하는 동안, B가 요청을 받았어요.',
        },
        {
          serving: 0, servingDetail: '복구한 배포본',
          note: 'A 정상 복귀 확인 → B 복구',
          say: 'A가 정상적으로 돌아온 것을 확인한 뒤, B를 복구하고 A가 요청을 받았어요.',
        },
        {
          serving: [0, 1], servingLabel: '복구 완료', servingDetail: '정상 응답',
          note: '헬스 요청 2,421건 · 실패 0건 · 약 6분',
          say: '같은 코드의 다른 빌드로 복구했고, 다른 코드로의 롤백은 아직 확인이 필요해요.',
        },
      ],
    },
    {
      type: 'cards', title: '확인한 것과, 아직 남은 것',
      cards: [
        { label: '이번에 확인', title: '배포 중 응답 유지', detail: '헬스 요청 실패 0건\n순차 배포와 자동 복구 절차\n같은 코드의 다른 빌드로 복구' },
        { label: '추가 검증', title: '실제 사용 흐름까지', detail: '조회 등 실제 기능의 응답\n다른 코드 버전으로 롤백\n반복 작업의 중복 실행 여부' },
      ],
      takeaway: '이번 **실패 0건**은 상태 확인 API를 측정한 결과',
      say: '상태 확인 요청은 통과했지만, 실제 기능도 끊기지 않는지는 별도로 확인해야 해요.',
    },
    {
      type: 'table', title: '다음에는, 여기까지 확인합니다',
      head: ['다음 확인', '방법', '확인할 것'],
      rows: [
        ['다른 코드로 복구', '다음 운영 배포에서 연습', 'DB 호환성·복구 시간'],
        ['실제 기능·반복 작업', '배포 중 호출·실행 기록 확인', '오류·중복 실행 여부'],
        ['추가 서버 비용', '실제 청구 비용 확인', '월 약 8달러 추정 검토'],
      ],
      say: '이번 변경은 운영 환경에 적용했고, 개발 환경은 비용을 고려해 한 대를 유지했어요.',
    },
    {
      type: 'hypothesis', title: '이번 배포에서 배운 것',
      claims: ['**요청을 받을 서버**와\n**되돌아갈 수 있는 버전**을 함께 남겨두자'],
      say: '새 버전으로 바뀌어도, 무대는 계속 열려 있도록요.',
    },
  ],
};
