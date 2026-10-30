# 예술in 데모데이 발표

도트 게임 마을에서 포탈로 들어가면 슬라이드가 열리는 발표 자료.

## 실행

`index.html`을 Chrome에서 열면 된다. 앱 내장 브라우저처럼 로컬 파일 입력이 막히는 환경에서는 로컬 서버로 띄운다.

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

## 조작

| 화면 | 키 |
| --- | --- |
| 시작 | ↑/↓ 채널 고르기, Enter 또는 클릭으로 입장 |
| 마을 | 방향키·WASD 이동, 숫자 키로 포탈 바로가기, 아래 길로 나가면 채널 선택, `F` 전체화면 |
| 슬라이드 | ←/→ 넘기기, ↓/↑ 사진 더미 넘기기, ESC 마을로 |

## 내용 수정

포탈별 슬라이드는 `slides/soft.js`, `slides/product.js`, `slides/tech.js`에 나뉘어 있다. 맡은 포탈 파일만 고치면 된다. 전광판 등 마을 설정은 `index.html` 상단의 `CONFIG`에 있다.

### 채널(스프린트)과 포탈

시작 화면은 채널 선택이다. 채널마다 마을의 포탈 구성이 다르고, 포탈 수에 맞춰 마을이 자동으로 다시 그려진다(1~4개 권장).

- 채널 목록은 `index.html`의 `CONFIG.channels`에 있다.
- 포탈 하나는 `{ slides: 'PORTAL_SLIDES 키', file: '슬라이드 파일 경로', label, theme }` 한 줄이다. `theme`은 `pink`, `gold`, `sky`, `mint`, `violet`, `coral` 중 하나.
- 스토리를 늘리려면 `slides/sprint3/story-d.js`를 만들고 `PORTAL_SLIDES['story-d']`를 채운 뒤 채널의 `portals`에 한 줄을 추가한다. 줄이려면 그 줄을 지운다.
- 새 채널은 `{ id, label, isNew, portals: [...] }`를 `CONFIG.channels`에 추가한다.

- 포탈 파일의 `slides` 배열을 채운다. 첫 장 목차는 `type: 'act'` 슬라이드에서 자동으로 만들어진다.
- 막은 `act: 1`(지난 무대), `act: 2`(지금 무대), `act: 3`(다음 무대)로 나눈다. `items`가 목차의 세부 항목이 된다.
- 막 이름은 포탈 파일의 `actRoles: { 1: '...', 2: '...', 3: '...' }`로 바꿀 수 있다.
- 주요 필드
  - `title`, `subtitle`, `kicker`, `big`(크게 강조할 단어)
  - `points`: 글머리 목록. `**강조**`는 밑줄 표시
  - `image`: 이미지 한 장, `images`: 클릭으로 넘기는 사진 더미
  - `type: 'hypothesis'` + `claims`: 가설 화면. `points`를 주면 가설 위에 배경 설명으로 나온다
  - `type: 'compare'` + `before`/`after`: 전후 비교
  - `type: 'gaps'` + `rows: [{ tag, who, why, need }]`: 누가, 왜, 무엇이 필요한지 비교하는 표
  - `type: 'cycle'` + `steps`, `loop`: 반복 사이클
  - `type: 'flow'` + `steps`, `loop`: 반복 없는 진행 흐름. `loop`는 아래 한 줄 설명
  - `type: 'chat'` + `room`, `stages`, `messages`, `popup`: 다음을 누를 때마다 채팅이 한 단계씩 진행되는 장면
  - `type: 'arena'` + `stages: [{ rps, p95, err, mode: 'ok' | 'slow' | 'down', note }]`: 사람이 서버로 몰려드는 부하 테스트 장면
  - `type: 'table'` + `head`, `rows`: 표. 마지막 열이 강조된다
  - `type: 'journey'` + `stations`, `stages`: 서류가 정거장을 따라 이동하는 장면
    - 정거장: `{ id, name, tech, icon, x, y, popSide }`. `x`, `y`는 지도 안의 % 위치, `popSide`는 `right`(기본)·`left`·`below`
    - 단계: `{ at, from, label, curve, carry, tone, pops, signals, note }`. `from`을 생략하면 이전 정거장에서 출발하고, `tone`은 `wait`·`done`·`fail`
    - 아이콘: `browser`, `office`, `bucket`, `gear`, `review`, `db`, `hourglass`, `robot`, `magnifier`, `card`, `warning`
  - `type: 'visit'` + `place`, `poster`, `cast`, `stages`: 두 캐릭터가 양옆에 서서 대사창으로 대화하는 장면
    - 등장인물: `[{ name, look }]` 두 명. 첫 번째가 왼쪽, `look`은 `hero`·`theater`
    - 단계: `{ speaker, line }`. 다음을 누를 때마다 말하는 사람과 대사가 바뀐다
  - `say`: 캐릭터 대사창
- 이미지는 `assets/` 아래에 둔다. 전광판 사진은 `CONFIG.billboard.images`.
