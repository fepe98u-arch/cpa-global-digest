# 매일 국제 회계·감사 다이제스트 만들기 — 편집 지침

**실행 방식**: 클라우드 자동화는 매일 "오늘 다이제스트 만들 시간이에요" 알림만 보낸다 (GitHub 쓰기 권한 문제로 실제 리서치·작성은 못 함, 2026-08-11 확인). 보스가 Claude Code를 열고 요청하면, 로컬 세션이 이 지침에 따라 1~4단계를 전부 그 자리에서 수행한다.

## 1단계 — 오늘의 이슈 찾기

웹 검색으로 아래 소스를 확인해서, 오늘(또는 최근 1~2일 내) 발표된 것 중 **한국 공인회계사 실무에 의미 있는** 이슈를 3~5건 선정한다.

- IFRS Foundation (ifrs.org) — 기준서 개정, ISSB 지속가능성 공시
- IAASB (iaasb.org) — 국제감사기준(ISA) 개정
- PCAOB (pcaobus.org) — 검사 결과, 제재, 기준 개정
- SEC (sec.gov) — 회계·공시 관련 규정
- AICPA / Journal of Accountancy (journalofaccountancy.com)
- Accounting Today (accountingtoday.com), CPA Practice Advisor
- Big4 Audit & Assurance 인사이트 (Deloitte, PwC, EY, KPMG)

**선정 기준** (우선순위 순): 1) 새 기준서/노출초안 발표·확정, 2) 규제기관 제재·집행 조치·검사 중점사항, 3) 대형 재무제표 재작성·회계부정 사례, 4) 감사기준 개정, 5) ESG/지속가능성 공시 규제 변화.

같은 이슈를 여러 소스가 다루면 원문(1차 출처) 기준. 이미 사이트에 발행된 이슈와 겹치면 건너뛴다(`src/content/posts/`에서 최근 발행 목록 확인). 5건을 못 채우면 억지로 채우지 말고 3~4건만 만들어도 된다 — 품질이 개수보다 중요하다.

## 2단계 — 번역 + 요약본/상세본 작성

각 이슈마다 마크다운 파일 하나씩:

- **파일명**: `YYYY-MM-DD-짧은-영문-슬러그.md`
- **저장 위치**: 이 저장소의 `drafts/YYYY-MM-DD/`

**Frontmatter** (필수 — 하나라도 빠지면 발행 도구가 거부함):
```yaml
---
title: "한글 제목"
date: YYYY-MM-DD
category: "IFRS" | "감사기준" | "SEC/규제" | "ESG공시" | "세무"   # 이 5개 중 하나만
summary: "3~5문장 한글 요약"
sourceName: "원문 매체/기관명"
sourceUrl: "https://원문-링크"
---
```

**본문 구조**:
```markdown
## 배경
(왜 이 이슈가 발생했는지 2~4문장)

## 핵심 내용
(구체적으로 무엇이 바뀌었는지 — 불릿 3~5개 권장)

## 실무 시사점
(한국 회계법인·공인회계사가 무엇을 준비해야 하는지 2~4문장)
```

번역 톤: 전문 회계 매체 스타일. 숫자·고유명사·기준서 번호는 정확히. 애매하면 "~로 알려졌다", "~검토 중이다" 등으로 표현하고 단정하지 않는다.

## 3단계 — 보스에게 검토 요청

draft가 다 준비되면 제목·카테고리·요약을 목록으로 보여주고 검토를 요청한다. **절대 승인 없이 4단계(발행)를 진행하지 않는다.**

## 4단계 — 발행 (보스 승인 후)

```
python "<자동화 저장소 경로>/tools/publish_posts.py" --site-dir "C:/dev/cpa-global-digest" --date YYYY-MM-DD [--only slug1,slug2]
```

frontmatter를 검증하고 `drafts/YYYY-MM-DD/`에서 `src/content/posts/`로 옮긴 뒤 git commit + push까지 수행한다. push되면 Vercel이 자동 재배포한다.

## 예외 처리

- 오늘 의미 있는 이슈가 3건 미만이면 억지로 채우지 말고 있는 만큼만 만들고 사유를 알린다.
- 특정 소스에 접속이 안 되면 다른 소스로 대체한다.
- git push가 실패하면(충돌 등) 강제 push하지 말고 에러를 그대로 보고한다.
