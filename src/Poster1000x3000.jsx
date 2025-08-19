import React from "react";

export default function Poster1000x3000() {
  const brand = "극한 퀵 서비스";
  const phone = "1844-1025";
  const W = 1000, H = 2100;

  const h = (px) => ({ fontSize: px, fontWeight: 800, lineHeight: 1.1, margin: 0 });
  const t = (px, color="#475569") => ({ fontSize: px, color, margin: 0 });
  const card = { borderRadius: 24, border: "1px solid #e9eef7", background: "#fff", boxShadow: "0 20px 60px rgba(13,51,126,.12)" };
  const center = "d-flex flex-column align-items-center text-center";

  return (
    <div 
      className={`${center}`} 
      style={{ width: W, height: H, margin: "0 auto", background:"#fff", color:"#0f172a", fontFamily:"system-ui,-apple-system,Segoe UI,Roboto,Noto Sans KR,Arial" }}
    >
      {/* ---- 내장 스타일 ---- */}
      <style>{`
        .glow { box-shadow: 0 12px 40px rgba(30, 64, 175, .25); }
        .ribbon { position: relative; display:inline-block; padding: 10px 18px; border-radius: 999px; background:#facc15; color:#111827; font-weight:800; }
        .ribbon::after { content:""; position:absolute; right:-14px; top:50%; transform:translateY(-50%) rotate(45deg); width:20px; height:20px; background:#facc15; }
        .wave { position:absolute; left:0; right:0; bottom:-1px; height:90px; background:
          radial-gradient(50% 80% at 50% 100%, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%); }
        .badge-soft { background:#e9f1ff; color:#0b3c96; font-weight:700; border-radius:14px; }
        .card-soft:hover { transform: translateY(-2px); box-shadow:0 24px 70px rgba(13,51,126,.18); }
      `}</style>

      {/* =================== 헤더 =================== */}
      <header 
        className={`${center} position-relative`} 
        style={{ width:"100%", height:520, }}
      >
        {/* 배경 */}
        <div 
          className="position-absolute w-100 h-100" 
          style={{ background: `linear-gradient(135deg, #132d83ff, #729dfbff) center/cover no-repeat` }}
        />
        {/* 디테일 효과 */}
        <div 
          className="position-absolute w-100 h-100" 
          style={{
            background: "radial-gradient(500px 300px at 20% 20%, rgba(255,255,255,.25), transparent), radial-gradient(500px 300px at 80% 30%, rgba(255,255,255,.18), transparent)"
          }}
        />

        <div className="position-relative container py-4 d-flex flex-column align-items-center justify-content-center h-30">
          {/* 로고 */}
          <img 
            src="/title.png"
            alt="극한퀵서비스 로고" 
            style={{ maxWidth:"280px", height:"auto", marginBottom:"16px", marginTop:"10px" }}
          />

          {/* 전화 버튼 */}
          <img
            src="/call.png"
            alt="전화걸기"
            style={{ maxWidth: "280px", height: "auto", marginBottom: "16px", cursor:"pointer" }}
            onClick={() => {
              const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
              if (isMobile) {
                window.location.href = `tel:${phone}`;
              } else {
                alert("전화 연결은 모바일 기기에서만 가능합니다.");
              }
            }}
          />

          {/* 서브 텍스트 */}
          <p className="mt-2" style={t(22, "#dbeafe")}>빠른 배차 · 전국 당일배송 · 24시 연중무휴</p>

          {/* 배지 */}
          <div className="row g-2 mt-3 justify-content-center w-100">
            {["10분 이내 배차","실시간 GPS 추적","세금계산서·현금영수증","카드결제·월정거래"].map((b,i)=>(
              <div key={i} className="col-6 col-md-3">
                <div className="text-center py-2 badge-soft">{b}</div>
              </div>
            ))}
          </div>
        </div>
        
      </header>

      {/* =================== 차량/서비스 =================== */}
      <section className={`${center} container`} style={{ padding:"28px 24px 0" }}>
        <h2 style={h(36)}>어떤 화물도, 맞춤 차량으로</h2>
        <p className="mt-1" style={t(20, "#607d8b")}>오토바이 · 다마스 · 라보 즉시 배차</p>

        <div className="row g-3 mt-2 w-100 justify-content-center">
          {[
            { title:"오토바이 퀵", sub:"서류·소형 박스 급송 특화", bullets:["도심 초고속","짧은 픽업 대기","수도권 즉시 배달"] },
            { title:"다마스 퀵",   sub:"약 350kg 이하",           bullets:["행사용품·꽃·케이터링","장비·소형 가전","장거리도 합리적"] },
            { title:"라보 퀵",     sub:"약 450kg 이하",           bullets:["학생물건/소형 이사","건축·공업 자재","중량물 안전 운반"] },
          ].map((v, i) => (
            <div key={i} className="col-10 col-md-4">
              <div className={`p-3 h-100 ${center} card-soft`} style={card}>
                <p className="mt-1 text-primary" style={{...h(24)}}>{v.title}</p>
                <p className="mt-1" style={t(16)}>{v.sub}</p>
                <ul className="mt-2 text-start" style={{ color:"#0f172a", listStyle:"disc", paddingLeft:20 }}>
                  {v.bullets.map(b => <li key={b} className="mb-2">{b}</li>)}
                </ul>
                <div style={{ height:2, background:"linear-gradient(90deg,#dbeafe,transparent)" }} />
                <p className="mt-2 mb-0" style={t(12, "#90a4ae")}>* 허용 중량은 차량·노선에 따라 상이할 수 있습니다.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================== 미드 CTA =================== */}
      <section className={`${center} container`} style={{ padding:"16px 24px 0" }}>
        <div className={`p-4 w-100 ${center}`} style={{ ...card, background:"#eaf2ff", borderColor:"#cfe0ff" }}>
          <p className="mb-1" style={h(26)}>상담만 해도 배차가 빨라집니다.</p>
          <div 
            className="border bg-white px-4 py-2 rounded-pill fw-black glow"
            style={{ borderColor:"#cfe0ff", fontSize: 28, letterSpacing: 1 }}
          >
            {phone}
          </div>
        </div>
      </section>

      {/* =================== 선택 이유 =================== */}
      <section className={`${center} container`} style={{ padding:"28px 24px 0" }}>
        <h3 style={h(32)}>왜 {brand}인가요?</h3>
        <p className="mt-1" style={t(16, "#64748b")}>실제 운송 운영 기준으로 투명하고 빠르게 대응합니다.</p>

        <div className="row g-3 mt-2 w-100 justify-content-center">
          {[
            ["24시 센터","365일 24시간 전문 상담/배차"],
            ["전국 당일","수도권 즉시, 지방 당일 도착"],
            ["실시간 추적","픽업→도착까지 GPS 공유"],
            ["보험 가입","파손/분실 대비 책임보험"],
            ["합리 요금","거리·중량 맞춤 요금 사전 안내"],
            ["월정 거래","문의"],
          ].map(([title, desc], i) => (
            <div key={i} className="col-10 col-md-4">
              <div className={`p-3 ${center} card-soft`} style={card}>
                <p className="mb-1 text-primary" style={{ fontSize: 20, fontWeight: 800 }}>{title}</p>
                <p className="mb-0" style={t(16, "#37474f")}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================== 절차 =================== */}
      <section className={`${center} container`} style={{ padding:"28px 24px 0" }}>
        <h3 style={h(32)}>이용 절차</h3>
        <div className="row g-2 mt-2 w-100 justify-content-center">
          {[
            ["전화/문자 접수","1844-1025로 연락"],
            ["즉시 배차","가까운 기사 연결"],
            ["현장 픽업","안전 포장 후 출발"],
            ["실시간 안내","GPS로 진행 상황 공유"],
            ["도착/정산","카드·현금·세금계산서"],
          ].map(([title, desc], i) => (
            <div key={i} className="col-10 col-md-2">
              <div className={`p-3 ${center}`} style={{ ...card, background:"#f8fafc" }}>
                <span 
                  className="rounded-circle d-inline-flex justify-content-center align-items-center text-white mb-1"
                  style={{ width: 30, height: 30, background:"#1d4ed8", fontWeight: 800 }}
                >
                  {i+1}
                </span>
                <p className="mb-0 fw-bold" style={t(15, "#0f172a")}>{title}</p>
                <p className="mb-0" style={t(14, "#607d8b")}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================== FAQ =================== */}
      <section className={`${center} container`} style={{ padding:"28px 24px 0" }}>
        <h3 style={h(32)}>자주 묻는 질문</h3>
        {[
          ["운행 지역은?","전국 어디든 가능합니다. 수도권은 즉시, 지방은 당일/익일 도착 안내."],
          ["결제 방법은?","카드·계좌이체·현금 가능. 세금계산서/현금영수증 발행."],
          ["중량물도 가능한가요?","다마스/라보 배차로 350~450kg 이하 화물을 안전 운반합니다."],
        ].map(([q, a], idx) => (
          <div key={idx} className="p-3 mt-2 w-100" style={{ ...card, background:"#f8fafc" }}>
            <p className="mb-1 text-primary" style={{ fontSize: 18, fontWeight: 800 }}>Q. {q}</p>
            <p className="mb-0" style={t(16, "#0f172a")}>A. {a}</p>
          </div>
        ))}
      </section>

      {/* =================== 푸터 =================== */}
      <footer 
        className={`${center} position-relative justify-content-center`} 
        style={{ 
          width: "100%", 
          height: 360, 
          marginTop: 24, 
          color: "#fff", 
          background: "linear-gradient(135deg, #132d83ff, #729dfbff)" 
        }}
      >
        <p className="mb-0" style={t(22, "#e2e8f0")}>지금 배차 상담하세요</p>

        <img 
          src="/title.png"
          alt="극한퀵서비스 로고" 
          style={{ maxWidth:"280px", height:"auto", marginBottom:"16px" }}
        />

        <img
          src="/call.png"
          alt="전화걸기"
          style={{ maxWidth: "280px", height: "auto", marginBottom: "16px", cursor:"pointer" }}
          onClick={() => {
            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (isMobile) {
              window.location.href = `tel:${phone}`;
            } else {
              alert("전화 연결은 모바일 기기에서만 가능합니다.");
            }
          }}
        />
      </footer>
    </div>
  );
}
